import React, { Fragment } from "react";
import { hot } from "react-hot-loader";
import EntriesRenderProp from "./EntriesRenderProp";
import ClipboardWatcher from "./ClipboardWatcher";
import { convertEntriesToTime } from "./convertEntriesToDisplay";
import DayView from "./DayView";
import DisplayEntriesAETSum from "./DisplayEntriesAETSum";
import DaySelectOutputUTCMilli from "./DaySelectOutputUTCMilli";
import convertInputToUTCMilliRange from "./convertInputToUTCMilliRange";
import filterEntriesByUTCInput from "./filterEntriesByUTCInput";

function App() {
  return (
    <EntriesRenderProp>
      {({ entries, addEntry }) => {
        return (
          <Fragment>
            <DaySelectOutputUTCMilli>
              {date => {
                const entriesInDisplayFormat = convertEntriesToTime(
                  date
                    ? filterEntriesByUTCInput(entries)(
                        convertInputToUTCMilliRange(date)
                      )
                    : entries
                );

                return (
                  <div>
                    <hr />
                    Total AET: <DisplayEntriesAETSum entries={entries} />
                    <hr />
                    <DayView entries={entriesInDisplayFormat.reverse()} />
                  </div>
                );
              }}
            </DaySelectOutputUTCMilli>
            <ClipboardWatcher watchDelay={0} onEntryDetect={addEntry} />
          </Fragment>
        );
      }}
    </EntriesRenderProp>
  );
}

export default hot(module)(App);
