import React from 'react';
import { Card, CardContent } from '@material-ui/core';

// package used to get the days of the week for the calendar
import moment from 'moment';

// styles for each grid item
const grid_items_styles = {
    background: '#F9F9F9',
    height: '100vh',
}

class Calendar extends React.Component{
    constructor(){
        super();
        this.state = {
            dateObject: moment(),
            allMonths: moment.months(),
            showMonthTable: false,
        }
        this.firstDayOfMonth = this.firstDayOfMonth.bind(this);
        this.createBlankSpaces = this.createBlankSpaces.bind(this);
        this.monthList = this.monthList.bind(this);
        this.createDaysInMonth = this.createDaysInMonth.bind(this);
        this.setMonth = this.setMonth.bind(this);
        this.showMonth = this.showMonth.bind(this);
    }

    /* getter function to find when the first weekday in a given month is */
    firstDayOfMonth(){
        const dateObject = this.state.dateObject;
        // firstDay = how many indices from start of table is first day
        const firstDay = moment(dateObject)
                .startOf("month")
                .format("d");
        return firstDay;
    }

    /* create blank spaces before first day of month */
    createBlankSpaces(){
        let blanks = [];
        const firstDay = this.firstDayOfMonth();
        for (let i = 0; i < firstDay; i++){
            blanks.push(
                <td className="empty-day">{""}</td>
            )
        }
        return blanks;
    }

    /* generate a td tag for every day in this month */
    createDaysInMonth(){
        // gets number rep of current day to highlight the curr day
        const currDay = this.state.dateObject.format("D");

        let daysInMonth = [];
        const numDaysInMonth = moment().daysInMonth();
        for (let d = 1; d <= numDaysInMonth; d++){
            d == currDay ? 
                daysInMonth.push(
                    <td key={d} className="day" style={{color: 'red'}}>
                        {d}
                    </td>
                ) :
                daysInMonth.push(
                    <td key={d} className="day">
                        {d}
                    </td>
                );
        }

        return daysInMonth;
    }

    /* allows you to set which month you want to display */
    setMonth(month){
        let monthNo = this.state.allMonths.indexOf(month);
        let dateObject = Object.assign({}, this.state.dateObject);
        // change which month will be displayed
        dateObject = moment(dateObject).set("month", monthNo);
        // when click on month, close month selector and show days in that month
        this.setState({
            dateObject: dateObject,
            showMonthTable: !this.state.showMonthTable,
        })
    }

    /* get list of all of the months in a year to allow selection of month */
    monthList(props){
        let months = [];
        
        // props = selected month object from moment
        props.map(data => {
            months.push(
                <td key={data} onClick={e => {this.setMonth(data)}}>
                    <span>{data}</span>
                </td>
            )
        })
        return months;
    }

    /* when click on the month selector, show months you can display */
    showMonth(e, month){
        this.setState({
            showMonthTable: !this.state.showMonthTable
        })
    }

    render(){
        // get table header elts for each day of the week (Sun, Mon, Tue, etc)
        const weekdayShort = moment.weekdaysShort();
        const weekdayShortName = weekdayShort.map(day => {
            return(
                <th key={day} className="week-day">
                    {day}
                </th>
            )
        })

        // combine blanks and actual days into one array
        const blanks = this.createBlankSpaces();
        const daysInMonth = this.createDaysInMonth();
        const totalSlots = [...blanks, ...daysInMonth];
        let rows = [], cells = [];

        // get calendar structure of a week (decide which days in which row/colm)
        totalSlots.forEach((row, i) => {
            // if not end of week, then add day to the current week
            if (i % 7 !== 0){
                cells.push(row);
            }
            // reach end of week, so reset everything
            else{
                rows.push(cells);
                cells = [];
                cells.push(row);
            }
            // when reach end of loop, add remaining week to calendar
            if (i === totalSlots.length - 1){
                rows.push(cells);
            }
        })

        // current struct of rows: [[firstweek], [secondweek], ...]
        // wrap all rows of weeks in a td to display
        const days = rows.map((d, i) => {
            return <tr>{d}</tr>
        })

        // get current month to display
        const currMonth = this.state.dateObject.format("MMMM");

        // create rows for months in the year
        rows = [];
        cells = [];
        const months = this.monthList(moment.months());
        months.forEach((row, i) => {
            // each row will hold three months
            if (i % 3 !== 0 || i == 0){
                cells.push(row);
            }
            else{
                rows.push(cells);
                cells = [];
                cells.push(row);
            }
        })
        // add last row before end of months
        rows.push(cells);

        // make every row a tr element
        let monthlist = rows.map((d, i) => {
            return <tr>{d}</tr>;
        })

        return (
            <div className='cal-container'>
                <Card>
                    <CardContent style={grid_items_styles}>
                        <h3>Calendar</h3>
                        <div className="calendar">
                            <div className="cal-header">
                                <h4>{currMonth}</h4>
                            </div>
                            <div className="cal">
                                <table className="month-selector">
                                    <thead onClick={e => {this.showMonth()}}>
                                        <h4>Select a Month</h4>
                                    </thead>
                                    <tbody>
                                        {
                                            // show the month table if the boolean is true
                                            this.state.showMonthTable && monthlist
                                        }
                                    </tbody>
                                </table>
                                {
                                    !this.state.showMonthTable && (
                                        <table className="day-selector">
                                            <thead>
                                                {weekdayShortName}
                                            </thead>
                                            <tbody>
                                                {days}
                                            </tbody>
                                        </table>
                                    )
                                }
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        )
    }
}

export default Calendar;