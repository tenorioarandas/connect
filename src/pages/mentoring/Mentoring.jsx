import S from "./mentoring.module.scss";
import mentoria from "../../assets/images/mentoring1.jpg";
import compartilhar from "../../assets/images/mentoring2.png";
import acompanhamento from "../../assets/images/mentoring3.png";

export default function Doacao() {
  return (
    <main className={S.main}>
      <h1>Mentoria</h1>
      <section className={S.mentoring}>
        <article className={S.border}>
          <div className={S.container}>
            <img
              src={mentoria}
              alt="Pessoa segurando caixa de papelão com alimentos variados para doação."
            />
            <h2>Mentoria de carreira e emprego</h2>
            <p>
              Orientação sobre currículo, entrevistas e primeiros passos no
              mercado de trabalho.
            </p>
            <button>Quero participar</button>
          </div>
        </article>

        <article className={S.border}>
          <div className={S.container}>
            <img
              src={compartilhar}
              alt="Livro vermelho em destaque sobre mesa de madeira com estante ao fundo."
            />
            <h2>Compartilhe experiência</h2>
            <p>Oriente jovens e profissionais iniciantes em sua área.</p>
            <button>Quero participar</button>
          </div>
        </article>

        <article>
          <div className={S.container}>
            <img
              src={acompanhamento}
              alt="Duas pessoas realizando manutenção em gabinetes de computador abertos."
            />
            <h2>Acompanhamento</h2>
            <p>
              Participe como guia em jornadas de aprendizado e desenvolvimento.
            </p>
            <button>Quero participar</button>
          </div>
        </article>
      </section>
    </main>
  );
}
