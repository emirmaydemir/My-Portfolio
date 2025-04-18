import fs from "fs";
import path from "path";

//export const revalidate = 60;

export default function sitemap() {
  const baseUrl = "https://emiraydemir.com/"; // Burayı canlı URL ile değiştirin

  // JSON dosyasının yolunu belirtin
  const filePath = path.join(process.cwd(), "locales", "tr", "projectData.json");

  // JSON dosyasını okuyun
  const jsonData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  // Dilleri belirleyin
  const locales = ["tr", "en"];

  // Ürünlerin URL'lerini oluşturun
  const productUrls = locales.flatMap((locale) =>
    jsonData.projectData.map((product) => ({
      url: locale === "tr" ? `${baseUrl}/projects/${product.project_previewUrl}` : `${baseUrl}/${locale}/projects/${product.project_previewUrl}`,
      lastModified: new Date(),
      changeFrequency: "never", // Değişiklik sıklığı
      priority: 0.8, // Öncelik ayarları
    }))
  );

  // Statik URL'leri oluşturun
  const staticUrls = locales.flatMap((locale) => {
    const baseUrlWithLocale = locale === "tr" ? `${baseUrl}/` : `${baseUrl}/${locale}`;
    return [
      {
        url: `${baseUrlWithLocale}`,
        lastModified: new Date(),
        changeFrequency: "never",
        priority: 1,
      },
    ];
  });

  // Sitemap yapısını oluşturun
  return [...staticUrls, ...productUrls];
}
