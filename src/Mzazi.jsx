import { createContext, useState } from "react";
import Mtoto from "./Mtoto";

export const userContext = createContext();

function Mzazi() {
  const [username, setUserName] = useState("Obala Sax");
  return (
    <div className="mzazi">
      <h1>Mzazi</h1>
      <h3>{`Sema ${username}`}</h3>
      <userContext.Provider value={username}>
        <Mtoto />
      </userContext.Provider>
    </div>
  );
}

export default Mzazi;
