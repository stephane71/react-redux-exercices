import React, { useState } from "react";
import { CityOverviewCardsListMemo } from "../../components/CityOverviewCardsList";
import { Button } from "@mui/material";
import { sortBy } from "../../store/cities/slice";
import { useDispatch, useSelector } from "react-redux";
import { selectCities } from "../../store/cities/selectors";

export default function Cities() {
  const cities = useSelector(selectCities);
  const dispatch = useDispatch();
  const [sortForm, setSortForm] = useState({ by: "", order: "asc" });

  function handleClickSortByName() {
    if (sortForm.by) {
      dispatch(sortBy({ by: sortForm.by, order: sortForm.order }));
    }
  }

  function handleChangeSortBy(e) {
    const { name, value } = e.target;
    setSortForm({ ...sortForm, [name]: value });
  }

  return (
    <div>
      <div>
        <div>
          <label htmlFor="sort-by">Sort by:</label>
          <select name="by" id="sort-by" onChange={handleChangeSortBy}>
            <option value="">--Please choose an attribute--</option>
            <option value="nom">nom</option>
            <option value="population">population</option>
          </select>

          <label htmlFor="order">Order:</label>
          <select name="order" id="order" onChange={handleChangeSortBy}>
            <option value="asc">asc</option>
            <option value="desc">desc</option>
          </select>
        </div>
        <Button onClick={handleClickSortByName} variant={"outlined"}>
          Sort the list
        </Button>
      </div>
      <CityOverviewCardsListMemo cities={cities} />
    </div>
  );
}
