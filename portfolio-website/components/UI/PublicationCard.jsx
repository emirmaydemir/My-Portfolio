const PublicationCard = ({ title, date, description, buttonText, onShow }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <h3 className="text-base lg:text-xl font-bold text-white">{title}</h3>
        <span className="text-sm lg:text-base text-gray-300 mt-2 md:mt-0">{date}</span>
      </div>
      <p className="mt-4 text-gray-300 text-sm lg:text-base">{description}</p>
      <button onClick={onShow} className="mt-4 self-start bg-primary-500 hover:bg-primary-600 text-white text-sm lg:text-base font-semibold py-1 px-3 rounded transition-colors duration-300">
        {buttonText}
      </button>
    </div>
  );
};

export default PublicationCard;
