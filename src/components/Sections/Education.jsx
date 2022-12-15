import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import AboutParagraph from "../RouteComponents/AboutParagraph";
import EducationParagraph from "../RouteComponents/EducationParagraph";
import Popup from "../Utility/Popup";
import Navbar from "./Navbar";
import educationImg2 from "/educationImg2.jpg";
import educationImg3 from "/educationImg3.jpg";
import educationImg4 from "/educationImg4.jpg";
import educationImg5 from "/educationImg5.jpg";
import educationImg6 from "/educationImg6.jpg";
import educationImg8 from "/educationImg8.jpg";
import educationImg7 from "/educationImg7.jpg";

import educationImg9 from "/educationImg9.jpg";
import educationImg10 from "/educationImg10.jpg";
import educationImg11 from "/educationImg11.jpg";

function Education(props) {
  const schools = [
    {
      id: 1,
      src: "https://upload.wikimedia.org/wikipedia/az/e/e8/Az.MIU_logo.png",
      name: "Azərbaycan Memarlıq və İnşaat Universiteti",
      wikiLink: "a",
      melumat:
        "Azərbaycan Memarlıq və İnşaat Universiteti (AzMİU) 1920-ci ildən Bakı Politexnik İnstitutunun tərkibində inşaat fakültəsi, 1930–1934-cü illərdə müstəqil İnşaat və Memarlıq İnstitutu, 1934-cü ildən Azərbaycan Sənaye İnstitutunun, 1951-ci ildən isə Azərbaycan Politexnik İnstitutunun tərkibində inşaat-memarlıq yönümlü ixtisasları birləşdirən bir neçə fakültə kimi fəaliyyət göstərmişdir. 1975-ci ildə Azərbaycan Respublikası Nazirlər Kabinetinin qərarı ilə Azərbaycan İnşaat Mühəndisləri İnstitutu yaradılmışdır. 1992-ci ildə institut universitet statusu almışdır. 2000-ci il iyun ayının 13-də Azərbaycan Respublikasının prezidenti Heydər Əliyevin Fərmanı ilə bu ali məktəb Azərbaycan Memarlıq və İnşaat Universiteti adlandırılmışdır.",
      subTitle:
        "Azərbaycan Respublikası Təhsil Nazirliyinin tabeliyində olan ali təhsil müəssisəsi.",
    },

    {
      id: 2,
      src: educationImg2,
      name: "Azərbaycan Dövlət Dəniz Akademiyası      ",
      wikiLink:
        "https://az.wikipedia.org/wiki/Az%C9%99rbaycan_D%C3%B6vl%C9%99t_D%C9%99niz_Akademiyas%C4%B1",
      melumat:
        "1995-ci ilin may ayında Azərbaycan Beynəlxalq Dəniz Təşkilatına üzv qəbul olundu və bu təşkilatın bütün konvensiyalarını qəbul etdi. Azərbaycan Konvensiyaya qoşulduqdan sonra Dəniz Akademiyası ilk gündən BDT-nin 'Dənizçilərin hazırlanması, onlara diplom verilməsi və növbə çəkməsi haqqında' 1978-ci ildə qəbul edilmiş Beynəlxalq Konvensiyanın tələblərinə uyğun olaraq təhsilini qurmuşdur. Azərbaycan Dövlət Dəniz Akademiyası 2000-ci ilin yanvar ayında Beynəlxalq Dəniz Təşkilatının dəniz təhsil məktəbləri kataloquna 012 sayla daxil edilmişdir.",
      subTitle:
        "Azərbaycanda dənizçi kadrların hazırlığı ilə məşğul olan dövlət ali təhsil müəssisəsi",
    },

    {
      id: 3,
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Bak%C4%B1%2C_R%C9%99ssaml%C4%B1q_Akademiyas%C4%B1.jpg/1920px-Bak%C4%B1%2C_R%C9%99ssaml%C4%B1q_Akademiyas%C4%B1.jpg",
      name: "Azərbaycan Dövlət Rəssamlıq Akademiyası",
      wikiLink:
        "https://az.wikipedia.org/wiki/Az%C9%99rbaycan_D%C3%B6vl%C9%99t_R%C9%99ssaml%C4%B1q_Akademiyas%C4%B1",
      melumat:
        "Akademiyada bakalavr hazırlığı üçün 4 il, magistr hazırlığı üçün 2 il vaxt norması nəzərdə tutulmuşdur. Təhsil ödənişli və ödənişsiz əsaslardadı. Burada əyani və qiyabi şöbələr fəaliyyət göstərir. Universitetdə yüksək ixtisaslı elmi işçilərin hazırlanmasına xidmət edən aspirantura fəaliyyət göstərir.",
      subTitle:
        "Azərbaycan Dövlət Rəssamlıq Akademiyası 2002-ci ildə Respublika Prezidentinin fərmanı ilə yaradılmışdır.",
    },

    {
      id: 5,
      src: educationImg4,
      name: "Azərbaycan Milli Konservatoriyası",
      wikiLink:
        "https://az.wikipedia.org/wiki/Az%C9%99rbaycan_Milli_Konservatoriyas%C4%B1",
      melumat:
        "Ali musiqi məktəbi Azərbaycan Respublikası Prezidenti Heydər Əliyevin 2000-ci il 13 iyun tarixli 'Azərbaycan Milli Konservatoriyası'-nın təsis edilməsi haqqında fərmanı ilə yaradılıb. 10 avqust 2001-ci il tarixli 'Azərbaycan Milli Konservatoriyasının maddi-texniki bazasının yaradılması haqqında' sərəncama əsasən Azərbaycan Milli Konservatoriya tərkibinə Bakı Musiqi Kolleci və Respublika İncəsənət Gimnaziyası daxil olmuşdur. Bu sərəncama əsasən Konservatoriyanın rektoru Siyavuş Kərimi təyin edildi.",
      subTitle:
        "Azərbaycan Respublikası Təhsil Nazirliyinin tabeliyində olan ali təhsil müəssisəsi.",
    },
    {
      id: 6,
      src: educationImg3,
      name: "Naxçıvan Müəllimlər İnstitutu",
      wikiLink:
        "https://az.wikipedia.org/wiki/Nax%C3%A7%C4%B1van_M%C3%BC%C9%99lliml%C9%99r_%C4%B0nstitutu#/media/Fayl:NMU_loqosu.jpeg",
      melumat:
        "Kiyev Politexnik texnikumunun filialı kimi 1969-cu ildən fəaliyyətə başlamışdır. 1974-cü ildə müstəqil fəaliyyət göstərən texnikuma Cəmşid Naxçıvanskinin adı verilmişdi. Texnikum sənaye, tikintisi, mülki tikinti, sənayemüəssisələrinin və qurğularının elektrik avadanlıqları, tikinti maşın və avadanlıqları ixtisasları üzrə mütəxəssis hazırlayırdı. Azərbaycan Respublikası Prezidentinin 13 iyun 2000-ci il tarixli, 349 nömrəli Fərmanına əsasən texnikumun bazasında Azərbaycan Müəllimlər İnstitutunun Naxçıvan filialı yaradılmışdır.",
      subTitle:
        " Azərbaycan Respublikası Təhsil Nazirliyinin tabeliyində olan ali təhsil müəssisəsi.",
    },
    {
      id: 7,
      src: educationImg5,
      name: "Sumqayıt Dövlət Universiteti",
      wikiLink:
        "https://az.wikipedia.org/wiki/Sumqay%C4%B1t_D%C3%B6vl%C9%99t_Universiteti",
      melumat:
        "Universitetin tarixi 1962-ci ildən başlayır. Həmin il bu ali məktəb SSRİ Nazirlər Sovetinin qərarına əsasən Azərbaycan Neft və Kimya İnstitutunun filialı olaraq yaradılmışdır.1975-ci ilə qədər filial kimi fəaliyyət göstərmiş, 1975–1992-ci illərdə isə Ali Texniki Təhsil Məktəbi adı altında tədrisini davam etdirmişdir. 1992-ci ildən Azərbaycan Sənaye İnstitutu adlandırılıb. Azərbaycan Respublikası Prezidentinin 13 iyun 2000-ci il tarixli fərmanı ilə Azərbaycan Sənaye İnstitutunun bazasında Sumqayıt Dovlət Universiteti yaradılmışdır.",
      subTitle:
        " Azərbaycanın Sumqayıt şəhərində yerləşən və Azərbaycan Respublikası Təhsil Nazirliyinin tabeliyində olan ali təhsil müəssisəsi.",
    },
    {
      id: 8,
      src: educationImg6,
      name: "Dövlət Təhlükəsizliyi Xidmətinin Heydər Əliyev adına Akademiyası      ",
      wikiLink:
        "https://az.wikipedia.org/wiki/D%C3%B6vl%C9%99t_T%C9%99hl%C3%BCk%C9%99sizliyi_Xidm%C9%99tinin_Heyd%C9%99r_%C6%8Fliyev_ad%C4%B1na_Akademiyas%C4%B1",
      melumat:
        "Dövlət Təhlükəsizliyi Xidmətinin Heydər Əliyev adına Akademiyası Azərbaycan Respublikası Prezidentinin 1998-ci il 1 dekabr tarixli, 37 nömrəli Sərəncamı ilə yaradılmışdır. Akademiyaya Azərbaycan Respublikasının Prezidenti İlham Əliyevin 2005-ci il dekabr ayının 20-də imzaladığı Fərman ilə Akademiyaya Heydər Əliyevin adı verilmişdir. Müstəqil Azərbaycan Respublikasının mühüm dövlətçilik təsisatlarından olan təhlükəsizlik orqanları üçün xalqına və dövlətinə ləyaqətlə xidmət edən, onun təhlükəsizliyinin keşiyində dayanan, sədaqətli və vətənpərvər, yeni nəsil peşəkar və ixtisaslı kadrların hazırlanmasını həyata keçirən Dövlət Təhlükəsizliyi Xidmətinin Heydər Əliyev adına Akademiyasının yaradılması bilavasitə Ümummilli Lider Heydər Əliyevin adı ilə bağlıdır.",
      subTitle:
        "Fundamental və tətbiqi elmi tədqiqatlar aparan xüsusi təyinatlı dövlət ali təhsil müəssisəsi.",
    },
    {
      id: 9,
      src: educationImg8,
      name: "Heydər Əliyev adına Hərbi Lisey",
      wikiLink:
        "https://az.wikipedia.org/wiki/Heyd%C9%99r_%C6%8Fliyev_ad%C4%B1na_H%C9%99rbi_Lisey",
      melumat:
        "Azərbaycan Respublikası prezidentinin 13.03.1998-ci il tarixli Sərəncamı və müdafiə nazirinin 09.04.1998-ci il tarixli əmri ilə 1998-ci ildə Naxçıvan Muxtar Respublikasında C.Naxçıvanski adına hərbi liseyin Naxçıvan filialı açılmışdır. Azərbaycan Respublikası prezidentinin 27 fevral 2004-cü il tarixli sərəncamı ilə C.Naxçıvanski adına hərbi liseyin Naxçıvan filialı ləğv edilmiş və onun əsasında Heydər Əliyev adına Hərbi Lisey yaradılmışdır.",
      subTitle:
        " 1998-2004-cü illərdə: C.Naxçıvanski adına hərbi liseyin Naxçıvan filialı ",
    },
    {
      id: 10,
      src: educationImg9,
      name: "Hüquq və İnsan Haqları İnstitutu",
      wikiLink:
        "https://az.wikipedia.org/wiki/H%C3%BCquq_v%C9%99_%C4%B0nsan_Haqlar%C4%B1_%C4%B0nstitutu",
      melumat:
        "İnsan Hüquqları İnstitutu Azərbaycan Respublikası Prezdentinin “İnsan Hüququları üzrə elmi-tədqiqat institutunun yaradılması haqqında” 30.11.1998-ci il tarixli qərarına əsasən, Azərbaycan Milli Elmlər Akademiyasının Rəyasət Heyətinin qərarı ilə yaradılmış və 21.06.1999-cu ildə Ədliyyə Nazirliyində qeydiyyatdan keçmişdir. İnstitutun məqsədi insan hüququları və azadlıqları problemlərini öyrənmək, elmi təkliflər hazırlamaq, bu sahə üzrə hüquqi bilikləri dərinləşdirmək, elmi araşdırmalar aparmaqdadır.",
      subTitle:
        "Azərbaycan Milli Elmlər Akademiyasının strukturuna daxil olan elmi təşkilat.",
    },
    {
      id: 11,
      src: educationImg10,
      name: "Azərbaycan Respublikasının Prezidenti yanında Dövlət İdarəçilik Akademiyası        ",
      wikiLink:
        "https://az.wikipedia.org/wiki/Az%C9%99rbaycan_Respublikas%C4%B1n%C4%B1n_Prezidenti_yan%C4%B1nda_D%C3%B6vl%C9%99t_%C4%B0dar%C9%99%C3%A7ilik_Akademiyas%C4%B1",
      melumat:
        "Azərbaycanda yüksək tipli ilk siyasi təhsil müəssisəsi 1921-ci ilin dekabrında təşkil edilmiş Mərkəzi Sovet Partiya Məktəbi olmuşdur. Bu məktəb 1928-ci ildə Bakı partiya komitəsi nəzdində olan Ali Sovet Partiya məktəbi ilə birləşərək, ikiillik Azərbaycan Mərkəzi Sovet Partiya məktəbi adı altında fəaliyyətini Böyük Vətən müharibəsinin başlanmasına qədərki dövrdə davam etdirmişdir. Bakı Ali Partiya məktəbi 1954-cü ildə fəaliyyətdə olan üçillik respublika partiya məktəbi əsasında 1956-cı ildə yaradıldı. Məktəbin xüsusi fakültəsində Cənubi Azərbaycandan 1945–1946-cı illərdə gəlmiş demokratik gənclər təhsil alırdı.",
      subTitle: " Bir neçə dəfə 'İlin təhsil müəssisəsi' seçilmişdir.",
    },
    {
      id: 13,
      src: educationImg11,
      name: "Heydər Əliyev adına Müasir Təhsil Kompleksi      ",
      wikiLink:
        "https://az.wikipedia.org/wiki/Heyd%C9%99r_%C6%8Fliyev_ad%C4%B1na_M%C3%BCasir_T%C9%99hsil_Kompleksi",
      melumat:
        "2001-ci il sentyabr ayının 1-də Ümummilli lider Heydər Əliyevin iştirakı ilə açılmışdır. Təhsil ocağı üç hissədən — uşaq bağçası, orta ümumtəhsil məktəbi və orta məktəbdən ibarətdir və onların hər birində üç bölmə — Azərbaycan, rus və ingilis bölmələri fəaliyyət göstərir. Məktəbdə Olimpiada qrupları, Şagird Elmi Cəmiyyəti, Şagird Parlamenti fəaliyyət göstərir. İngilis bölməsində dərslər 'Cambridge proqramı əsasında keçirilir. Proqramı bitirən şagirdlərə dünyanın bütün ölkələrində tanınan və yüksək səviyyədə qiymətləndirilən IGCSE sertifikatları verilir. 15 may 2018-ci ildə Heydər Əliyev adına Müasir Təhsil Kompleksinin yeni binasının açılışı olub. Azərbaycan Respublikasının Prezidenti İlham Əliyev və birinci xanım Mehriban Əliyeva açılış mərasimində iştirak ediblər.",
      subTitle:
        " Özündə bağça-məktəb fəaliyyətini birləşdirən Azərbaycanın ilk özəl təhsil müəssisələrindən biri.",
    },
    {
      id: 12,
      src: educationImg7,
      name: "Azərbaycan Silahlı Qüvvələrinin Hərbi Akademiyası",
      wikiLink:
        "https://az.wikipedia.org/wiki/Az%C9%99rbaycan_Silahl%C4%B1_Q%C3%BCvv%C9%99l%C9%99rinin_H%C9%99rbi_Akademiyas%C4%B1",
      melumat:
        "Hərbi Akademiyada iki il müddətində təhsil alan dinləyicilər taktiki və operativ səviyyədəki birlik və qərargahlarda komandir və qərargah zabitləri vəzifələrində çalışmaq üçün hazırlanırlar. Hərbi Akademiyada təşkil olunmuş tədris prosesi hərbi-strateji, operativ-taktiki, eləcə də hərbi-siyasi və hərbi-iqtisadi məsələlərin öyrənilməsini təmin edir. Azərbaycan Respublikası Silahlı Qüvvələrinin Hərbi Akademiyasının nəzdində Strateji tətqiqatlar və dövlət müdafiəsini idarəetmə və hərbi diplomatiya kursları da fəaliyyət göstərir. Kursların vəzifəsi respublikanın müdafiəsi ilə əlaqədar hərbi-strateji, hərbi-iqtisadi və hərbi-siyasi məsələlərin öyrənilməsini təmin etməkdir.",
      subTitle:
        "  20 fevral 1999-cu il tarixli fərmanı ilə Azərbaycan Respublikası Silahlı Qüvvələrinin Hərbi Akademiyası yaradılmışdır.",
    },
  ];

  const [showPopUp, setShowPopUp] = useState(false);
  const [mukafatIndex, setMukafatIndex] = useState();

  function popUpToggle(idz) {
    setShowPopUp(true);

    const boolList = schools.map((school) => school.id === idz);
    const index = boolList.indexOf(true);
    setMukafatIndex(index);
  }

  return (
    <section
      id="təhsilə-dəyəri"
      className={
        !props.routed
          ? `flex flex-col  h-[1500px]  xxs:h-[1300px] items-center justify-center 
        ${
          props.lightMode
            ? "dark bg bg-gradient-to-b  from-gray-200 via-white to-white"
            : "bg-gradient-to-b dark-scrollbar  from-gray-800 via-gray-800 to-black "
        }
        snap-center  w-full md:h-screen`
          : `w-full   	pb-20 pt-5  
        ${
          props.lightMode
            ? "dark bg bg-gradient-to-b   from-gray-200 via-white text-black to-white"
            : "bg-gradient-to-b dark-scrollbar  from-black via-black to-gray-800 "
        }
  text-white`
      }
    >
      {props.routed ? <Navbar routAbout lightMode={props.lightMode} /> : <></>}{" "}
      {/* this is the pic gallery of all the things universities he made */}
      {props.routed ? (
        <>
          <div className="max-w-screen-lg min-h-screen mb-40 mt-24 p-4 mx-auto flex flex-col  w-full">
            <div className={`pb-8 flex  justify-center`}>
              <p className="text-4xl font bold text-center  inline border-b-2 border-gray-500">
                Yaratdığı təhsil müəssisələri
              </p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3    gap-8 px-12 sm:px-0">
              {schools.map((school) => {
                return (
                  <div
                    key={school.id}
                    onClick={() => popUpToggle(school.id)}
                    className={
                      "shadow-md group cursor-pointer dark:shadow-md h-[250px]  flex justify-center items-center active:scale-95  p-10 relative shadow-gray-600  dark:shadow-gray-300 rounded-md "
                    }
                  >
                    <img
                      src={school.src}
                      className={"rounded-t-lg h-[100%]  object-fit-down "}
                    />
                    <div className="absolute dark:text-white  transition px-3 text-center justify-center   ease-in-out duration-700 group-hover:opacity-100 opacity-0  flex top-0 left-0 rounded-md h-full w-full bg-gradient-to-t from-black   via-black/600 to-transparent">
                      <h1 className="  text-xl   mt-auto mb-5 font-bold">
                        {school.name}
                      </h1>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div
          className={`pb-8 flex ${props.routed ? "" : <></>}  justify-center`}
        >
          <p className="text-4xl font bold  text-center inline  border-b-2 border-gray-500">
            Milli təhsil quruculuğunda rolu
          </p>
        </div>
        <div className="text-xl mt-5">
          <p>
            Heydər Əliyev hələ Azərbaycana birinci rəhbərliyi dövründə təhsilin
            inkişafına böyük önəm verirdi. Ötən əsrin 70-80-ci illərində onun
            rəhbərliyi altında təhsil müəssisələrinin geniş şəbəkəsinin
            yaradılması və həmin şəbəkənin zəngin maddi-texniki bazasının
            formalaşdırılması, respublika hüdudlarından kənardakı ali məktəblərə
            gənclərin göndərilməsi, hərbi kadrların yetişdirilməsi, respublika
            elmlər akademiyasının elmi-tədqiqat institutlarında fundamental
            elmin inkişafının təmin olunması gələcəkdə milli müstəqillik üçün
            zəruri intellektual zəmin yaratmışdır.
          </p>
          <br />
          <p>
            Həmin illərdə respublikada məktəblərin, ali və orta ixtisas
            müəssisələri üçün yeni binaların tikintisi geniş vüsət almış, təhsil
            infrastrukturu tamamilə yeniləşdirilmiş, ixtisaslı kadrlar
            hazırlayan ali və orta ixtisas məktəbləri açılmışdır. Respublikanın
            müxtəlif bölgələrində 800-ə yaxın məktəb tikilərək istifadəyə
            verilmiş, ölkəmizdə fəaliyyət göstərən ali məktəblərin ümumi sayı
            12-dən 17-yə, tələbələrin sayı 70 mindən 100 minə qədər artmışdır.
          </p>{" "}
          <br />
          {!props.routed ? (
            <>
              <Link
                onClick={() => scrollTo(0, 0)}
                state={props.lightMode}
                to={"/Təhsilə-Dəyəri"}
                className={`to-route-button dark:text-gray-800 dark:bg-gradient-to-b dark:from-white dark:to-gray-200 dark:shadow-md active:scale-90`}
              >
                <span className=" mr-3">Daha Ətraflı</span> <FaArrowRight />
              </Link>
            </>
          ) : (
            <EducationParagraph />
          )}
        </div>
        {showPopUp ? (
          <Popup
            setShowPopUp={setShowPopUp}
            mukafatImg={schools[mukafatIndex].src}
            mukafatName={schools[mukafatIndex].name}
            mukafatMelumat={schools[mukafatIndex].melumat}
            mukafatSubTitle={schools[mukafatIndex].subTitle}
            lightMode={props.lightMode}
            education
            wikiLink={schools[mukafatIndex].wikiLink}
          />
        ) : (
          <></>
        )}
      </div>
    </section>
  );
}

export default Education;
