import S from "./header.module.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo.png";
import { useEffect, useState } from "react";

const Header = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    function menuMobile() {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setMenuAberto(false);
      }
    }
    window.addEventListener("resize", menuMobile);
    return () => window.removeEventListener("resize", menuMobile);
  }, []);

  return (
    <>
      <header className={S.header}>
        <Link to={"/"}>
          <img
            className={S.imgLogo}
            src={logo}
            alt="Imagem de logo do projeto connect sendo representada por uma mão segurando um coração, simbolizando apoio"
          />
        </Link>
        <nav className={S.nav}>
          <Link to={"/donations"} className={S.Link}>
            Doação
          </Link>
          <Link to={"/volunteering"} className={S.Link}>
            Voluntariado
          </Link>
          <Link to={"/mentoring"} className={S.Link}>
            Mentoria
          </Link>
          <Link to={"/lectures"} className={S.Link}>
            Eventos
          </Link>
        </nav>

        <img
          className={S.imgUser}
          src="https://avatars.githubusercontent.com/u/121516748?v=4"
          alt="Imagem do usuário"
          onClick={() => setMenuAberto(!menuAberto)}
        />
      </header>
      <nav className={menuAberto ? S.navUser : S.closedNavUser}>
        <Link to="/user">Gabriel Tenório</Link>
        <Link>Meu voluntariado</Link>
        <Link>Configurações</Link>
        {isMobile && (
          <div>
            <Link to={"/donations"} onClick={() => setMenuAberto(false)}>
              Doação
            </Link>
            <Link to={"/volunteering"} onClick={() => setMenuAberto(false)}>
              Voluntariado
            </Link>
            <Link to={"/mentoring"} onClick={() => setMenuAberto(false)}>
              Mentoria
            </Link>
            <Link to={"/lectures"} onClick={() => setMenuAberto(false)}>
              Eventos
            </Link>
          </div>
        )}
        <Link onClick={() => setMenuAberto(false)}>Sair</Link>
      </nav>
    </>
  );
};

export default Header;
