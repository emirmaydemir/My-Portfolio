"use client";
export default function ProjectDescription({ description, descriptionTitle }) {
  // Eğer sonunda | varsa yeni paragrafa geç
  const paragraphs = description.split("|");

  // Kalın metni işlemek için bir fonksiyon
  const renderTextWithBold = (text) => {
    // ** ile çevrilen kısımları kalın yap
    const regex = /\*\*(.*?)\*\*/g;
    return text.split(regex).map((part, index) => {
      // Eğer metin ** ile çevrilmişse, bunu <strong> ile sar
      if (index % 2 !== 0) {
        return (
          <strong className="font-extrabold" key={index}>
            {part}
          </strong>
        );
      }
      return part;
    });
  };

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-2">{descriptionTitle}</h2>
      {paragraphs.map((para, index) => (
        <p key={index} className="text-gray-900 dark:text-gray-300 leading-relaxed mb-4">
          {renderTextWithBold(para.trim())}
        </p>
      ))}
    </div>
  );
}
