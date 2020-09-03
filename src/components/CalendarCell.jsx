import React from 'react';
import PropTypes from 'prop-types';
import { CalendarCellModel } from '../models/CalendarCellModel';

export function CalendarCell({ cell }) {

    const { today, day } = cell;

    let className;
    if (today.diff(day, 'days') === 0){
        className = 'ui-datepicker-today';
    }
    if (!today.isSame(day, 'month')){
        className = 'ui-datepicker-other-month';
    }

    return (
        <td className={className}>{day.format('D')}</td>
    );
} 

CalendarCell.propTypes = {
    cell: PropTypes.instanceOf(CalendarCellModel)
};