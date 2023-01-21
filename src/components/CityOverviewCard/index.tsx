import Card from "../Card";
import CityOverview from "../CityOverview";
import { NB_RESIDENTS_LIMIT } from "../../utils/enums";

export default function CityOverviewCard({ ...props }) {
  if (props.city.population <= NB_RESIDENTS_LIMIT) {
    return null;
  }

  return (
    <Card>
      <CityOverview {...props} />
    </Card>
  );
}
