import React, { Fragment } from "react";
import { hot } from "react-hot-loader";
import EntriesRenderProp from "./EntriesRenderProp";
import ClipboardWatcher from "./ClipboardWatcher";
import DayView from "./DayView";

function mapEntries(entries) {
  return entries.map(entry => ({
    time: entry.dateTime,
    AET: entry.AET
  }));
}

function App() {
  return (
    <EntriesRenderProp>
      {({ entries, addEntry }) => {
        const entriesInDisplayFormat = mapEntries(entries);
        return (
          <Fragment>
            <DayView entries={entriesInDisplayFormat} />
            <ClipboardWatcher watchDelay={0} onEntryDetect={addEntry} />
          </Fragment>
        );
      }}
    </EntriesRenderProp>
  );
}

export default hot(module)(App);
