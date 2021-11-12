import { useState, useEffect } from "react";
import Form from "./components/Form";
import Images from "./components/Images";

function App() {
  const [search, setSearch] = useState("");
  const [images, setImages] = useState([]);
  // pagination
  const [actual, setActual] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (search === "") return;
    const fetchAPI = async () => {
      const pages = 30;
      const key = "24299186-4b265e95fd50726ef2a95bccd";
      const url = `https://pixabay.com/api/?key=${key}&q=${search}&per_page=${pages}&page=${actual}`;
      const res = await fetch(url);
      const json = await res.json();
      const hits = json.hits;

      const totalHits = json.totalHits;
      setImages(hits);

      // calculating total
      const pagesTotal = Math.ceil(totalHits / pages);
      setTotal(pagesTotal);

      // scroll to top (jumbotron)
      const jumbotron = document.querySelector(".jumbotron");
      jumbotron.scrollIntoView({ behavior: "smooth" });
    };

    fetchAPI();
  }, [search, actual]);

  const previousPage = () => {
    let newActual = actual - 1;
    if (newActual === 0) return;
    setActual(newActual);
  };

  const nextPage = () => {
    let newActual = actual + 1;
    if (newActual > total) return;
    setActual(newActual);
  };

  return (
    <div className="container">
      <div className="jumbotron mt-5">
        <p className="lead text-center">Buscador de Imágenes</p>
        <Form setSearch={setSearch} />
      </div>
      {images.length !== 0 && (
        <div className="d-flex justify-content-center">
          <Images images={images} />
        </div>
      )}

      {images.length !== 0 && (
        <div className="d-flex justify-content-around mb-5">
          {actual === 1 ? null : (
            <button
              type="button"
              className="btn btn-info"
              onClick={previousPage}
            >
              &laquo; Anterior{" "}
            </button>
          )}

          {actual === total ? null : (
            <button type="button" className="btn btn-info" onClick={nextPage}>
              Siguiente &raquo;
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
