export default function WelcomePage({page, setPage}) {
    
    return (
        <div className="welcome-page center">
            <img src="./images/logo.png" alt="logo" />
            <h1>ZapRecall</h1>
            <div className="start-game center" onClick={() => setPage(!page)}>Iniciar Reacall!</div>
        </div>
    );
}
