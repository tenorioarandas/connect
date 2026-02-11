import S from "./home.module.scss";
import banner from "../../assets/images/banner.png";

export default function PaginaInicial() {
  return (
    <>
      <main className={S.main}>
        <section className={S.info}>
          <h1>Projetos Sociais que transformam</h1>
          <p>
            Conectamos sua empresa com projetos sociais impactantes. Juntos,
            criamos mudanças reais na comunidade.
          </p>
          <button>Cadastrar Empresa ➔</button>
          <section className={S.infoDados}>
            <article>
              <h2>500+</h2>
              <h3>Empresas Voluntárias</h3>
            </article>
            <article>
              <h2>1.2K+</h2>
              <h3>Projetos Realizados</h3>
            </article>
            <article>
              <h2>50K+</h2>
              <h3>Vidas Impactadas</h3>
            </article>
          </section>
        </section>
        <img
          className={S.img}
          src={banner}
          alt="Imagem de mãos segurando o globo terrestre representando a responsibilidade social e ambiental"
        />
      </main>
    </>
  );
}
