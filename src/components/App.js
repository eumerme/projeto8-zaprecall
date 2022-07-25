import React from "react";
import WelcomePage from "./WelcomePage";
import FlashcardsPage from "./FlashcardsPage";
import "./assets/css/reset.css";
import "./assets/css/style.css";

export default function App() {
    const [startPage, setStartPage] = React.useState(true);

    return (
        <>
            {startPage ? (
                <WelcomePage startPage={startPage} setStartPage={setStartPage} />
            ) : (
                <FlashcardsPage />
            )}
        </>
    );
}