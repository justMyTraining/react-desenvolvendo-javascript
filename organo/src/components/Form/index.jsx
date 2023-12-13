import { useState } from "react";
import Button from "../Button/Index";
import Input from "../Input";
import Select from "../Select/Index";
import "./Form.css";

function Form(props) {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [image, setImage] = useState("");
  const [team, setTeam] = useState("");

  const formSubmit = (event) => {
    event.preventDefault();
    props.addNewCollaborator({ name, position, image, team });
    setName("");
    setPosition("");
    setImage("");
    setTeam("");
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
              teams={props.teams}
              required
              updateValue={(e) => setTeam(e)}
              value={team}
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
