import styles from "./styles.module.css";

interface PropsPersonDetails {
  title: string;
}

const PersonDetails = ({ title }: PropsPersonDetails) => {
  return (
    <div className={styles.personDetails}>
      <h2>{title}</h2>
      Placeholder title
    </div>
  );
};

export default PersonDetails;
