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

const data = [
  { month: "Jan", clients: 5, tasks: 8 },
  { month: "Feb", clients: 12, tasks: 10 },
  { month: "Mar", clients: 15, tasks: 12 },
  { month: "Apr", clients: 20, tasks: 15 },
  { month: "May", clients: 18, tasks: 14 },
  { month: "Jun", clients: 25, tasks: 18 },
];

const PerformanceChart = ({darkMode}) => {
  return (
    <div className={`"w-[full] h-[350px] p-4 rounded-2xl shadow-md ${darkMode ? "bg-stone-900" : "bg-gray-900"}`}>
      {/* <h2 className="text-lg font-semibold mb-4 dark:text-white">
        Performance Overview
      </h2> */}
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 10, right: 30, bottom: -5, left: -15 }}>
          <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="clients" stroke="#7772d6" strokeWidth={3} name="Clients" />
          <Line type="monotone" dataKey="tasks" stroke="#16A34A" strokeWidth={3} name="Tasks Completed" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PerformanceChart;
