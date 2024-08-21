import styles from "./styles.module.css";

export interface PersonDetailsData {
  nume: string;
  cnp?: number | null;
}

interface PropsPersonDetails {
  title: string;
  setData: (values: PersonDetailsData) => void;
  defaultState: PersonDetailsData;
}

const PersonDetails = ({
  title,
  defaultState,
  setData,
}: PropsPersonDetails) => {
  console.log(defaultState, setData);
  return (
    <div className={styles.personDetails}>
      <h2>{title}</h2>
      Placeholder title
    </div>
  );
};

export default PersonDetails;
