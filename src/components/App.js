import React from "react";
import WelcomePage from "./WelcomePage";
import FlashcardsPage from "./FlashcardsPage";

export default function App() {
    const [page, setPage] = React.useState(true);

    return (
        <>
            {page ? (
                <WelcomePage page={page} setPage={setPage} />
            ) : (
                <FlashcardsPage />
            )}            
        </>
    );
}