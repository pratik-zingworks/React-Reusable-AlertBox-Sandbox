import { useState } from "react";
import AlertBox from "./components/AlertBox/AlertBox.Component";
import "./styles.css";

export default function App() {
  const [showAlert, setShowAlert] = useState(false);
  const [AlertMessage, setAlertMessage] = useState("");

  const [HandleAction, setHandleAction] = useState(null);

  const HandleAlert = () => setShowAlert((e) => !e);

  return (
    <div className="App">
      {showAlert && (
        <AlertBox MESSAGE={AlertMessage} YES={HandleAction} NO={HandleAlert} />
      )}
      <button
        onClick={() => {
          setHandleAction(() => () => {
            alert("Hi");
            HandleAlert();
          });
          setAlertMessage("this is hi message");
          HandleAlert();
        }}
      >
        Hi
      </button>
      <button
        onClick={() => {
          setHandleAction(() => () => {
            alert("hello");
            HandleAlert();
          });
          setAlertMessage("this is hello message");
          HandleAlert();
        }}
      >
        Hello
      </button>
      <button
        onClick={() => {
          setHandleAction(() => () => {
            alert("welcom");
            HandleAlert();
          });
          setAlertMessage("this is welcom message");
          HandleAlert();
        }}
      >
        Welcome
      </button>
    </div>
  );
}
