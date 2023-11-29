import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchProducts = async () => {
      fetch("http://127.0.0.1:8080/api/products", { method: "GET" })
        .then(async (data) => {
          let response = await data.json();
          console.log(response);
          setProducts(response);
        })
        .catch((e) => {
          console.log(e);
        });
    };
    fetchProducts();
  }, []);
  // console.log(products);
  return (
    <div className="App">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr" }}>
        {products.map((product) => {
          return (
            <div
              style={{ margin: "20px", border: "1px solid" }}
              className="singleProduct"
            >
              <h3>{product.name}</h3>
              <img
                src={product.imageUrl}
                alt=""
                style={{ height: "300px", width: "100%" }}
              />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h4>Price {product.amount + " " + product.currency}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
