//import { useState } from "react";
import { useState } from "react";
import PersonDetails, {
  PersonDetailsData,
} from "./components/person-details/PersonDetails";
import styles from "./Cvca.module.css";

function Cvca() {
  // const [count, setCount] = useState(0);
  const [buyer, setBuyer] = useState<PersonDetailsData>({
    nume: "",
    cnp: null,
  });
  const [seller, setSeller] = useState<PersonDetailsData>({
    nume: "",
    cnp: null,
  });

  return (
    //fragment react <>
    <div className={styles.main}>
      <PersonDetails
        title="1.Persoana care instrainează (vanzatorul)"
        defaultState={seller}
        setData={setSeller}
      />
      <PersonDetails
        title="2.Persoana care dobandeste (cumparatorul)"
        defaultState={buyer}
        setData={setBuyer}
      />
    </div>
  );
}

export default Cvca;
