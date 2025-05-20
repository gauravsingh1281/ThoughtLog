import { useState } from "react";
import Main from "./components/Main";
function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return <Main />;
}

export default App;
