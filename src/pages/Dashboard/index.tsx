import React from "react";
import Coffee from "../../components/cafe";
import Footer from "../../components/footer";
import Intro from "../../components/intro";
import Menu from "../../components/menu";
import Pilates from "../../components/pilates";

const Dashboard: React.FC = () => {
  return (
    <>
      <Menu />
      <Intro />
      <Pilates />
      <Coffee />
      <Footer />
    </>
  );
};

export default Dashboard;
