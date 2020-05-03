import React from "react";

class Summary extends React.Component{
    render(){
        const {summary,currentDate} = this.props;
        return(
            <div className="Container">
              <div className="NewConfirmed">
                <h1>New Confirmed Cases</h1>
                <h3>{summary.NewConfirmed}</h3>
              </div>
              <div className="NewDeaths">
              <h1>New Death Cases</h1>
              <h4>{summary.NewDeaths}</h4>
              </div>
              <div className="NewRecovered">
                <h1>Recovered Cases</h1>
                <h3>{summary.NewRecovered}</h3>
              </div>
              <div className="TotalConfirmed">
              <h1>Total Confirmed Cases</h1>
              <h3>{summary.TotalConfirmed}</h3>
              </div>
              <div className="TotalDeaths">
                  <h1>Total Deaths</h1>
                  <h3>{summary.TotalDeaths}</h3>
              </div>
              <div className="TotalRecovered">
                  <h1>Total Recovered</h1>
                  <h3>{summary.TotalRecovered}</h3>
              </div>
            </div>


        )
    }
}
export default Summary;