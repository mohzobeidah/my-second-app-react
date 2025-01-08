import React from "react";
import "./user.css";
export default class User extends React.Component {
  constructor() {
    super();

    this.state = {
      isAuth: false,
      users: [
        { NAME: "John", AGE: 25, isAdmin: true },
        { NAME: "Jane", AGE: 24, isAdmin: true },
        { NAME: "Jim", AGE: 26, isAdmin: false },
      ],
    };
  }

  render() {
    return (
      <>
        <ul>
          {this.isAuth && this.state.users.map((user, index) => {
            if (user.isAdmin)
              return (
                <li className="bk-red" key={index}>
                  {user.NAME} is {user.AGE} years old.{" "}
                  {user.isAdmin ? "Admin" : "Not Admin"}
                </li>
              );
          })}
        </ul>
      </>
    );
  }
}
