import Main from "./components/Main";
import CreateNote from "./components/CreateNote";
import NoteContainer from "./components/NoteContainer";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <Main>
      <Navbar />
      <CreateNote />
      <NoteContainer />
      <ToastContainer />
    </Main>
  );
}

export default App;
