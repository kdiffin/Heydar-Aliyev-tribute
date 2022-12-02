import React from "react";

function About() {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className="pb-8">
          <p className="text-4xl font bold inline border-b-2 border-gray-500">
            Həyatı
          </p>
        </div>

        <p className="text-xl mt-10">
          Heydər Əlirza oğlu Əliyev 1923-cü il mayın 10-da Azərbaycanın Naxçıvan
          şəhərində dəmiryolçu ailəsində dünyaya gəlmişdir. 1939-cu ildə
          Naxçıvan Pedaqoji Texnikumunu bitirdikdən sonra Azərbaycan Sənaye
          İnstitutunun memarlıq fakültəsində təhsil almışdır. Başlanan müharibə
          ona təhsilini başa çatdırmağa imkan verməmişdir.
        </p>
        <br />
        <p className="text-xl mt-5">
          Heydər Əliyev 1941–1944-cü illərdə Naxçıvan MSSR Xalq Daxili İşlər
          Komissarlığında və Naxçıvan MSSR Xalq Komissarları Sovetində müxtəlif
          məsul vəzifələrdə xidmət etmiş, 1944-cü ilin mayında isə Naxçıvan
          Vilayət Partiya Komitəsi tərəfindən dövlət təhlükəsizliyi orqanlarına
          işə göndərilmişdir.
        </p>
      </div>
    </div>
  );
}

export default About;
