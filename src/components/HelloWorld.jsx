import { useState } from "react";

const HelloWorld = ({ name }) => {
  const [mensajeNuevo, setMensajeNuevo] = useState("");

  const hacerClick = () => {
    setMensajeNuevo("(from changed state)");
    
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-lg border-primary rounded-4 overflow-hidden">
            <div className="card-header bg-primary text-white text-center py-3">
              <h2 className="mb-0">HelloWorld Component</h2>
            </div>
            
            <div className="card-body text-center p-4">
              <div className={`display-4 mb-4 text-primary `}>
                Hello {name}! 
                {mensajeNuevo && (
                  <span className="d-block fs-3 text-success mt-2">{mensajeNuevo}</span>
                )}
              </div>
              
              <button 
                className={`btn btn-lg ${mensajeNuevo ? 'btn-success' : 'btn-primary'} rounded-pill px-4 py-2`}
                onClick={hacerClick}
              >
                <i className="fas fa-hand-point-right me-2"></i>
                {mensajeNuevo ? "Message Updated!" : "Click Aqui!"}
              </button>
            </div>
            
            <div className="card-footer bg-light text-center py-3">
              <small className="text-muted">&copy; Seba Flomenbaun</small>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default HelloWorld;