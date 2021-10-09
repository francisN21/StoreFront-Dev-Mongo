import "./App.css";
import { REACT_API_URL } from "./.env.js";
import AuthForm from "./LoginPage/AuthForm";
function App() {
  console.log(REACT_API_URL);
  console.log(process.env.REACT_API_URL);
  console.log(process.env.REACT_API_URL123);
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <AuthForm />
        </div>
      </header>
    </div>
  );
}

export default App;
