import React, { useState, useEffect } from "react";
import "./Card.css";
import TextInput from "../presentation/TextInput";
import { axiosInstance } from "../../api";

const Card = (props) => {
  const message = "You have added no items yet!";

  const { title } = props;

  const [item, setItem] = useState("");

  const [list, setList] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  async function fetchItems() {
    const getItems = await axiosInstance.get("items/getItems");
    if (getItems.statusText === "OK") {
      const response = await getItems.data;
      setList(response);
    } else {
      return document.write(`${getItems.status} : ${getItems.statusText}`);
    }
  }

  const handleInputChange = (event) => {
    setItem(event.target.value);
  };

  const handleClick = async (event) => {
    event.preventDefault();
    const postedItem = await axiosInstance.post(`items/postItems`, {
      itemName: item,
      userName: localStorage.getItem("userName"),
    });
    setList(list.concat(postedItem.data));
    setItem("");
  };

  const handleDeleteClick = async (id) => {
    if (window.confirm("Are you sure about deleting this item?")) {
      await axiosInstance
        .delete(`items/deleteItems/${id}`)
        .then(() => fetchItems());
    }
    return fetchItems();
  };

  return (
    <div className="cardStyle">
      <div className="card">
        <div className="card-header">{title}</div>

        {list.map((data) => {
          const { _id, itemName } = data;
          return (
            <ul key={_id} className="list-group list-group-flush">
              <li className="list-group-item">
                {itemName}
                <span className="trash">
                  <i
                    onClick={() => handleDeleteClick(_id)}
                    className="fas fa-trash-alt"
                  ></i>
                </span>
              </li>
            </ul>
          );
        })}

        {!list.length ? <p style={{ marginLeft: "35px" }}>{message}</p> : null}
        <div className="card-header">
          <TextInput
            onChange={handleInputChange}
            onClick={handleClick}
            item={item}
          ></TextInput>
        </div>
      </div>
    </div>
  );
};

export default Card;
