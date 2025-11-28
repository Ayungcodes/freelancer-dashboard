import Card from "../components/Card";
import PerformanceChart from "../components/PerformanceChart";
import RecentTasks from "../components/RecentTasks";
import RevenueChart from "../components/RevenueChart";
import Navbar from "./Navbar";

const Dashboard = ({ name, darkMode, userMail, setDarkMode }) => {
  return (
    <section className="w-screen h-screen mx-auto">
      <Navbar darkMode={darkMode} userMail={userMail} setDarkMode={setDarkMode} />
      <div
        className={`w-full relative top-0 right-0 left-0 mt-8 px-2 md:px-4`}
      >
        <div className="w-full h-full flex flex-col space-y-5">
          {/* welcome message */}
          <div>
            <h1 className="text-xl md:text-2xl font-semibold">Welcome back, {name}👋🏾</h1>
          </div>
          {/* cards */}
          <div className="grid grid-cols-3 gap-4">
            <Card title="Total Clients" value={54} darkMode={darkMode} />
            <Card title="Active Clients" value={7} darkMode={darkMode} />
            <Card title="Inactive Clients" value={47} darkMode={darkMode} />
            <Card title="Active Projects" value={4} darkMode={darkMode} />
            <Card
              title="Tasks Completed (This Month)"
              value={9}
              darkMode={darkMode}
            />
            <Card
              title="Revenue (This Month)"
              value={`$850`}
              darkMode={darkMode}
            />
          </div>
        </div>
        {/* charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-7">
          <PerformanceChart darkMode={darkMode} />
          <RevenueChart darkMode={darkMode} />
        </div>
        {/* recent tasks */}
        <div className="mt-10">
          <RecentTasks darkMode={darkMode} />
        </div>
      </div>
      <div className="h-20"></div>
    </section>
  );
};

export default Dashboard;
