import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Monthdata = [
  { month: "Jun", revenue: 900 },
  { month: "Jul", revenue: 750 },
  { month: "Aug", revenue: 1350 },
  { month: "Sep", revenue: 1480 },
  { month: "Oct", revenue: 2100 },
  { month: "Nov", revenue: 1800 },
];

const RevenueChart = ({darkMode}) => {
  return (
    <div className={`w-full h-[260px] md:h-[350px] ${darkMode ? "bg-stone-900" : "bg-white"} shadow-md`}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={Monthdata} margin={{ top: 20, right: 20, bottom: 8, left: 2 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="revenue"
            name="Revenue (Last 6 Months)"
            stroke="#16A34A"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueChart;
