import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "../style.css";
import { useDispatch } from "react-redux";
import { addCart } from "../Redux/Action/Action";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

function Home() {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("inside use effect...");
    const fetchData = async () => {
      try {
        console.log("calling fetch API...");
        const { data: response } = await axios.get(
          "https://fakestoreapi.com/products?limit=n"
        );
        setData(response);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="heading">
        <center>
          <h1>Store</h1>
        </center>
      </div>
      <div>
        {data.map((item) => (
          <div key={item.id}>
            <div className="item">
              <img className="image" src={item.image} alt={item.id} />
              <div className="item_detail">
                <div className="inner">Title: {item.title}</div>
                <div className="inner">Price: ${item.price}</div>
                <div className="inner">Description: {item.description}</div>
                <div className="inner">Category: {item.category}</div>
              </div>
              <div>
                <AddShoppingCartIcon
                  onClick={() => dispatch(addCart(item))}
                  fontSize="large"
                  style={{ cursor: "pointer", marginTop: "80px" }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
