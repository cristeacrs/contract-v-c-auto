/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input, Typography, Select } from "antd";
import { z } from "zod";
import { SELECT_OPTIONS } from "../../constants";
import styles from "./styles.module.css";
import { useState } from "react";

export interface PersonDetailsData {
  numePrenume: string;
  tara: string;
  cnp?: number | null;
}

export interface ValidationErrors { 
  numePrenume?: string;
  tara?: string;
}

interface PropsPersonDetails {
  title: string;
  setData: (values: PersonDetailsData) => void;
  defaultState: PersonDetailsData;
}

// Schema defined to validate against our data
const validationMap: any = {
  numePrenume: z.string()
    .refine(
      (value) => /^[a-zA-Z ]{2,70}$/.test(value ?? ""),
      'Nume si prenume accepta doar litere si spatii, si trebuie sa fie intre 2 si 70 caractere'
    ),
  tara: z.string()
}

const PersonDetails = ({
  title,
  defaultState,
  setData,
}: PropsPersonDetails) => {
  const [validation, setValidation] = useState<ValidationErrors>({});

  const onTextChange = (name: string, value: string) => {
    // Grab the schema for parsing based on the name field
    const validateValue = validationMap[name].safeParse(value);

    // check if the validation has failed
    if (!validateValue.success) {
      const formatted = validateValue.error.format();

      if (formatted?._errors[0]) {
        setValidation({ ...validation, [name]: formatted?._errors[0] });
      }
    // If is valid proceed to save the state and to clear our validation records
    } else {
      setData({ ...defaultState, [name]: value });
      setValidation({ ...validation, [name]: "" });
    }
  };

  return (
    <section className={styles.personDetails}>
      <h2>{title}</h2>

      <div className={styles.formSectionPersonDetails}>
        {/** field numePrenume */}
        <Typography.Title level={5}>
          Nume/Prenume<div className={styles.required}>*</div>
        </Typography.Title>
        <Input
          onChange={(event) =>
            onTextChange("numePrenume", event.currentTarget.value)
          }
          showCount
          minLength={2}
          maxLength={70}
          status={validation.numePrenume ? "error" : undefined}
          placeholder="Introduceti numele si prenumele"
          defaultValue={defaultState.numePrenume}
        />
        {validation.numePrenume && (
          <div className={styles.fieldError}>{validation.numePrenume}</div>
        )}

        {/** field tara  */}
        <Typography.Title level={5}>
          Tara<div className={styles.required}>*</div>
        </Typography.Title>
        <Select
          status={validation.tara ? "error" : undefined}
          onChange={(countryValue) => onTextChange("tara", countryValue)}
          defaultValue="Romania"
          options={SELECT_OPTIONS}
        />
        {validation.tara && (
          <div className={styles.fieldError}>{validation.tara}</div>
        )}
      </div>
    </section>
  );
};

export default PersonDetails;
