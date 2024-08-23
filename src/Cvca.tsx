//import { useState } from "react";
import { useEffect, useState } from "react";
import PersonDetails, {
  PersonDetailsData,
} from "./components/person-details/PersonDetails";
import styles from "./Cvca.module.css";

function Cvca() {
  // Seller state management
  const [seller, setSeller] = useState<PersonDetailsData>({
    numePrenume: "",
    tara: "Romania",
    cnp: null,
  });

  // Buyer state management
  const [buyer, setBuyer] = useState<PersonDetailsData>({
    numePrenume: "",
    tara: "Romania",
    cnp: null,
  });

  // Effects
  useEffect(() => {
    console.clear();
    console.log('Valori modificate - buyer:', buyer);
    console.log('Valori modificate - seller:', seller);
  }, [buyer, seller]);


  return (
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
