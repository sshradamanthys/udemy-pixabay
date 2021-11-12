import { useState, useEffect } from "react";
import Form from "./components/Form";
import Images from "./components/Images";

function App() {
  const [search, setSearch] = useState("");
  const [images, setImages] = useState([]);
  console.log(images);

  useEffect(() => {
    if (search === "") return;
    const fetchAPI = async () => {
      const pages = 30;
      const key = "24299186-4b265e95fd50726ef2a95bccd";
      const url = `https://pixabay.com/api/?key=${key}&q=${search}&per_page=${pages}`;
      const res = await fetch(url);
      const json = await res.json();
      const hits = json.hits;
      setImages(hits);
    };

    fetchAPI();
  }, [search]);
  return (
    <div className="container">
      <div className="jumbotron mt-5">
        <p className="lead text-center">Buscador de Imágenes</p>
        <Form setSearch={setSearch} />
      </div>
      <div className="row justify-content-center">
        <Images images={images} />
      </div>
    </div>
  );
}

export default App;
