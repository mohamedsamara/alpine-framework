import { h } from "tsx-dom";
import Alpine from "alpinejs";

import App from "./components/App";

Alpine.start();

import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app")!;

app.appendChild(<App />);
