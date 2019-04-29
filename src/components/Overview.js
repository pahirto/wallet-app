import React, { useState } from "react";
import ListHeading from "./ListHeading";
import ListItem from "./ListItem";
import moment from "moment";
import DatePicker from "react-datepicker";
import styled from "styled-components";

import "react-datepicker/dist/react-datepicker.css";
import { dateFormat, dateFormatForDatepicker } from "./Constants";

const getStat = (data, filterDate, filterAmount) => {
  const res = data
    .filter(({ date }) => filterDate(date))
    .filter(({ amount }) => filterAmount(amount))
    .reduce((total, { amount }) => total + amount, 0);
  console.log(res);
  return res;
};

const Overview = ({ data }) => {
  const [oneDayOverviewDate, setOneDayOverviewDate] = useState(new Date());
  const [monthDate, setMonthDate] = useState(new Date());

  return (
    <>
      <h1>Overview</h1>
      <ListHeading values={["Typ", "Obdobi", "Prijem", "Vydaj", "Souhrn"]} />
      <ListItem
        type="Denni"
        dateRangeComponent={() => (
          <DatePicker
            selected={oneDayOverviewDate}
            showTimeSelect
            dateFormat={dateFormatForDatepicker}
            onChange={date => setOneDayOverviewDate(date)}
          />
        )}
        income={getStat(
          data,
          date => moment(date).isSame(oneDayOverviewDate, "day"),
          v => v > 0
        )}
        outcome={getStat(
          data,
          date => moment(date).isSame(oneDayOverviewDate, "day"),
          v => v < 0
        )}
        overall={getStat(
          data,
          date => moment(date).isSame(oneDayOverviewDate, "day"),
          v => true
        )}
      />

      <ListItem
        type="Mesicni"
        dateRangeComponent={() => (
          <DatePicker
            selected={monthDate}
            dateFormat="MMMM yyyy"
            onChange={date => setMonthDate(date)}
          />
        )}
        income={getStat(
          data,
          date => moment(date).isSame(monthDate, "month"),
          v => v > 0
        )}
        outcome={getStat(
          data,
          date => moment(date).isSame(monthDate, "month"),
          v => v < 0
        )}
        overall={getStat(
          data,
          date => moment(date).isSame(monthDate, "month"),
          v => true
        )}
      />

      <ListItem
        type="Celkove"
        dateRangeComponent={() => <p>-</p>}
        income={getStat(data, date => true, v => v > 0)}
        outcome={getStat(data, date => true, v => v < 0)}
        overall={getStat(data, date => true, v => true)}
      />
    </>
  );
};

export default Overview;
