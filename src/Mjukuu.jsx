import { useContext } from "react";
import { userContext } from "./Mzazi";
function Mjukuu() {
  const user = useContext(userContext);
  return (
    <div className="mjukuu">
      <h1>Noma {user}</h1>
    </div>
  );
}

export default Mjukuu;
