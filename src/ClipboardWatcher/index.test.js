import React from "react";
import { shallow, mount } from "enzyme";
import ClipboardWatcher from ".";
import clipboardWatcher from "electron-clipboard-watcher";

jest.mock("electron-clipboard-watcher", () =>
  jest.fn().mockReturnValue({
    stop: jest.fn()
  })
);
let simulateClipboardTextChange;

describe("ClipboardWatcher", () => {
  afterEach(() => {
    jest.clearAllMocks();

    simulateClipboardTextChange = (clipboard, text) => {
      clipboardWatcher.mock.calls[0][0].onTextChange(text);
    };
  });

  describe("Mounting and unmounting", () => {
    it("mounts the clipboardWatch lib correctly", () => {
      shallow(<ClipboardWatcher watchDelay={0} />);

      expect(clipboardWatcher).toHaveBeenCalledWith({
        watchDelay: 0,
        onTextChange: expect.any(Function)
      });
    });

    it("stops the clipboardWatch lib on unmount", () => {
      clipboardWatcher.stop = jest.fn();
      const uut = shallow(<ClipboardWatcher />);

      uut.unmount();

      expect(clipboardWatcher().stop).toHaveBeenCalled();
    });
  });

  describe("entry detection", () => {
    it("calls the prop onEntryDetect on clipboard change with the valid format", () => {
      const entry = "10 28 2018 13:00:55	10";
      const [dateTime, AET] = entry.split("\t");
      const onEntryDetect = jest.fn();

      shallow(
        <ClipboardWatcher watchDelay={0} onEntryDetect={onEntryDetect} />
      );

      simulateClipboardTextChange(clipboardWatcher, entry);

      expect(onEntryDetect).toHaveBeenCalledWith(dateTime, AET);
      expect(onEntryDetect).toHaveBeenCalledTimes(1);
    });

    it("does not call onEntryDetect if clipboard change is not in valid format", () => {
      const textWithTabCharacter = "some text 	10";
      const simpleString = "string";

      const onEntryDetect = jest.fn();

      shallow(
        <ClipboardWatcher watchDelay={0} onEntryDetect={onEntryDetect} />
      );

      simulateClipboardTextChange(clipboardWatcher, simpleString);
      simulateClipboardTextChange(clipboardWatcher, textWithTabCharacter);

      expect(onEntryDetect).toHaveBeenCalledTimes(0);
    });
  });
});
