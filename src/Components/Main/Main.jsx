import "./MainStyle.scss";
import coraline from "/src/assets/img/coraline.jpg";
import labirintofauno from "/src/assets/img/labirintofauno.jpg"; 
import scoobydoo from "/src/assets/img/scoobydoo.jpg";
import viuvanegra from "/src/assets/img/viuvanegra.jpg";
import alice from "/src/assets/img/Alice.jpg";
import menina from "/src/assets/img/menina.jpg";

export default function Main() {
    return (
        <main>
            <h1>Vai na Flix</h1>
            <section>
                <figure>
                    <img src={coraline} alt="Coraline" />
                    <img src={labirintofauno} alt="O Labirinto do Fauno" />
                    <img src={scoobydoo} alt="Scooby-Doo" />
                    <img src= {viuvanegra} alt="Viúva Negra" />
                    <img src={alice} alt="Alice no País das Maravilhas" />
                    <img src= {menina} alt="A menina que roubava livros" />
                    
                </figure>
            </section>
        </main>
    );
}


