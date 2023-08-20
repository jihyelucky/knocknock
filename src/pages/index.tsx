import React from "react";
import Footer from "@/components/templates/Footer/index";
import Header from "@/components/templates/Header/index";
import "@/assets/styles/globals.css";

const Home: React.FC = () => {
  return (
    <div>
      <main>
        <Header />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
