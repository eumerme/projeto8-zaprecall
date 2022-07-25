import logo from "./assets/images/logo.png";

export default function WelcomePage({ startPage, setStartPage }) {

    return (
        <div className="welcome-page center">
            <img src={logo} alt="logo" />
            <h1>ZapRecall</h1>
            <div className="start-game center" onClick={() => setStartPage(!startPage)}>Iniciar Recall!</div>
        </div>
    );
}