// MainContent.js
function MainContent({ show }) {
  return (
    <div className={show ? "block" : "hidden"}>
      <div className="overflow-hidden">
        <div className="flex justify-center absolute top-20 left-0 right-0 ">
          <img
            className="scale-90 translate-x-6 -translate-y-10"
            src="hero/_DSC0732.JPG"
          />
        </div>
      </div>
      <div
        className={`h-screen bg-top scale-105 bg-no-repeat overflow-hidden`}
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
          className="w-36 scale-50 absolute bottom-0 -left-6"
          src="https://raw.githubusercontent.com/Syafar44/assets-wedding/refs/heads/main/tanaman/puun.png"
        />
        <img
          className="w-36 scale-50 absolute bottom-0 -right-6"
          src="https://raw.githubusercontent.com/Syafar44/assets-wedding/refs/heads/main/tanaman/puun.png"
        />
        <div className="flex justify-center absolute bottom-0 left-0 right-0">
          <img
            className=" w-[90%] "
            src="https://raw.githubusercontent.com/Syafar44/assets-wedding/refs/heads/main/tanaman/IMG_0306.PNG"
          />
        </div>
      </div>
    </div>
  );
}

export default MainContent;
