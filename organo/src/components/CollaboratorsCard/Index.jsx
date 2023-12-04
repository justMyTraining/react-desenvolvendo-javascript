import "./CollaboratorsCard.css";

function CollaboratorsCard(props) {
  return (
    <>
      {props.name ? (
        <li className="CollaboratorsCard">
          <div className="text-center mb-3">
            <img src={props.image} alt={props.name} />
          </div>
          <div>
            <h6 className="">{props.name}</h6>
            <p className="m-0">{props.description}</p>
          </div>
        </li>
      ) : null}
    </>
  );
}

export default CollaboratorsCard;
