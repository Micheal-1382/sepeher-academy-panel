import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { AppProvider } from "./contexts/app/app-context.jsx";
import "../index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppProvider>
    <App />
  </AppProvider>
);
