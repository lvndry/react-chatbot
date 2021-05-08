import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { Contact } from "../models";

import { setCurrentContact } from "../store/actions";

export const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = () => {
    const currentUser = new Contact({
      id: "0",
      name: username,
      avatar:
        "https://cdn.dribbble.com/users/722835/screenshots/4082720/bot_icon.gif",
    });

    dispatch(setCurrentContact(currentUser));

    history.push("/");
  };

  return (
    <div>
      <input
        name="username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
};
