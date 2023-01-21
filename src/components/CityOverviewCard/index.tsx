import Card from "../Card";
import CityOverview from "../CityOverview";

export default function CityOverviewCard({ ...props }) {
  return (
    <Card>
      <CityOverview {...props} />
    </Card>
  );
}
