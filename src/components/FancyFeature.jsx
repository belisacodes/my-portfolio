import React from "react";

const FeaturesContent = [
  {
    img: "95",
    title: "Responsive Design",
    desc: ` Get your content adapted to any device: Desktop, mobile, tablet `,
  },
  {
    img: "97",
    title: "Product 100% customised",
    desc: `Build a robust and scalable product that differentiates from your competition.`,
  },
  {
    img: "98",
    title: "UX/UI Design",
    desc: `Design the product seeking to generate an excellent user experience.`,
  },
];
const FancyFeature = () => {
  return (
    <>
      {FeaturesContent.map((val, i) => (
        <div
          className="col-lg-4 col-sm-6"
          data-aos="fade-up"
          data-aos-duration="1200"
          key={i}
        >
          <div className="block-meta">
            <div className="icon d-flex align-items-end">
              <img src={`images/icon/${val.img}.svg`} alt="icon" />
            </div>
            <h4>{val.title}</h4>
            <p>{val.desc}</p>
          </div>
        </div>
        // .block-meta
      ))}
    </>
  );
};

export default FancyFeature;
