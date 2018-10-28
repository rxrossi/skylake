import React from "react";
// import clipboardWatcher from ;
const clipboardWatcher = window.require("electron-clipboard-watcher");

export default class ClipboardWatcher extends React.Component {
  componentDidMount() {
    this.watcher = clipboardWatcher({
      watchDelay: this.props.watchDelay,
      onTextChange: this.onEntryDetect
    });
  }

  onEntryDetect = entry => {
    const [dateTime, AET] = entry.split("\t");

    if (Date.parse(dateTime) && entry.split("\t").length === 2) {
      this.props.onEntryDetect(dateTime, AET);
    }
  };
  componentWillUnmount() {
    this.watcher.stop();
  }

  render() {
    return null;
  }
}
