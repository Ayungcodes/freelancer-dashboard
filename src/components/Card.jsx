const Card = ({title, value, darkMode}) => {
  return (
    <div className={`px-5 py-4 rounded-lg shadow-md space-y-2 md:space-y-4 ${darkMode ? "bg-stone-900" : "bg-white"}`}>
      <p className={`text-sm md:text-[18px]`}>{title}</p>
      <h2 className="text-xl md:text-[28px] font-semibold">{value}</h2>
    </div>
  );
};

export default Card;
