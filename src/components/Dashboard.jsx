import Card from "./Card";

const Dashboard = ({ name, darkMode }) => {
  return (
    <section className="w-screen h-screen mx-auto border">
      <div className="w-full h-full flex flex-col px-2 space-y-5">
        <div>
          <h1 className="text-xl">Welcome back, {name}👋🏾</h1>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <Card title="Total Clients" value={78} darkMode={darkMode} />
          <Card title="Active Clients" value={18} darkMode={darkMode} />
          <Card title="Inactive Clients" value={60} darkMode={darkMode} />
        </div>

        {/* <div
          className={`w-[95vw] h-[30vh] ${
            darkMode
              ? "bg-stone-950 border-stone-700/50"
              : "bg-white/50 border-0"
          } shadow-sm border rounded-md backdrop-blur-md`}
        ></div> */}
      </div>
    </section>
  );
};

export default Dashboard;
