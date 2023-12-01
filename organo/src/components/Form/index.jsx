import Input from "../Input";
import "./Form.css";

function Form() {
  return (
    <>
      <section className="container my-4 py-5">
        <form className="form">
          <fieldset className="d-flex flex-column gap-4">
            <Input label="Nome" placeholder="Digite seu nome" />
            <Input label="Cargo" placeholder="Digite seu Cargo" />
            <Input label="Imagem" placeholder="Informe o endereço da imagem" />
          </fieldset>
        </form>
      </section>
    </>
  );
}
export default Form;
