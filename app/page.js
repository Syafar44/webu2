"use client";
import { useState, useEffect } from "react";
import MainContent from "./MainContent";
import { Parisienne } from "next/font/google";
import { useSearchParams } from "next/navigation"; // Import useSearchParams untuk menggantikan useRouter

const parisienne = Parisienne({
  weight: ["400"],
  subsets: ["latin"],
});

function HomePage() {
  const searchParams = useSearchParams(); // Mengambil query parameter dari URL
  const [nama, setNama] = useState("");
  const [showMainContent, setShowMainContent] = useState(false);

  // Ambil parameter "nama" dari URL dan simpan di state
  useEffect(() => {
    const namaParam = searchParams.get("nama");
    setNama(namaParam || "Tamu"); // Jika nama tidak ada, default ke "Tamu"
  }, [searchParams]);

  const handleButtonClick = () => {
    setShowMainContent(true);
  };

  return (
    <div>
      {/* Overlay */}
      <div
        className={`${
          showMainContent ? "hidden" : "overlay"
        } text-black h-screen bg-cover`}
        style={{
          backgroundImage:
            "url(https://document-export.canva.com/5qHlI/DAGRoc5qHlI/7/thumbnail/0003.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20240924%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240924T044733Z&X-Amz-Expires=7093&X-Amz-Signature=bbdf0df7a29e2ae5b226c78893911fd206af0d44f98cad64b27099ac05dec358&X-Amz-SignedHeaders=host&response-expires=Tue%2C%2024%20Sep%202024%2006%3A45%3A46%20GMT)",
        }}
      >
        {/* Konten overlay */}
        <div className={`${parisienne} pt-40 overflow-hidden`}>
          <h3 className="text-xl text-center">The Wedding Of</h3>
          <h1 className="text-center text-4xl font-bold">Syafar & Yulia</h1>
          <h2 className="text-center mt-3">19 . 10 . 2024</h2>
        </div>
        <div className="absolute bottom-52 left-0 right-0 flex justify-center items-end">
          <div className="text-center">
            <h1>Kepada Yang Terhormat</h1>
            <p>Bapak/Ibu/Saudara/I</p>
            <div className="bg-white border rounded-md p-10">
              <h1>
                <span className="font-semibold">{nama}</span> dan keluarga
              </h1>
            </div>
          </div>
        </div>
        <div className="absolute bottom-32 left-0 right-0 flex justify-center z-20">
          <button
            className=" bg-white text-black px-10 py-2 rounded-md font-bold border shadow-xl"
            onClick={handleButtonClick}
          >
            Buka Undangan
          </button>
        </div>
        <img className="absolute -bottom-16 -left-32" src="bunga/buket.png" />
        <img
          className="absolute -rotate-[130deg] -top-10 -right-32 scale-75"
          src="bunga/bungaprofile.png"
        />
      </div>

      {/* Main Content */}
      <MainContent show={showMainContent} />
    </div>
  );
}

export default HomePage;
