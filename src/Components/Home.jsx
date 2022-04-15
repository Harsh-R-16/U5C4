import React from "react";
import "./style.css";
import { useSelector } from "react-redux";
export default function Home() {
  let token = useSelector((state) => state.token);
  //   console.log("token: " + token);
  let [data, setData] = React.useState([
    "Harsh Gajera",
    "harsh.gajera17@gmail.com",
    "harsh163",
    7046581170,
    "Learning Web Development",
  ]);
  React.useEffect(() => {
    fetch(
      `https://masai-api-mocker.herokuapp.com/user/${localStorage.getItem(
        "username"
      )}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.message && res.message.includes("Invalid")) {
          setData([
            "Harsh Gajera",
            "harsh.gajera17@gmail.com",
            "harsh163",
            7046581170,
            "Learning Web Development",
          ]);
          return;
        }
        setData([
          res.name,
          res.email,
          res.username,
          res.mobile,
          res.description,
        ]);
      });
  }, []);

  return (
    <div id="homepage">
      <h1>Home Page</h1>
      <p>
        <span>Name: </span>
        {data[0]}
      </p>
      <p>
        <span>Email: </span>
        {data[1]}
      </p>
      <p>
        <span>Username: </span>
        {data[2]}
      </p>
      <p>
        <span>Mobile: </span>
        {data[3]}
      </p>
      <p>
        <span>Description: </span>
        {data[4]}
      </p>
    </div>
  );
}
