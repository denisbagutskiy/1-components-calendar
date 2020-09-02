import React from 'react';
import PropTypes from 'prop-types';
import { CalendarRowModel } from '../models/CalendarRowModel';
import { CalendarCell } from './CalendarCell';

export function CalendarRow({ model }) {

    return (
        <tr>
            {model.cells.map((cell, i) => 
                <CalendarCell key={i} model={cell}></CalendarCell>
            )}
        </tr>
    );
} 

CalendarRow.propTypes = {
    week: PropTypes.instanceOf(CalendarRowModel)
};