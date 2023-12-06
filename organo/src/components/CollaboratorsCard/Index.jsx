import "./CollaboratorsCard.css";

function CollaboratorsCard(props) {
  return (
    <>
      <li
        className="CollaboratorsCard"
        key={props.name}
        style={{
          backgroundImage: `linear-gradient(${props.colorSecondary} 30%, white 30%)`,
        }}
      >
        <div className="text-center mb-3">
          <img
            className="w-100 rounded-circle px-5"
            src={props.image}
            alt={props.name}
          />
        </div>
        <div>
          <h6 className="">{props.name}</h6>
          <p className="m-0">{props.position}</p>
        </div>
      </li>
    </>
  );
}

export default CollaboratorsCard;
