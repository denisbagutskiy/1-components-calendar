import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import { CalendarTable } from './CalendarTable';
import { CalendarCellModel } from '../models/CalendarCellModel';

function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1)
}

export function Calendar({ date }) {

    let today = Moment(date);
    const startWeek = today.clone().startOf('month').week();
    const endWeek = today.clone().endOf('month').week();

    let table = [];
    for(let week = startWeek; week <= endWeek; week++){
        table.push(Array(7).fill(0).map((n, i) => new CalendarCellModel({ day: Moment().week(week).startOf('week').clone().add(n + i, 'day'), today: today })));
    };

    return (
        <div className="ui-datepicker">
            <div className="ui-datepicker-material-header">
                <div className="ui-datepicker-material-day">{capitalize(today.format('dddd'))}</div>
                <div className="ui-datepicker-material-date">
                    <div className="ui-datepicker-material-day-num">{today.format('D')}</div>
                    <div className="ui-datepicker-material-month">{today.format('DD MMMM').replace(/[0-9]/g, '')}</div>
                    <div className="ui-datepicker-material-year">{today.format('yyyy')}</div>
                </div>
            </div>
            <div className="ui-datepicker-header">
                <div className="ui-datepicker-title">
                <span className="ui-datepicker-month">{capitalize(today.format('MMMM'))}</span>&nbsp;<span className="ui-datepicker-year">{today.format('yyyy')}</span>
                </div>
            </div>
            <CalendarTable table={table}></CalendarTable>
        </div>
    );
} 

Calendar.propTypes = {
    date: PropTypes.object
};