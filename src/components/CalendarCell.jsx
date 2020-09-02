import React from 'react';
import PropTypes from 'prop-types';
import { CalendarCellModel } from '../models/CalendarCellModel';

export function CalendarCell({ model }) {

    let className;
    if (model.today.diff(model.day, 'days') === 0){
        className = 'ui-datepicker-today';
    }
    if (!model.today.isSame(model.day, 'month')){
        className = 'ui-datepicker-other-month';
    }

    return (
        <td className={className}>{model.day.format('D')}</td>
    );
} 

CalendarCell.propTypes = {
    model: PropTypes.instanceOf(CalendarCellModel)
};