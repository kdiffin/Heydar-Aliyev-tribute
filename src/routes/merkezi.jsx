import React from "react";
import AbideInfo from "../components/RouteComponents/AbideInfo";

function abideler() {
  const imgs = [
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Right_wing_of_Heydar_Aliyev_Center%2C_Baku_Azerbaijan.jpg/1920px-Right_wing_of_Heydar_Aliyev_Center%2C_Baku_Azerbaijan.jpg",

      id: 1,
    },
    {
      src: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.heydaraliyevcenter.az%2Ffiles%2Fbackgrounds%2F41369311590230513.jpg&f=1&nofb=1&ipt=337a5f4160c065198181b8419ea45d586ced0e5577f250e94440f5ada083c442&ipo=images",

      id: 2,
    },
    {
      src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdnn1.img.sputnik.az%2Fimg%2F07e5%2F09%2F1b%2F428034250_0%3A0%3A1280%3A720_1920x0_80_0_0_c0976603a36f5b13fe212154f977813a.jpg&f=1&nofb=1&ipt=5fe67423fbf64b7099609b057c19dd0790413fef5e6570187bc14c4161167c73&ipo=images",

      id: 3,
    },
    {
      src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fapa.az%2Fstorage%2Fnews%2F2022%2Fnovember%2F04%2Fresize%2F6364ae36d51f96364ae36d51fa16675425826364ae36d51f56364ae36d51f7.jpg&f=1&nofb=1&ipt=ff0d53eb39ad73f54d82af0f101d3768aefe9ce5ab2ef070568c51746a94a193&ipo=images",

      id: 4,
    },
    {
      src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fc3%2Fa3%2F69%2Fc3a3691f3a9519378de03e0bc1d3c35d.jpg&f=1&nofb=1&ipt=7288c99acf8fcf34199ff65673f0565b7436d3641c0dc78231e7c6620227b99b&ipo=images",
      id: 5,
    },
    {
      src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.oxu.az%2Fuploads%2FW1siZiIsIjIwMjAvMDQvMjgvMTYvMTUvMzMvNjgzMDA5NTMtM2E5Yi00NWYxLTg5NjUtOTg5ZDg1ZTY5OGE1L2hleWRhcl9hbGl5ZXZfY2VudGVyXzEyMy5qcGciXV0%3Fsha%3D06df1f3fa0b7406a&f=1&nofb=1&ipt=5ec740a3b85be966485bd5a9a667859533e8afe545ada743e65c8e89c5193544&ipo=images",
      id: 6,
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/az/thumb/1/12/Heyd%C9%99r_%C6%8Fliyev_M%C9%99rk%C9%99zinin_interyeri_1.jpg/1280px-Heyd%C9%99r_%C6%8Fliyev_M%C9%99rk%C9%99zinin_interyeri_1.jpg",
      id: 7,
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/az/thumb/7/72/Heyd%C9%99r_%C6%8Fliyev_M%C9%99rk%C9%99zinin_interyeri.jpg/1280px-Heyd%C9%99r_%C6%8Fliyev_M%C9%99rk%C9%99zinin_interyeri.jpg",

      id: 9,
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/az/thumb/9/9f/Heyd%C9%99r_%C6%8Fliyev_M%C9%99rk%C9%99zinin_interyeri_2.jpg/1280px-Heyd%C9%99r_%C6%8Fliyev_M%C9%99rk%C9%99zinin_interyeri_2.jpg",

      id: 10,
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/az/thumb/0/05/Heyd%C9%99r_%C6%8Fliyev_M%C9%99rk%C9%99zinin_interyeri_3.jpg/1280px-Heyd%C9%99r_%C6%8Fliyev_M%C9%99rk%C9%99zinin_interyeri_3.jpg",

      id: 11,
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/az/0/07/Xorxe_Marin_-_Varl%C4%B1%C4%9F%C4%B1n_canlanmas%C4%B1_s%C9%99rgisind%C9%99n.jpg",

      id: 12,
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/az/thumb/d/d2/Endi_Vorhol_-_Sonuncu_%C5%9Fam_yem%C9%99yi.JPG/1920px-Endi_Vorhol_-_Sonuncu_%C5%9Fam_yem%C9%99yi.JPG",

      id: 13,
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/az/thumb/9/95/K%C3%BCknar_1.JPG/800px-K%C3%BCknar_1.JPG",

      id: 14,
    },
  ];

  const paragraph = (
    <>
      <p>
        Heydər Əliyev Mərkəzi — Azərbaycanın paytaxtı Bakı şəhərində, Heydər
        Əliyev prospektində inşa edilmiş araşdırma və beynəlxalq dialoq mərkəzi.
        Mərkəz böyük bir kompleksdən ibarət olmaqla özündə iri konqres zalı,
        Heydər Əliyev Muzeyi, sərgi salonları, adminstrativ ofisləri
        birləşdirir. Mərkəz Azərbaycanın üçüncü prezidenti Heydər Əliyevin adını
        daşıyır. Mərkəzin layihəsi 2007-ci ildə məşhur memar Zaha Hadid
        tərəfindən işlənmişdir. Heydər Əliyev Mərkəzinin direktoru Anar
        Ələkbərovdur. Mərkəz müasir Bakının simvollarından biri hesab edilir.
      </p>
      <br />
      <p>Xalq arasında "İmza Sarayı" adı ilə də tanınır.</p>
      <br />
      <br></br>

      <div className="flex text-3xl justify-center font-semibold w-full">
        <p className="border-b-gray-500 border-b-2">Tarixi</p>
      </div>
      <br />
      <p>
        Azərbaycan Respublikasının Prezidenti İlham Əliyevin 29 dekabr 2006-cı
        il tarixli , 1886 nömrəli sərəncamı əsasında yaradılıb. Mərkəz Heydər
        Əliyevin dövlətçilik fəlsəfəsi və azərbaycançılıq məfkurəsinin dərindən
        öyrənilməsi, geniş təbliği, Azərbaycan tarixi və dilinin,
        mədəniyyətinin, milli-mənəvi dəyərlərinin yaşadılması istiqamətində
        sistemli fəaliyyət göstərir. Hazırda mərkəzin yerləşdiyi ərazidə
        əvvəllər Səttarxan adına zavod fəaliyyət göstərmişdir. Zavod 16 ha
        ərazini əhatə edirdi. Zavodun başqa əraziyə köçürülməsindən sonra,
        təmizlənmiş ərazidə inşaat işlərinə başlanılmışdır. 10 sentyabr 2007-ci
        ildə binanın təməli qoyulmuşdur. Azərbaycan Respublikası Prezidentinin 8
        oktyabr 2012-ci il tarixli sərəncamı ilə Heydər Əliyev Mərkəzinin
        Əsasnaməsi təsdiq edilmişdir. Mərkəz 101,801 m² ərazini əhatə edir.
        Binanın tikinti prosesi, dünyanın ən mürəkkəb və maraqlı müasir memarlıq
        layihələrinə həsr edilən, Discovery Science və Discovery Channel
        vasitəsiylə yayımlanan məşhur Build It Bigger verilişində
        işıqlandırılmışdır. Verilişdə Denni Foster qeyd edir ki, "Bu sadəcə
        mədəniyyət mərkəzi deyil, həm də dünyada öz yerini tutmaq üçün bir
        vasitədir." 10 may 2012-ci ildə mərkəzin təntənəli açılış mərasimi olmuş
        və bu hadisə Heydər Əliyevin 89-cu doğum gününə təsadüf etmişdir.
        Mərasimdə Azərbaycan Respublikasının Prezidenti İlham Əliyev və onun
        xanımı Mehriban Əliyeva da iştirak etmişlər. 2013-cü ilin oktyabrında
        Heydər Əliyev Mərkəzi Sinqapurda keçirilən Dünya Memarlıq Festivalında
        təqdim edilmişdir. 2014-cü ilin iyununda Heydər Əliyev Mərkəzinin
        binasının dizaynına görə "Design Museum" təşkilatı Zaha Hadidə "İlin
        dizaynı 2014" mükafatını verib. Zaha Hadidə mükafat Bakıda təqdim
        edilib.
      </p>
      <br />
      <br></br>

      <br />
      <div className="flex text-3xl justify-center font-semibold w-full">
        <p className="border-b-gray-500 border-b-2"> Memarlıq xüsusiyyətləri</p>
      </div>
      <br />

      <p>
        Kompleksin ərazisi 15,93 hektardır. Kompleksin layihəsində demək olar
        ki, düz xəttlərdən istifadə edilməmişdir. Bina özü dalğavari quruluşa
        malik olmaqla yerlə təmas edərək düzgün və harmonik görüntü
        formalaşdırır. Belə bir memarlıq quruluşu postmodernist memarlığı təmsil
        etməklə, həm də sonsuzluq effekti formalaşdırır. Binanın xəttləri sanki
        keçmişlə gələcəyin birləşməsini simvolizə edir. Binanın auditoriumu
        Binanən inşası zamanı, ümumi uzunluğu 90 km olan dəmir konstruksiyalar
        şəbəkəsindən istifadə edilmişdir. Dam örtüyünün quraşdırılması zamanı,
        ümumi sahəsi 4 ha olan və 12027 ədəd xüsusi tərkibli müxtəlif ölçülü və
        üçbucaq, düzbucaqlı, trapesiya, paraleloqram həndəsi formalı panellərdən
        istifadə olunmuşdur. Mərkəzin inşasında istifadə olunmuş ağ rəng parlaq
        gələcəyin simvolu olmaqla, həm də memarlıq detallarının seçilməsi
        məqsədini güdür. Ağ rəng sayəsində bina üzərinə düşən işıq şüaları əks
        olunaraq onu tamamilə əhatə edir və binanın qabarıq hissələrini bir
        qədər artıq vurğulayır. Əsas binadan başqa kompleksə yeraltı avtomobil
        dayanacağı və 13,58 ha əraziyə malik park da daxildir. Kompleksin
      </p>
      <br></br>

      <div className="flex text-2xl  font-medium w-full">
        <p className="border-b-gray-500 border-b-2"> Interyeri</p>
      </div>
      <br></br>

      <p>
        Ərazisində 2 dekorativ hovuz və süni göl var. İnteryeri Mərkəzin əsas
        binası üç böyük hissədən ibarətdir: Heydər Əliyev Muzeyi, sərgi zalları
        və "Auditorium". Binanın doqquz mərtəbəli hissəsində sərgi zalları,
        ofislər, həmçinin kafelər yerləşir. Dörd mərtəbəli "Auditorium"
        hissəsində iki konfrans salonu, görüş otaqları və media mərkəzi
        yerləşir. Binada həmçinin təbii ağaclar və bitkilərdən təşkil olunmuş
        landşaft ərazisi də formalaşdırılmışdır. Binanın tərkibində müxtəlif
        interaktiv məlumat köşkləri vardır ki, burada mərkəzə gələn ziyarətçilər
        burada keçirilən tədbirlər və sərgilər haqqında məlumat əldə edə
        bilərlər.
      </p>
      <br />
      <br />
      <br></br>

      <div className="flex text-3xl justify-center font-semibold w-full">
        <p className="border-b-gray-500 border-b-2"> Sərgi zalları</p>
      </div>
      <br />

      <div className=" text-2xl flex  font-medium w-full ">
        <p className="border-b-gray-500 border-b-2"> "Azərbaycan inciləri"</p>
      </div>
      <br></br>

      <p>
        Mərkəzin birinci mərtəbəsində "Azərbaycan inciləri" adlı sərgi fəaliyyət
        göstərir. Sərgidə ölkənin tarixi və mədəni irsini əks etdirən unikal
        eksponatlar nümayiş etdirilir. Sərgidə Azərbaycan tarixinin bütün
        dövrlərini, həmçinin mədəniyyətinin müxtəlif sahələrini özündə əks
        etdirən eksponatlar vardır. Sərgidə arxeoloji ekspedisiyalar zamanı
        Qobustan dövlət tarixi-bədii qoruğundan aşkarlanmış qayaüstü təsvirlər,
        numizmatika məmulatları, zinət əşyaları, orta əsrlərə aid gil və
        keramika nümunələri, Tövrat, İncil və Quranın qədim əlyazmalarını görmək
        mümkündür. Eksponatlar arasında həmçinin müxtəlif regionlara məxsus
        Azərbaycan milli geyim nümunələri və müxtəlif məktəblərə xas Azərbaycan
        xalçaları da vardır. Burada həm də qədim Azərbaycan musiqi alətləri də
        sərgilənir ki, ziyarətçilər onlara yaxınlaşmaqla, həm də alətlərin
        səslənməsini dinləyə bilirlər.
      </p>
      <br></br>
      <br></br>

      <div className=" text-2xl flex  font-medium w-full">
        <p className="border-b-gray-500 border-b-2"> "Mini Azərbaycan"</p>
      </div>
      <br></br>

      <p>
        İkinci mərtəbədə yerləşən "Mini Azərbaycan" sərgisində Bakıda və eləcə
        də Azərbaycanın digər bölgələrində yerləşən və tarixi-memarlıq
        əhəmiyyətinə malik 45 binanın maketi sərgilənir. Ziyarətçilər həm
        azərbaycan dilində, həm də ingilis dilində sərgilənən binaların tarixi
        və memarlığı haqqında məlumat ala bilirlər. Sərgilənən binalar arasında
        orta əsrlərə (Qız qalası, Möminə Xatun türbəsi), XIX əsrə (Bakı vağzalı,
        Azərbaycan Dövlət Filarmoniyası, İsmailiyyə Sarayı), SSRİ dövrünə
        (Hökumət Evi, Yaşıl teatr), XXI əsrə (Bakı Kristal Zalı, Alov qüllələri)
        aid binalarla yanaşı, tikilməkdə olan binalar (Bakı Olimpiya Stadionu,
        Azərbaycan Respublikası Dövlət Neft Fondu) da vardır.
      </p>
      <br></br>
      <br></br>

      <div className=" text-2xl flex   font-medium w-full">
        <p className="border-b-gray-500 border-b-2">
          {" "}
          "Azərbaycana xoş gəlmisiniz"
        </p>
      </div>
      <br></br>
      <p>
        Mərkəzin üçüncü mərtəbəsində "Azərbaycana xoş gəlmisiniz" adlı sərgi
        yerləşir. Burada Azərbaycanın tarixi, mədəniyyəti, incəsənəti və
        təbiətinə aid eksponatlar sərgilənir. Sərgini ziyarət edənlər
        Azərbaycanın müxtəlif regionlarında yerləşən təbiət və memarlıq
        abidələrinin fotolarını görə bilərlər. Burada Naxçıvandakı Möminə Xatun
        türbəsi, Kiş kilsəsi, Şirvanşahlar saray kompleksi, Yanardağ və sair
        görməli yerlərlə tanış olmaq olar.
      </p>
      <br></br>
      <br></br>

      <div className="flex text-2xl  font-medium w-full">
        <p className="border-b-gray-500 border-b-2">
          {" "}
          Azərbaycan mətbəxi fotoları
        </p>
      </div>
      <br></br>
      <p>
        Dördüncü mərtəbədə yerləşən "Azərbaycan mətbəxi fotoları" sərgisində
        Azərbaycanın mətbəx mədəniyyəti təqdim edilir. Burada Fransada
        yaşayıb-yaradan tanınmış amerikan fotoqrafı Peter Lippmanın çəkdiyi
        fotolar yerləşdirilib. Fotolarda Azərbaycan milli mətbəxinə xas olan
        plov, dolma, küftə-bozbaş, çörək və lavaşla yanaşı, müxtəlif
        şirniyyatlar (paxlava, şəkərbura), həmçinin ənənəvi armudu stəkanda çay
        da görmək mümkündür.
      </p>
      <br />

      <br />

      <div className="text-2xl w-full flex font-medium ">
        <p className="border-b-gray-500 border-b-2"> Heydər Əliyev muzeyi</p>
      </div>
      <br></br>
      <p>
        Mərkəzin ən cəlbedici hissələrindən birində Heydər Əliyev Muzeyi
        fəaliyyət göstərir. Dizaynı və burada tətbiq olunan yeni texnologiyaları
        ilə fərqlənən muzey Heydər Əliyevin həyat və fəaliyyətinin müxtəlif
        dövrlərini əks etdirir. Burada Heydər Əliyevin həm Sovet hakimiyyəti
        dövründə, həm də müstəqillik illərində həyata keçirdiyi fəaliyyət
        konsepsiyasının müxtəlif aspektləri virtual formada təqdim edilir.
        Heydər Əliyev haqqında çəkilən filmləri izləmək istəyənlər üçün müasir
        avadanlıqlarla təchiz edilmiş xüsusi zal fəaliyyət göstərir. Muzeydə
        maraq doğuran bölmələrdən biri də ümummilli liderin müxtəlif ölkə
        rəhbərləri ilə görüşlərini əks etdirən multimediya zalıdır. Muzeyin
        "Beynəlxalq əlaqələr" bölməsində məlumatlar xüsusi qlobus vasitəsilə
        çatdırılır. Belə ki, qlobusun üzərində yerləşən hər hansı ölkənin adına
        toxunduqda, Heydər Əliyevin hakimiyyətdə olduğu dövr ərzində keçirdiyi
        görüşlər ekranda öz əksini tapır. Muzeydə təqdim olunan Heydər Əliyevin
        hərbi və mülki geyimləri, iş masası, şəxsi əşyaları, müxtəlif illərdə
        layiq görüldüyü orden və medallar, dünya ölkələrinin rəhbərləri
        tərəfindən aldığı hədiyyələr də nümayiş etdirilən eksponatlar
        siyahısındadır.
      </p>
      <br />

      <br />

      <br />
    </>
  );
  return (
    <>
      {" "}
      <AbideInfo
        imgs={imgs}
        name="Heydər Əliyev Mərkəzi"
        paragraph={paragraph}
      />
    </>
  );
}

export default abideler;
