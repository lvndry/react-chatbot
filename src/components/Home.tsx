import React from "react";

import { Chat } from "./Chat";
import { ContactList } from "./ContactList";

const Home = () => {
  return (
    <div>
      <Chat />
      <ContactList />
    </div>
  );
};

export default Home;
