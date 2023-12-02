import { useState } from "react";
import Button from "../Button/Index";
import Input from "../Input";
import Select from "../Select/Index";
import "./Form.css";

function Form() {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [image, setImage] = useState("");
  const [option, setOption] = useState("");

  const formOptions = [
    "Programação",
    "Front-End",
    "Data Science",
    "Devops",
    "Ux e Design",
    "Mobile",
    "Inovação e Gestão",
  ];

  const formSubmit = (event) => {
    event.preventDefault();
    console.log(`Formulário submetido!`);
    console.log(`Nome: ${name}`);
    console.log(`Cargo: ${position}`);
    console.log(`Imagen: ${image}`);
    console.log(`Opção: ${option}`);
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
            <Input
              label="Nome"
              placeholder="Digite seu nome"
              required
              updateValue={(e) => setName(e)}
              value={name}
            />
            <Input
              label="Cargo"
              placeholder="Digite seu Cargo"
              required
              updateValue={(e) => setPosition(e)}
              value={position}
            />
            <Input
              label="Imagem"
              placeholder="Informe o endereço da imagem"
              updateValue={(e) => setImage(e)}
              value={image}
            />
            <Select
              label="Time"
              options={formOptions}
              required
              updateValue={(e) => setOption(e)}
              value={option}
            />
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
