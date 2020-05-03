import React from "react";
import axios from "axios";
import Summary from "./Summary";
class Details extends React.Component {
  state = {
    countries: [],
    global: [],
    currentDate: null,
    loading: true,
  };
  async componentDidMount() {
    const res = await axios.get("https://api.covid19api.com/summary");
    console.log(res);
    this.setState({ countries: res.data.Countries });
    this.setState({ global: res.data.Global });
    this.setState({ currentDate: res.data.Date });
    this.setState({ loading: false });
  }
  render() {
    if (this.state.loading) {
      return (
        <div className="loading">
          <h1>Loading..</h1>
        </div>
      );
    }
    return (
      <div className="main">
        <p>Covid-19 Tracker</p>
        <Summary
          summary={this.state.global}
          currentDate={this.state.currentDate}
        />
      </div>
    );
  }
}
export default Details;
