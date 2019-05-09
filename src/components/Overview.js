import React, { useState } from "react";
import ListHeading from "./ListHeading";
import ListItem from "./ListItem";
import moment from "moment";
import DatePicker from "react-datepicker";
import { Grid } from "styled-css-grid";
import styled from "styled-components";
import { arrayOf } from "prop-types";
import TransactionType from "../Types/TransactionType";

import "react-datepicker/dist/react-datepicker.css";
import { dateFormatForDatepicker } from "./Constants";

const Container = styled.div`
  width: 100%;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #ddd;
`;

const getStat = (data, filterDate, filterAmount) =>
  data
    .filter(({ date }) => filterDate(date))
    .filter(({ amount }) => filterAmount(amount))
    .reduce((total, { amount }) => total + amount, 0);

const Overview = ({ data }) => {
  const [oneDayOverviewDate, setOneDayOverviewDate] = useState(new Date());
  const [monthDate, setMonthDate] = useState(new Date());
  const columns = ["Typ", "Obdobi", "Prijem", "Vydaj", "Souhrn"];

  return (
    <>
      <h1>Overview</h1>

      <Container>
        <Grid columns={columns.length} gap="2px">
          <ListHeading values={columns} />
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
              amount => amount > 0
            )}
            outcome={getStat(
              data,
              date => moment(date).isSame(oneDayOverviewDate, "day"),
              amount => amount < 0
            )}
            overall={getStat(
              data,
              date => moment(date).isSame(oneDayOverviewDate, "day"),
              amount => true
            )}
          />

          <ListItem
            type="Mesicni"
            dateRangeComponent={() => (
              <DatePicker
                selected={monthDate}
                dateFormat="MM yyyy"
                showMonthYearPicker
                onChange={date => setMonthDate(date)}
              />
            )}
            income={getStat(
              data,
              date => moment(date).isSame(monthDate, "month"),
              amount => amount > 0
            )}
            outcome={getStat(
              data,
              date => moment(date).isSame(monthDate, "month"),
              amount => amount < 0
            )}
            overall={getStat(
              data,
              date => moment(date).isSame(monthDate, "month"),
              amount => true
            )}
          />

          <ListItem
            type="Celkove"
            dateRangeComponent={() => <div>-</div>}
            income={getStat(data, date => true, amount => amount > 0)}
            outcome={getStat(data, date => true, amount => amount < 0)}
            overall={getStat(data, date => true, amount => true)}
          />
        </Grid>
      </Container>
    </>
  );
};

Overview.propTypes = {
  data: arrayOf(TransactionType)
};

export default Overview;
