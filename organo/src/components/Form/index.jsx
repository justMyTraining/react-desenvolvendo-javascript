import Button from "../Button/Index";
import Input from "../Input";
import "./Form.css";

function Form() {
  const formSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    console.log("Form submetido meu nobre!");
  };

  return (
    <>
      <section className="container my-4 py-5">
        <form
          onSubmit={(e) => formSubmit(e)}
          className="form d-flex flex-column gap-5"
        >
          <fieldset className="">
            <h2>Preencha os dados para criar o card do colaborador.</h2>
          </fieldset>
          <fieldset className="d-flex flex-column gap-4">
            <Input label="Nome" placeholder="Digite seu nome" />
            <Input label="Cargo" placeholder="Digite seu Cargo" />
            <Input label="Imagem" placeholder="Informe o endereço da imagem" />
          </fieldset>
          <fieldset>
            <Button>Criar card</Button>
          </fieldset>
        </form>
      </section>
    </>
  );
}
export default Form;
