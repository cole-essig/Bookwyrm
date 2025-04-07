import "./Home.css"
import React from "react"
import Header from "../../Header/Header";
import HomeContent from "./HomeContent";
import Footer from "../../Footer/Footer";

function Home() {
    return (
        <>
          <Header />
          <HomeContent />
          <Footer />
        </>
    )
}

export default Home;