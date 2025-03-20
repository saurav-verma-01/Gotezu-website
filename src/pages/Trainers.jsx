import React from 'react'
import TrainersHero from "../sections/TrainersHero.jsx";
import ExploreAllTrainers from "../sections/ExploreAllTrainers.jsx";
import NavBar from "../sections/NavBar.jsx";
import Footer from "../sections/Footer.jsx";

const Trainers = () => {
    return (
        <>
            <NavBar />
            <TrainersHero />
            <ExploreAllTrainers />
            <Footer />
        </>
    )
}
export default Trainers
