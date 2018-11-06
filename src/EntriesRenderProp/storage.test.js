import { saveEntry, loadEntries } from "./storage";

Object.defineProperty(window, "localStorage", {
  value: {
    setItem: jest.fn(() => null),
    getItem: jest.fn(() => null)
  }
});

describe("Storage", () => {
  describe("saveEntry", () => {
    it("calls localStorage including previous entries", () => {
      const entry = {
        AET: 8,
        dateTime: new Date().getTime()
      };

      const entry2 = {
        AET: 7,
        dateTime: new Date().getTime()
      };

      saveEntry(entry);

      saveEntry(entry2);

      expect(window.localStorage.setItem).toHaveBeenLastCalledWith(
        "entries",
        JSON.stringify([entry, entry2])
      );
    });

    describe("loadEntries", () => {
      it("calls localStorage", () => {
        loadEntries();
        expect(window.localStorage.getItem).toHaveBeenLastCalledWith("entries");
      });

      it("returns a empty array if the localStore returns nothing", () => {
        //
        const response = loadEntries();
        expect(response).toEqual([]);
      });

      it("returns the response of localStorage.getItem", () => {
        window.localStorage.getItem.mockReturnValueOnce(
          JSON.stringify(["item1"])
        );
        const response = loadEntries();
        expect(response).toEqual(["item1"]);
      });
    });
  });
});
