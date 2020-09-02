import React from 'react';
import Moment from 'moment';
import './css/style.css';
import 'moment/locale/ru';
import { Calendar } from './components/Calendar';

function App() {

  Moment().locale('ru');

  const date = new Date(2020, 8, 2);

  return (
    <Calendar date={date}></Calendar>
  );
}

export default App;
