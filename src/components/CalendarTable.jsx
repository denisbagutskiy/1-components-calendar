import React from 'react';
import PropTypes from 'prop-types';
import { CalendarRow } from './CalendarRow';
import { CalendarTableModel } from '../models/CalendarTableModel';

export function CalendarTable({ model }) {

    return (
        <table className="ui-datepicker-calendar">
            <colgroup>
            <col/>
            <col/>
            <col/>
            <col/>
            <col/>
            <col className="ui-datepicker-week-end"/>
            <col className="ui-datepicker-week-end"/>
            </colgroup>
            <thead>
            <tr>
                <th scope="col" title="Понедельник">Пн</th>
                <th scope="col" title="Вторник">Вт</th>
                <th scope="col" title="Среда">Ср</th>
                <th scope="col" title="Четверг">Чт</th>
                <th scope="col" title="Пятница">Пт</th>
                <th scope="col" title="Суббота">Сб</th>
                <th scope="col" title="Воскресенье">Вс</th>
            </tr>
            </thead>
            <tbody>
                {model.rows.map((row, i) => <CalendarRow key={i} model={row}></CalendarRow>)}
            </tbody>
        </table>
    );
} 

CalendarTable.propTypes = {
    model: PropTypes.instanceOf(CalendarTableModel)
};