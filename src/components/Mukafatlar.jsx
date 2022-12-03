import React from "react";

function Mukafatlar() {
  const mukafatlar = [
    {
      id: 1,
      src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.metal-archives.com%2Fimages%2F8%2F8%2F5%2F885_logo.jpg%3F0149&f=1&nofb=1&ipt=c22acf3ca05a955b50733d3dc5de205f2a703feca6e88e073b51d1b9d810e180&ipo=images",
    },
    {
      id: 2,
      src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.metal-archives.com%2Fimages%2F8%2F8%2F5%2F885_logo.jpg%3F0149&f=1&nofb=1&ipt=c22acf3ca05a955b50733d3dc5de205f2a703feca6e88e073b51d1b9d810e180&ipo=images",
    },
    {
      id: 3,
      src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.metal-archives.com%2Fimages%2F8%2F8%2F5%2F885_logo.jpg%3F0149&f=1&nofb=1&ipt=c22acf3ca05a955b50733d3dc5de205f2a703feca6e88e073b51d1b9d810e180&ipo=images",
    },
    {
      id: 4,
      src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.metal-archives.com%2Fimages%2F8%2F8%2F5%2F885_logo.jpg%3F0149&f=1&nofb=1&ipt=c22acf3ca05a955b50733d3dc5de205f2a703feca6e88e073b51d1b9d810e180&ipo=images",
    },
    {
      id: 5,
      src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.metal-archives.com%2Fimages%2F8%2F8%2F5%2F885_logo.jpg%3F0149&f=1&nofb=1&ipt=c22acf3ca05a955b50733d3dc5de205f2a703feca6e88e073b51d1b9d810e180&ipo=images",
    },
    {
      id: 6,
      src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.metal-archives.com%2Fimages%2F8%2F8%2F5%2F885_logo.jpg%3F0149&f=1&nofb=1&ipt=c22acf3ca05a955b50733d3dc5de205f2a703feca6e88e073b51d1b9d810e180&ipo=images",
    },
  ];

  return (
    <div
      id="mükafatları"
      className="snap-center	  sm:snap-none  bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-2 border-gray-500">
            Mükafatları
          </p>
          <p className="py-6">
            Həyatı boyu əldə etmiş müxtəlif{" "}
            <span className="text-gray-500 ml-2">*idk what to write here*</span>{" "}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {mukafatlar.map((mukafat) => {
            return (
              <div
                key={mukafat.id}
                className="shadow-md shadow-gray-600 rounded-lg"
              >
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.metal-archives.com%2Fimages%2F8%2F8%2F5%2F885_logo.jpg%3F0149&f=1&nofb=1&ipt=c22acf3ca05a955b50733d3dc5de205f2a703feca6e88e073b51d1b9d810e180&ipo=images" />
                <div className="flex items-center justify-center">
                  <button className="w-1/2 px-6 py-3  m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                  <button className="w-1/2 px-6 py-3  m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Mukafatlar;
