import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";

const params = new URLSearchParams(window.location.search);
const redirectPath = params.get("p");

if (redirectPath) {
	const redirectQuery = params.get("q") || "";
	const redirectHash = params.get("h") || "";
	window.history.replaceState(null, "", `${redirectPath}${redirectQuery}${redirectHash}`);
}

ReactDOM.createRoot(document.getElementById("root")).render(<React.StrictMode><App/></React.StrictMode>);
