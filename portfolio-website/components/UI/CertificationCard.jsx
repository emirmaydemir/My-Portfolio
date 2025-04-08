import { SiUdemy, SiFreecodecamp } from "react-icons/si";

const CertificationCard = ({ title, institution, date }) => {
  const renderInstitutionIcon = (institution) => {
    switch (institution.toLowerCase()) {
      case "udemy":
        return <SiUdemy className="text-4xl text-black" />;
      case "freecodecamp":
        return <SiFreecodecamp className="text-4xl text-green-700" />;
      default:
        return <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center text-sm text-white">{institution[0]}</div>;
    }
  };

  const handleShowCertificate = () => {
    alert(`Sertifika: ${title}`);
  };

  return (
    <div className="flex flex-col bg-gray-800 rounded-lg p-5 shadow-md hover:shadow-xl transition-shadow duration-300 space-y-4">
      {/* Logo ve bilgi alanı */}
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 mt-1">{renderInstitutionIcon(institution)}</div>
        <div className="space-y-1">
          <h3 className="text-lg font-bold text-white">{title}</h3>
          <p className="text-sm text-gray-300">{institution}</p>
          <p className="text-xs text-gray-400">{date}</p>
        </div>
      </div>

      {/* Buton */}
      <button onClick={handleShowCertificate} className="self-end bg-primary-500 hover:bg-primary-600 text-white text-sm font-semibold py-1.5 px-4 rounded transition-colors duration-300">
        Sertifikayı Göster
      </button>
    </div>
  );
};

export default CertificationCard;
