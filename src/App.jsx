import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Saved from "./Components/Saved";

function App() {
  const API_KEY = "NBwJqxuZ4CkcizwGp3CbSPpI4IkEWjpkrRu2QzIFJN92M6YTXzUUHv0A";
  // const API = "https://api.pexels.com/v1/search?query=nature&per_page=1";

  const [Images, setImages] = useState([]);
  const [search, setSearch] = useState("nature");
  const [loader, setLoader] = useState(true);
  const [saved, setSaved] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      const res = await axios.get(
        `https://api.pexels.com/v1/search?query=${search}&per_page=80`,
        {
          headers: {
            Authorization: API_KEY,
          },
        }
      );
      setImages(res.data.photos);
      setLoader(false);
      // console.log(res.data.photos )
    };

    const imageData = JSON.parse(localStorage.getItem("images"))
    if(imageData){
        setSaved(imageData)
    }

    getImages();
  }, [search]);

  useEffect(()=>{
    if(saved.length !=0){
        const data = JSON.stringify(saved)
        localStorage.setItem("images", data)
    }
  },[saved])

  //  console.log("saved images", saved)
  return (
    <>
      <Router>
        <Navbar setSearch={setSearch} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                Images={Images}
                loader={loader}
                saved={saved}
                setSaved={setSaved}
              />
            }
          />
          <Route path="/saved" element={<Saved saved={saved} loader={loader} />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
