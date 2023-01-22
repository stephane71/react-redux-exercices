import React from "react";
import { CityOverviewCardsListMemo } from "../../components/CityOverviewCardsList";
import CITIES from "../../assets/cities.json";

export default function Cities() {
  return (
    <div>
      <CityOverviewCardsListMemo cities={CITIES} />
    </div>
  );
}
