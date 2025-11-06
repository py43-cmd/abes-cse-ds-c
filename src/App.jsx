import { use, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    </>
  );
}
function Header() {
  return (
    <>
      <div
        className="header"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className="heading" style={{ width: "30px" }}>
          Amazon clone
        </div>
        <div>
          {/* <img src={reactLogo} className="logo react" alt="React logo" />
          <img src={viteLogo} className="logo vite" alt="Vite logo" /> */}
        </div>
      </div>
    </>
  );
}
function Body() {
  const [products, setProducts] = useState([]);
  //  useEffect(()=>{
  //   fetch("https://fakestoreapi.com/products").then(res=>res.json()).then(data=>setProducts(data)).catch(error=>console.log(error))
  //  },[]);

  return (
    <div className=" body">
      <Search />

      <div className=" product"></div>
    </div>
  );
}
function Search() {
  return (
    <>
      <div>
        <input type="text" placeholder="Search Product" />
        <button>Serach</button>
      </div>
    </>
  );
}
function Footer() {
  return(
     <>
      <div className="footer"> 2024 @ All rights reserved </div>
     </>
  );
}

export default App;
