import { createRoot } from "react-dom/client";
import Cvca from "./Cvca.tsx";
import "./index.css";

const CONTAINER_ID = "cvca";

const container = document.getElementById(CONTAINER_ID);
console.log(container);

if (container) {
  createRoot(container).render(<Cvca />);
} else {
  console.error("Elemenet with ID ", CONTAINER_ID, " doesn't exist!");
}
