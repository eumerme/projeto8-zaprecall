export default function Bottom() {
    return (
        <div className="bottom center">
            {/*                 <div className="result">
                    <img src="./images/party.png" alt="logo" />
                    <h1>Parabéns!</h1>
                </div>
                <div className="message">Você não esqueceu de nenhum flashcard!</div>
                
                <div className="result">
                    <img src="./images/sad.png" alt="logo" />
                    <h1>Putz...</h1>
                </div>
                
                <div className="message">Ainda faltam alguns... Mas não desanime!</div> */}
            <p>0/4 CONCLUÍDOS</p>
            <div className="icons">
                <ion-icon name="close-circle"></ion-icon>
                <ion-icon name="help-circle"></ion-icon>
                <ion-icon name="checkmark-circle"></ion-icon>
            </div>
        </div>
    );
}