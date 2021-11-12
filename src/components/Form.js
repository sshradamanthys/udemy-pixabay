import { useState } from "react";
import Error from "./Error";

const Form = ({ setSearch }) => {
  const [state, setState] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.trim() === "") {
      setError(true);
    }
    setError(false);
    setSearch(state);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row w-50">
        <div className="col-md-8">
          <input
            type="text"
            className="form-control"
            placeholder="Busca una imagen"
            onChange={(e) => setState(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <input type="submit" className="btn btn-info" value="Buscar" />
        </div>
      </div>
      {error ? <Error msg="Agrega un término de búsqueda" /> : null}
    </form>
  );
};

export default Form;
