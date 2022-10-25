import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface IUser {
  id: string;
  name: string;
}

function List() {
  const [stateListUser, setStateListUser] = useState<Array<IUser>>([]);
  const navi = useNavigate();
  useEffect(() => {
    getListUserApi();
  }, []);
  const getListUserApi = () => {
    const url = "https://6352910da9f3f34c3741b610.mockapi.io/users";
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        setStateListUser(json);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleDelete = (id: string | undefined) => {
    const url = "https://6352910da9f3f34c3741b610.mockapi.io/users/" + id;
    fetch(url, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        getListUserApi();
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const gotoDetail = (id: string) => {
    navi ("detail/" + id);
  };
  return (
    <table className="table">
      <thead className="table-light">
        <tr>
          <th scope="col">STT</th>
          <th scope="col">Name</th>
          <th scope="col">Khác</th>
        </tr>
      </thead>
      <tbody>
        {stateListUser?.map((user: IUser) => (
          <tr key={`item-user-${user.id}`}>
            <th scope="row">{user.id}</th>
            <td>{user.name}</td>
            <td>
              <button
                onClick={() => gotoDetail(user?.id)}
                className="m-1 btn btn-success"
              >
                Detail
              </button>
              <button
                onClick={() => handleDelete(user?.id)}
                className="m-1 btn btn-warning"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default List;
