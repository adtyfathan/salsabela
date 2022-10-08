import Homepage from "./components/Homepage";
import Items from "./components/Items";
import Confess from "./components/Confess";
import Answer from "./components/Answer";
import Break from "./components/Break";
import { useState } from "react"

function App() {
  const [accepted, setAccepted] = useState(false)
  if (accepted) return <Answer />
  return (
    <>
      <Homepage />
      <Break text="OUR STORIES"/>
      <Items />
      <Confess setAccepted={setAccepted}/>
    </>
  );
}

export default App;
