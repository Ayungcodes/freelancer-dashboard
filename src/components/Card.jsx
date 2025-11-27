const Card = ({title, value, darkMode}) => {
  return (
    <div className={`p-4 rounded-lg shadow-md space-y-2 md:space-y-4 ${darkMode ? "bg-stone-900" : "bg-white/40"}`}>
      <p className={`text-sm md:text-[16px]`}>{title}</p>
      <h2 className="text-xl md:text-[26px] font-semibold">{value}</h2>
    </div>
  );
};

export default Card;
