import Card from "../Card";
import CityOverview from "../CityOverview";
import { NB_RESIDENTS_LIMIT } from "../../utils/enums";

export default function CityOverviewCard({ onClick, ...props }) {
  if (props.city.population <= NB_RESIDENTS_LIMIT) {
    return null;
  }

  return (
    <Card onClick={onClick}>
      <CityOverview {...props} />
    </Card>
  );
}
