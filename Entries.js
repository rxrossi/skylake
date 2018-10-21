import React from "react";

class Entries extends React.Component {
  state = {
    entries: []
  };

  addEntry = (time, AET) => {
    this.setState(state => ({
      entries: [
        ...state.entries,
        {
          time,
          AET
        }
      ]
    }));
  };

  render() {
    // console.log(this.state.entries);
    return this.props.children({
      entries: this.state.entries,
      addEntry: this.addEntry
    });
  }
}

export default Entries;
