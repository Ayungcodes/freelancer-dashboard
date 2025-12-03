import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const tasks = [
  {
    id: 1,
    title: "Landing Page Redesign",
    client: "Vortex Inc",
    status: "Pending",
    priority: "High",
    updatedAt: "2025-11-28T09:30:00",
  },
  {
    id: 2,
    title: "Social Media Schedule",
    client: "Mr. Felix Ewe",
    status: "In Progress",
    priority: "Medium",
    updatedAt: "2025-11-27T12:00:00",
  },
  {
    id: 3,
    title: "API Integration",
    client: "WOW Media",
    status: "Completed",
    priority: "Low",
    updatedAt: "2025-11-26T15:00:00",
  },
];

const statusColors = {
  Pending: "bg-red-100 text-red-700",
  "In Progress": "bg-yellow-100 text-yellow-700",
  Completed: "bg-green-100 text-green-700",
};

const priorityEmoji = {
  High: "🔥",
  Medium: "🟡",
  Low: "🟢",
};

const RecentTasks = ({ onTaskClick, darkMode }) => {
  return (
    <div className={`p-4 ${darkMode ? "bg-stone-900" : "bg-white"} rounded-2xl shadow-md`}>
      <h2 className="text-xl font-semibold mb-3">Recent Tasks</h2>

      {tasks.map((task) => (
        <div
          key={task.id}
          onClick={() => onTaskClick && onTaskClick(task)}
          className={`flex items-start justify-between p-3 mb-2 border rounded-xl ${darkMode ? "hover:bg-stone-800" : "hover:hover:bg-gray-50"} cursor-pointer transition`}
        >
          <div>
            <p className="font-medium text-sm">
              {priorityEmoji[task.priority]} {task.title}
            </p>
            <p className="text-xs text-gray-500">{task.client}</p>
            <p className="text-[11px] text-gray-400 mt-1">
              {dayjs(task.updatedAt).fromNow()}
            </p>
          </div>

          <span
            className={`px-2 py-1 text-xs rounded-full h-fit ${statusColors[task.status]}`}
          >
            {task.status}
          </span>
        </div>
      ))}
    </div>
  );
};

export default RecentTasks;
