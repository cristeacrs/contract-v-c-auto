//import { useState } from "react";
import PersonDetails from "./components/person-details/PersonDetails";
import styles from "./Cvca.module.css";

function Cvca() {
  // const [count, setCount] = useState(0);

  return (
    //fragment react <>
    <div className={styles.main}>
      <PersonDetails title="1.Persoana care instrainează (vanzatorul)" />
      <PersonDetails title="2.Persoana care dobandeste (cumparatorul)" />
    </div>
  );
}

export default Cvca;
