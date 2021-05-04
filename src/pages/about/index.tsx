import React from "react";
import { useParams } from "react-router-dom";

import AboutComponent from "../../components/People/About";

const AboutPage = () => {
  const params = useParams();
  //@ts-ignore
  const { name } = params;



  return (
    <div className="about-page">
      <AboutComponent value={name} />
    </div>
  );
};

export default AboutPage;
