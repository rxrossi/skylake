import React from "react";

class DaySelectAndFilter extends React.Component {
  state = {
    date: null
  };

  handleChangeDate = e => {
    const date = e.target.value;

    this.setState({
      date
    });
  };

  render() {
    const { date } = this.state;
    return (
      <div>
        <input type="date" value={date} onChange={this.handleChangeDate} />
        {this.props.children(date)}
      </div>
    );
  }
}

export default DaySelectAndFilter;
