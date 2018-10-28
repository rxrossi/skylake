import React from "react";
import addEntry from "./addEntry";

class Entries extends React.Component {
  state = {
    entries: []
  };

  handleAddEntry = (time, AET) => {
    this.setState(({ entries }) => ({
      entries: addEntry(time, AET, entries)
    }));
  };

  render() {
    return this.props.children({
      entries: this.state.entries,
      addEntry: this.handleAddEntry
    });
  }
}

export default Entries;
