const Card = ({title, value, darkMode}) => {
  return (
    <div className={`p-4 rounded-lg shadow-md ${darkMode ? "bg-stone-900" : "bg-white/40"}`}>
      <p className={`text-sm`}>{title}</p>
      <h2 className="text-2xl font-semibold">{value}</h2>
    </div>
  );
};

export default Card;
