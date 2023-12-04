import "./CollaboratosContainer.css";

function CollaboratorsContainer(props) {
  return (
    <>
      <section className="CollaboratorsContainer pt-4 pb-5">
        <div className="container">
          <div className="pt-3 pb-4">
            <h2>Programação</h2>
          </div>
          {props.children ? (
            <ul className="list-unstyled">{props.children}</ul>
          ) : null}
        </div>
      </section>
    </>
  );
}
export default CollaboratorsContainer;
