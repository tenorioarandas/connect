import S from "./donations.module.scss";
import alimentos from "../../assets/images/donations1.jpg";
import livros from "../../assets/images/donations2.jpg";
import computadores from "../../assets/images/donations3.jpg";

export default function Doacao() {
  return (
    <main className={S.main}>
      <h1>Doação</h1>
      <section className={S.donations}>
        <article className={S.border}>
          <div className={S.container}>
            <img
              src={alimentos}
              alt="Pessoa segurando caixa de papelão com alimentos variados para doação."
            />
            <h2>Instituto grande familia</h2>
            <p>
              Contribua com alimentos não perecíveis e ajude famílias em
              situação de vulnerabilidade.
            </p>
            <button>Quero doar</button>
          </div>
        </article>

        <article className={S.border}>
          <div className={S.container}>
            <img
              src={livros}
              alt="Livro vermelho em destaque sobre mesa de madeira com estante ao fundo."
            />
            <h2>Projeto futuro na escola</h2>
            <p>
              Doe livros, cadernos, lápis, mochilas e canetas para ajudar jovens
              a continuarem seus estudos com mais estrutura.
            </p>
            <button>Quero doar</button>
          </div>
        </article>

        <article>
          <div className={S.container}>
            <img
              src={computadores}
              alt="Duas pessoas realizando manutenção em gabinetes de computador abertos."
            />
            <h2>Instituto Conecta Jovem</h2>
            <p>
              Doe computadores usados, tablets ou celulares em bom estado para
              permitir que jovens tenham acesso ao mundo digital e novas
              oportunidades.
            </p>
            <button>Quero doar</button>
          </div>
        </article>
      </section>
    </main>
  );
}
