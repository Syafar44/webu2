const mempelaiWanita = {
  nama: "Yulia",
  ibu: "Yanti",
  ayah: "Yanto",
  dari: "melintang"
}

const mempelaiPria = {
  nama: "Syafar",
  ibu: "Yanti",
  ayah: "Yanto",
  dari: "muara muntai"
}

const  MainContent = ({ show }) => {
  return (
    <div className={`${show ? "block" : "hidden"} overflow-x-hidden`}>
      <div className="overflow-hidden">
        <div className="flex justify-center absolute top-20 left-0 right-0 ">
          <img
            className="scale-90 translate-x-6 -translate-y-10"
            src="hero/_DSC0732.JPG"
          />
        </div>
      </div>

      <section
        className={`h-screen bg-top scale-110 bg-no-repeat overflow-hidden`}
        style={{
          backgroundImage:
            "url(https://raw.githubusercontent.com/Syafar44/assets-wedding/refs/heads/main/background/Desain_tanpa_judul__1_-removebg-preview.png)",
        }}
      >
        {/* Konten utama website */}
        {/* ... */}
        <img
          className="w-24 rotate-[45deg] absolute top-10 left-4"
          src="https://raw.githubusercontent.com/Syafar44/assets-wedding/refs/heads/main/tanaman/screen.png"
        />
        <img
          className="w-36 rotate-[30deg] absolute top-16 left-4"
          src="https://raw.githubusercontent.com/Syafar44/assets-wedding/refs/heads/main/bunga/s.png"
        />
        <img
          className="w-24 -rotate-[20deg] absolute top-16 -right-7"
          src="https://raw.githubusercontent.com/Syafar44/assets-wedding/refs/heads/main/tanaman/screen.png"
        />
        <img
          className="w-36 -rotate-[90deg] absolute top-5 -right-10"
          src="https://raw.githubusercontent.com/Syafar44/assets-wedding/refs/heads/main/bunga/s.png"
        />
        <img
          className="w-36 scale-50 absolute bottom-14 -left-6"
          src="https://raw.githubusercontent.com/Syafar44/assets-wedding/refs/heads/main/tanaman/puun.png"
        />
        <img
          className="w-36 scale-50 absolute bottom-14 -right-6"
          src="https://raw.githubusercontent.com/Syafar44/assets-wedding/refs/heads/main/tanaman/puun.png"
        />
        <div className="absolute text-sm bottom-[16.5rem] left-20 text-wrap w-[15rem]">
          <p className="text-center">وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا لِتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِقَوْمٍ يَتَفَكَّرُونَ</p>
          <p className="text-center">Artinya: “Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir.” (QS. Ar-Rum: 21)</p>
        </div>
        <div className="flex justify-center absolute bottom-44 left-0 right-0">
          <img
            className=" w-[90%] "
            src="https://raw.githubusercontent.com/Syafar44/assets-wedding/refs/heads/main/tanaman/IMG_0306.PNG"
          />
        </div>
      </section>

      <section>
        <div className="-mt-40 h-screen bg-cover" style={{
          backgroundImage:
            "url(https://document-export.canva.com/5qHlI/DAGRoc5qHlI/7/thumbnail/0003.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20240924%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240924T044733Z&X-Amz-Expires=7093&X-Amz-Signature=bbdf0df7a29e2ae5b226c78893911fd206af0d44f98cad64b27099ac05dec358&X-Amz-SignedHeaders=host&response-expires=Tue%2C%2024%20Sep%202024%2006%3A45%3A46%20GMT)",
        }}>
          {/* Mempelai Wanita */}
          <div className="flex justify-between items-center px-5 pt-20 relative">
            <img className="w-2/4" src="https://raw.githubusercontent.com/Syafar44/assets-wedding/refs/heads/main/benda/IMG_0307.PNG" />
            <div>
      <img className="absolute top-[12rem] -left-[1rem] w-[14rem] -rotate-[20deg]" src="https://raw.githubusercontent.com/Syafar44/assets-wedding/refs/heads/main/bunga/buket.png" />
      <img className="absolute top-[17rem] left-[2rem] w-[10rem]" src="https://raw.githubusercontent.com/Syafar44/assets-wedding/refs/heads/main/bunga/bungaprofile.png" />
    </div>
            <div className="border-b-2 border-t-2 border-gray-500 py-5 w-2/4 text-end">
              <p >Putri dari</p>
              <p>Ibu {mempelaiWanita.ibu} &</p>
              <p>Bapak {mempelaiWanita.ayah}</p>
              <p>Dari {mempelaiWanita.dari}</p>
              <h1 className="pt-5 font-bold text-2xl">{mempelaiWanita.nama}</h1>
            </div>
          </div>

          {/* Mempelai Pria */}
          <div className="flex justify-between items-center px-5 pt-20 relative">
            <div className="border-b-2 border-t-2 border-gray-500 py-5 w-2/4 text-start">
              <p >Putri dari</p>
              <p>Ibu {mempelaiPria.ibu} &</p>
              <p>Bapak {mempelaiPria.ayah}</p>
              <p>Dari {mempelaiPria.dari}</p>
              <h1 className="pt-5 font-bold text-2xl">{mempelaiPria.nama}</h1>
            </div>
            <img className="w-2/4" src="https://raw.githubusercontent.com/Syafar44/assets-wedding/refs/heads/main/benda/IMG_0307.PNG" />
            <div>
      <img className="absolute top-[12rem] right-3  w-[14rem] -rotate-[20deg]" src="https://raw.githubusercontent.com/Syafar44/assets-wedding/refs/heads/main/bunga/buket.png" />
      <img className="absolute top-[17rem] right-7  w-[10rem]" src="https://raw.githubusercontent.com/Syafar44/assets-wedding/refs/heads/main/bunga/bungaprofile.png" />
    </div>
          </div>

        <h1 className="text-3xl text-center mt-20">Our Love Story</h1>
        
        </div>
      </section>
    </div>
  );
}

export default MainContent;
