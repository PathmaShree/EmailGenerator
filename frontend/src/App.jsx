import "./App.css";
import { useState } from "react";
import EmailForm from "./components/EmailForm";
import EmailOutput from "./components/EmailOutput";

function App() {

  const [email, setEmail] = useState("");

  return (
    <div className="app">

      <h1 className="title">
        AI Professor Email Generator
      </h1>

      <EmailForm setEmail={setEmail} />

      <EmailOutput email={email} />

    </div>
  );
}

export default App;