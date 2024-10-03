import Car from "../components/Car";
const car = () => {
  const cars = [
    {
      image:
        "https://www.bmw.mn/content/dam/bmw/common/all-models/m-series/series-overview/bmw-m-series-seo-overview-ms-04.jpg",
      word: "BMW",
      word2: "BMW is WHITE",
    },
    {
      image:
        "https://media.ed.edmunds-media.com/mercedes-benz/s-class/2024/oem/2024_mercedes-benz_s-class_sedan_amg-s-63-e-performance_fq_oem_1_1600.jpg",
      word: "MERCEDES",
      word2: "Mercedes is BLACK",
    },
    {
      image:
        "https://www.kbb.com/wp-content/uploads/2022/10/2023-toyota-rav4-prime-frt-3qtr.jpg?w=918",
      word: "TOYOTA",
      word2: "Toyota is DARKBLUE",
    },
    {
      image:
        "https://www.alfaromeousa.com/content/dam/alfausa/shopping-tools/vehicle-selector/2024/MY24-VSP-Giulia-Desktop.jpg",

      word: "ALPHA ROMEO",
      word2: "Alpha Romeo is Red",
    },
  ];
  return (
    <div>
      <div className="border">
        {cars.map((ner, index) => {
          return (
            <Car
              image={ner.image}
              key={index}
              word={ner.word}
              word2={ner.word2}
            />
          );
        })}
      </div>
    </div>
  );
};
export default car;
<img src="asdkgjfldsfdklf" />;
