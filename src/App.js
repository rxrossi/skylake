import React, { Fragment } from "react";
import { hot } from "react-hot-loader";
import EntriesRenderProp from "./EntriesRenderProp";
import ClipboardWatcher from "./ClipboardWatcher";
import { convertEntriesToTime } from "./convertEntriesToDisplay";
import DayView from "./DayView";
import DisplayEntriesAETSum from "./DisplayEntriesAETSum";

function App() {
  return (
    <EntriesRenderProp>
      {({ entries, addEntry }) => {
        const entriesInDisplayFormat = convertEntriesToTime(entries);
        return (
          <Fragment>
            <DayView entries={entriesInDisplayFormat} />
            <hr />
            Total AET: <DisplayEntriesAETSum entries={entries} />
            <ClipboardWatcher watchDelay={0} onEntryDetect={addEntry} />
          </Fragment>
        );
      }}
    </EntriesRenderProp>
  );
}

export default hot(module)(App);
