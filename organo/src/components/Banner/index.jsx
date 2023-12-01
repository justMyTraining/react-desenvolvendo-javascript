import "./banner.css";
const imageBanner = "/imagens/banner.png";

function Banner() {
  return (
    <>
      <section className="banner-container">
        <div className="container d-flex justify-content-center">
          <img className="w-100" src={imageBanner} alt="banner" />
        </div>
      </section>
    </>
  );
}
export default Banner;
