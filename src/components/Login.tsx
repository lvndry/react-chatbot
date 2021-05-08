import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "@emotion/styled";
import { Button as AntdButton } from "antd";

import { Contact } from "../models";

import { setCurrentContact } from "../store/actions";

export const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    if (username !== "") {
      const currentUser = new Contact({
        id: "0",
        name: username,
        avatar:
          "https://cdn.dribbble.com/users/722835/screenshots/4082720/bot_icon.gif",
      });

      dispatch(setCurrentContact(currentUser));

      history.push("/");
    }
  };

  return (
    <LoginPage>
      <Input
        name="username"
        value={username}
        placeholder="username"
        onChange={(event) => setUsername(event.target.value)}
        onKeyPress={handleKeyPress}
      />
      <Button size="large" onClick={handleSubmit} type="ghost" shape="circle">
        &#8250;
      </Button>
    </LoginPage>
  );
};

const Button = styled(AntdButton)`
  margin-left: 8px;
  height: auto;
  font-size: x-large;
  font-weight: 600;
  padding-left: 20px;
  padding-right: 20px;
`;

const LoginPage = styled.div`
  text-align: center;
  padding-top: 30em;
`;

const Input = styled.input`
  border-radius: 8px;
  padding: 0.5em;
  box-sizing: border-box;
  font-size: larger;

  &:hover,
  &:focus {
    outline: none;
    box-shadow: 0 0 2pt 1pt #0077b6;
    border: 1px solid #0077b6;
  }
`;
