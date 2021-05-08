import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "@emotion/styled";
import { Button as AntdButton } from "antd";

import { Contact } from "../models";

import { setCurrentContact } from "../store/actions";
import { colors } from "../utils/colors";

export const Login: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const app = document.getElementById("app");
  app.classList.add("login-app");

  useEffect(() => {
    if (error !== "") {
      setError("");
    }
  }, [username]);

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    if (username === "") {
      setError("Username can't be empty");
    } else {
      const currentUser = new Contact({
        id: "0",
        name: username,
        color: colors[0],
        avatar:
          "https://cdn.dribbble.com/users/722835/screenshots/4082720/bot_icon.gif",
      });

      dispatch(setCurrentContact(currentUser));
      sessionStorage.setItem("currentContact", JSON.stringify(currentUser));
      app.classList.remove("login-app");
      setUsername("");
      history.push("/");
    }
  };

  return (
    <LoginPage className="login">
      <Input
        autoFocus
        name="username"
        value={username}
        placeholder="username"
        onChange={(event) => setUsername(event.target.value)}
        onKeyPress={handleKeyPress}
      />
      <Button size="large" onClick={handleSubmit} type="ghost" shape="circle">
        &#8250;
      </Button>
      <ErrorContainer>{error && <Error>{error}</Error>}</ErrorContainer>
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

const ErrorContainer = styled.div`
  font-size: 1em;
`;

const Error = styled.span`
  color: red;
`;
