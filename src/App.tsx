import "./App.css";
import SubmitForm from "./SubmitForm";
import Time from "./time";
import { Weather } from "./weather";

function App() {
    return (
        <>
            <div className="app-body">
                <h1>Vizer</h1>
                <Weather />
                <SubmitForm />
                <Time />
            </div>
        </>
    );
}

export default App;
