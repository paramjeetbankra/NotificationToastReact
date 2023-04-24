import "./styles.css";
import useNotification from "./useNotification";
import Button from "./components/Button";
import Toast from "./components/Toast";

export default function App() {
  const { showNotification, deleteToast, list, setPause } = useNotification();

  return (
    <div className="App">
      <div className="container">
        <Button handleClick={() => showNotification("success")}>Success</Button>
        <Button handleClick={() => showNotification("danger")}>Danger</Button>
        <Button handleClick={() => showNotification("info")}>Info</Button>
        <Button handleClick={() => showNotification("warning")}>Warning</Button>
      </div>
      <Toast list={list} deleteToast={deleteToast} setPause={setPause} />
    </div>
  );
}
