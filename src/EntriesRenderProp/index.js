import React from "react";
import addEntry from "./addEntry";
import { loadEntries } from "./storage";
import { timingSafeEqual } from "crypto";

class Entries extends React.Component {
  state = {
    entries: []
  };

  componentDidMount() {
    const entries = loadEntries();
    this.setState({ entries });
  }

  handleAddEntry = (dateTime, AET) => {
    this.setState(({ entries }) => ({
      entries: addEntry(dateTime, AET, entries)
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
