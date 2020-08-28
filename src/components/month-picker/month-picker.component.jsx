import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './month-picker.styles.scss'

class MonthPicker extends React.Component {
  constructor(){
    super();
    this.state = {
      startDate: new Date()
    }
  }

  componentDidMount(){
    console.log(this.state.startDate)
  }


  handleChange = date => {
    this.setState({
      startDate: date
    }, () => console.log(this.state.startDate));
  };
  render(){
  return (
    <div className="month-picker">
      <DatePicker
          dateFormat="MMMM yyyy"
          showMonthYearPicker
          selected={this.state.startDate}
          onChange={this.handleChange}
          className = "month-picker__el"
      />
    </div>
  );
  }
}

export default MonthPicker;
