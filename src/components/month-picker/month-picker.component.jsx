import React from 'react';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { connect } from 'react-redux'

import { selectedMonth } from '../../redux/budget/budget.actions'

import './month-picker.styles.scss';

class MonthPicker extends React.Component {
  constructor(){
    super();
    this.state = {
      startDate: new Date()
    }
  }

  componentDidMount(){
    const { selectedMonth } = this.props;  
    selectedMonth(this.state.startDate);
  }

  componentDidUpdate(){
    const { selectedMonth } = this.props;  
    selectedMonth(this.state.startDate);
  }


  handleChange = date => {
    this.setState({
      startDate: date
    });

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

const mapDispatchToProps = dispatch => ({
  selectedMonth: month => dispatch(selectedMonth(month)) 
})

export default connect(null,mapDispatchToProps)(MonthPicker);
