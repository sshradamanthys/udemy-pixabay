import { useState } from "react";
import Error from "./Error";

const Form = () => {
  const [state, setState] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.trim() === "") {
      setError(true);
    }
    setError(false);
    // setSearch(state);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="form-group col-md-9">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Busca una imagen"
            onChange={(e) => setState(e.target.value)}
          />
        </div>
        <div className="form-group col-md-3 mx-auto">
          <input type="submit" className="btn btn-info btn-lg" value="Buscar" />
        </div>
      </div>
      {error ? <Error msg="Agrega un término de búsqueda" /> : null}
    </form>
  );
};

export default Form;
