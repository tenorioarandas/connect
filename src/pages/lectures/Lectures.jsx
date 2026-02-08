import S from "./lectures.module.scss";
import palestra from "../../assets/images/lectures1.jpg";
import workshop from "../../assets/images/lectures2.jpg";
import entrevista from "../../assets/images/lectures3.png";

export default function Doacao() {
  return (
    <main className={S.main}>
      <h1>Eventos & Palestras</h1>
      <section className={S.lectures}>
        <article className={S.border}>
          <div className={S.container}>
            <img
              src={palestra}
              alt="Pessoa segurando caixa de papelão com alimentos variados para doação."
            />
            <h2>Empoderando jovens para o futuro</h2>
            <p>
              Atividade: Palestra motivacional sobre liderança jovem e
              transformação social.
            </p>
            <p>
              Impacto: Inspirar adolescentes a se tornarem agentes de mudança em
              suas comunidades.
            </p>
            <button>Quero participar</button>
          </div>
        </article>

        <article className={S.border}>
          <div className={S.container}>
            <img
              src={workshop}
              alt="Livro vermelho em destaque sobre mesa de madeira com estante ao fundo."
            />
            <h2>Tecnologia que transforma</h2>
            <p>
              Atividade: Workshop de introdução à programação e inovação
              digital.
            </p>
            <p>
              Impacto: Preparar jovens para o mercado de trabalho através da
              tecnologia.
            </p>
            <button>Quero participar</button>
          </div>
        </article>

        <article>
          <div className={S.container}>
            <img
              src={entrevista}
              alt="Duas pessoas realizando manutenção em gabinetes de computador abertos."
            />
            <h2>Carreira e Primeiro Emprego</h2>
            <p>
              Atividade: Palestra com profissionais de RH sobre como preparar
              currículo, entrevistas e postura no mercado.
            </p>
            <p>
              Impacto: Ajudar jovens a conquistar oportunidades de trabalho.
            </p>
            <button>Quero participar</button>
          </div>
        </article>
      </section>
    </main>
  );
}
