import Card from "../components/Card";
import PerformanceChart from "../components/PerformanceChart";
import RevenueChart from "../components/RevenueChart";

const Dashboard = ({ name, darkMode, dashboard }) => {
  return (
    <section className="w-screen h-screen mx-auto">
      <div
        className={`w-screen relative top-0 right-0 left-0 mt-8 px-2 md:px-4 ${
          dashboard
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
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
        <div className="flex flex-col space-y-2 mt-10 md:w-[80vw]">
          <div>
            <h1 className="text-xl md:text-2xl font-semibold">Recent Tasks:</h1>
          </div>
          <div className="flex flex-col gap-1 text-sm md:text-[16px]">
            <button className={`group text-left p-2 md:py-3 rounded-md transition-all duration-300 ${darkMode ? "hover:bg-stone-900" : "hover:bg-gray-900"} hover:text-white hover:translate-x-0.5`}>
              Completed ✅: Final QA & Deployment of Blog CMS Feature
              <i className="fa-solid fa-arrow-right transition-transform duration-300 group-hover:translate-x-2 ml-1.5"></i>
            </button>

            <button className={`group text-left p-2 md:py-3 rounded-md transition-all duration-300 ${darkMode ? "hover:bg-stone-900" : "hover:bg-gray-900"} hover:text-white hover:translate-x-0.5`}>
              Drafting 📝: Initial Wireframes for 'SustainaCo' Landing Page
              <i className="fa-solid fa-arrow-right transition-transform duration-300 group-hover:translate-x-2 ml-1.5"></i>
            </button>

            <button className={`group text-left p-2 md:py-3 rounded-md transition-all duration-300 ${darkMode ? "hover:bg-stone-900" : "hover:bg-gray-900"} hover:text-white hover:translate-x-0.5`}>
              Scheduled 💻: Deep Dive Meeting with Acme Corp for API Integration
              <i className="fa-solid fa-arrow-right transition-transform duration-300 group-hover:translate-x-2 ml-1.5"></i>
            </button>

            <button className={`group text-left p-2 md:py-3 rounded-md transition-all duration-300 ${darkMode ? "hover:bg-stone-900" : "hover:bg-gray-900"} hover:text-white hover:translate-x-0.5`}>
              In Review 📧: Client Feedback on Q4 Social Media Strategy
              <i className="fa-solid fa-arrow-right transition-transform duration-300 group-hover:translate-x-2 ml-1.5"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="h-20"></div>
    </section>
  );
};

export default Dashboard;
