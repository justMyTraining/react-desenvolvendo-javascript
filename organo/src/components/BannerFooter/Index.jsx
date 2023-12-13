import "./BannerFooter.css";

function BannerFooter() {
  return (
    <>
      <section className="BannerFooter d-flex align-items-center ">
        <div className="container d-flex gap-5 justify-content-between flex-wrap">
          <ul className="list-unstyled d-flex align-items-center gap-4 m-0">
            <li>
              <a href="/">
                <img src="./imagens/fb.png" alt="ícone do facebook" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src="./imagens/tw.png" alt="ícone do twitter" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src="./imagens/ig.png" alt="ícone do instagram" />
              </a>
            </li>
          </ul>
          <div>
            <img src="./imagens/logo.png" alt="logo da organo" />
          </div>
          <div className="d-flex align-items-center">
            <p>Desenvolvido por Alura</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default BannerFooter;
