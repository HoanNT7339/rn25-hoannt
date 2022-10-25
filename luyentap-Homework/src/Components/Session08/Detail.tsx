import React from "react";
import { useState } from "react";
import {useEffect} from 'react';
import { useParams } from 'react-router-dom';

interface IUser {
  id: string;
  name: string;
}

function DetailUser() {
  let params = useParams();
  const [stateUser, setStateUser] = useState<IUser>({
    name: "",
    id: "",
  });

  useEffect(()=>{
    getUserApi()
  })

  const getUserApi = () =>{
    const url = "https://6352910da9f3f34c3741b610.mockapi.io/users/" + params.id;
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setStateUser(json)
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div>
      <p>Name User: {stateUser.name}</p>
      <p>ID User : {stateUser.id}</p>
    </div>
  );
}

export default DetailUser;
