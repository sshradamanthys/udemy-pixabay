const Form = () => {
  return (
    <form>
      <div className="row">
        <div className="form-group col-md-9">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Busca una imagen"
          />
        </div>
        <div className="form-group col-md-3 mx-auto">
          <input
            type="submit"
            className="btn btn-info btn-block"
            value="Buscar"
          />
        </div>
      </div>
    </form>
  );
};

export default Form;
