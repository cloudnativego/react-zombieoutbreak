import React from 'react';
import uuid from 'node-uuid';
import Outbreaks from "./Outbreaks"

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      outbreaks: [
        {
          id: uuid.v4(),
          origin: "Station Gamma",
          severity: "Yellow",
          description: "This was bad",
          date: "03-04-2016 12:00"
        }
      ]
    }
  }

  render() {
    const outbreaks = this.state.outbreaks;

    return (
      <div>
        <button onClick={this.addOutbreak}>New Report</button>
        <Outbreaks outbreaks={outbreaks} onEdit={this.editOutbreak}  onDelete={this.deleteOutbreak}/>
      </div>
    );
  }

  deleteOutbreak = (id, e) => {
    e.stopPropagation();
    this.setState({
      outbreaks: this.state.outbreaks.filter(outbreak => outbreak.id !== id)
    });
  };

  editOutbreak = (id, description) => {
    if(!description.trim()) {
      return;
    }
    const outbreaks = this.state.outbreaks.map(outbreak => {
      if(outbreak.id === id && outbreak) {
        outbreak.description = description;
      }
      return outbreak;
    });
    this.setState({outbreaks});
  };

  addOutbreak = () => {
    var d = new Date();
    var datestring = ("0" + d.getDate()).slice(-2) + "-" + ("0"+(d.getMonth()+1)).slice(-2) + "-" +
    d.getFullYear() + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);

   this.setState({
      outbreaks: this.state.outbreaks.concat([{
        id: uuid.v4(),
        origin: 'Alpha Fortress',
        severity: 'Green',
        date: datestring,
        description: 'New Report'
      }])
    });
  };
}
