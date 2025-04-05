import Link from "next/link";

const NotFoundPage = () => {
  return (
    <section className="bg-white flex flex-col items-center justify-center h-screen text-center">
      {/* 404 Yazısı */}
      <h1 className="text-8xl font-bold text-gray-800 mt-10">404</h1>

      {/* Görsel */}
      <div className="bg-cover bg-center w-full h-[500px] sm:h-[600px] mx-auto mt-8" style={{ backgroundImage: "url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)" }}></div>

      {/* Metinler */}
      <div className="mt-8 mb-8">
        <h3 className="text-3xl font-semibold text-gray-800" style={{ fontSize: "33px" }}>
          Kaybolmuş gibisiniz
        </h3>
        <p className="text-lg text-gray-600 mt-2" style={{ fontSize: "18px" }}>
          Aradığınız sayfa mevcut değil!
        </p>

        {/* Ana Sayfa Butonu */}
        <Link href="/" className="inline-block mt-6 px-6 py-3 text-lg font-semibold text-white bg-black rounded-lg hover:bg-gray-800 transition duration-300">
          Ana Sayfa
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;
