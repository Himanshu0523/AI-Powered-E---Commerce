import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

export default function AnalyticsChart({ data }) {
  if (!data) return <p>Loading...</p>;

  return (
    <LineChart width={600} height={300} data={data}>
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <CartesianGrid />
      <Line type="monotone" dataKey="sales" />
    </LineChart>
  );
}