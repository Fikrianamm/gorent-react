import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";
import { CardContainer } from "./SharedComponent";

const revenueData = [
  { day: "Mon", revenue: 500 },
  { day: "Tue", revenue: 800 },
  { day: "Wed", revenue: 600 },
  { day: "Thu", revenue: 700 },
  { day: "Fri", revenue: 1000 },
  { day: "Sat", revenue: 1100 },
  { day: "Sun", revenue: 900 },
];

const RevenueOverview = () => (
  <CardContainer>
    <h5>Revenue Overview</h5>
    <LineChart width={400} height={250} data={revenueData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="day" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
    </LineChart>
  </CardContainer>
);

export default RevenueOverview;
