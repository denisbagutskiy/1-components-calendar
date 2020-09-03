import React from 'react';
import PropTypes from 'prop-types';
import { CalendarCell } from './CalendarCell';
import { CalendarCellModel } from '../models/CalendarCellModel';

export function CalendarRow({ row }) {
    return (
        <tr>
            {row.map((cell, i) => 
                <CalendarCell key={i} cell={cell}></CalendarCell>
            )}
        </tr>
    );
} 

CalendarRow.propTypes = {
    row: PropTypes.arrayOf(PropTypes.instanceOf(CalendarCellModel))
};