import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

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

const RecentTasks = ({ darkMode, tasks }) => {
  // sorting tasks by updatedAt date in descending order and taking the top 3
  const sortedTasks = tasks.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)).slice(0, 3);

  return (
    <div
      className={`p-4 ${
        darkMode ? "bg-stone-900" : "bg-white"
      } rounded-2xl shadow-md`}
    >
      <h2 className="text-xl md:text-2xl font-semibold mb-3">Recent Tasks</h2>
      {sortedTasks.map((task) => (
        <div
          key={task.id}
          className={`flex items-start justify-between p-3 mb-2 border border-stone-700 rounded-xl ${
            darkMode ? "hover:bg-stone-800" : "hover:hover:bg-gray-50"
          } cursor-pointer transition`}
        >
          <div>
            <p className="font-medium text-sm md:text-[16px]">
              {priorityEmoji[task.priority]} {task.title}
            </p>
            <p className="text-xs md:text-sm text-gray-500">{task.client}</p>
            <p className="text-[11px] md:text-[13px] text-gray-400 mt-1">
              {dayjs(task.updatedAt).fromNow()}
            </p>
          </div>

          <span
            className={`px-3 py-1 text-xs md:text-sm rounded-full h-fit ${
              statusColors[task.status]
            }`}
          >
            {task.status}
          </span>
        </div>
      ))}
    </div>
  );
};

export default RecentTasks;
