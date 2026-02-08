import S from "./volunteering.module.scss";
import reciclagem from "../../assets/images/volunteering1.png";
import tecnologia from "../../assets/images/volunteering2.jpg";
import esporte from "../../assets/images/volunteering3.jpg";

export default function Doacao() {
  return (
    <main className={S.main}>
      <h1>Voluntariado</h1>
      <section className={S.volunteering}>
        <article className={S.border}>
          <div className={S.container}>
            <img
              src={reciclagem}
              alt="Pessoa segurando caixa de papelão com alimentos variados para doação."
            />
            <h2>Mutirão de reciclagem</h2>
            <p>
              Coletar materiais recicláveis e orientar sobre descarte
              consciente.
            </p>
            <button>Quero participar</button>
          </div>
        </article>

        <article className={S.border}>
          <div className={S.container}>
            <img
              src={tecnologia}
              alt="Livro vermelho em destaque sobre mesa de madeira com estante ao fundo."
            />
            <h2>Aulas de tecnologia</h2>
            <p>
              Ensinar noções básicas de informática, internet segura e
              programação. Preparar jovens para o mercado de trabalho digital.
            </p>
            <button>Quero participar</button>
          </div>
        </article>

        <article>
          <div className={S.container}>
            <img
              src={esporte}
              alt="Duas pessoas realizando manutenção em gabinetes de computador abertos."
            />
            <h2>Esporte e inclusão</h2>
            <p>
              Organizar treinos e jogos que incentivem a participação de todos.
              Promover disciplina, saúde e trabalho em equipe entre jovens.
            </p>
            <button>Quero participar</button>
          </div>
        </article>
      </section>
    </main>
  );
}
