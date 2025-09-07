import { useState } from "react";

const HelloWorld = (props) => {
  const [mensajeNuevo, setmensajeNuevo] = useState("");

  const hacerClick = () => {
    setmensajeNuevo("(from changed state)");
  };

  return (
    <div>
      <p>Hello {props.name}! {mensajeNuevo}</p>
      <button className="btn btn-primary" onClick={hacerClick}> CLICK </button>
    </div>
  );
};

export default HelloWorld;
