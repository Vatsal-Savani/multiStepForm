import React, { useState } from "react";
import Form from "./Form";
import Form2 from "./Form2";
import Form3 from "./Form3";
import dayjs from "dayjs";

const Manage = ({
  formNo,
  value,
  setValue,
  values,
  setValues,
  personName,
  setPersonName,
}) => {
  // const currentdate = new Date();
  // const [personName, setPersonName] = useState([]);
  // const [value, setValue] = useState(dayjs(`${currentdate.toISOString()}`));

  // const [values, setValues] = useState({
  //   usename: "",
  //   email: "",
  //   password: "",
  //   personName: personName,
  //   imageLink: "",
  //   alertTime: ``,
  //   courtname: "",
  //   courtid: "",
  //   prejudge: "",
  //   deputy: "",
  //   clerk: "",
  //   municipal_name: "",
  //   office_name: "",
  //   court_address: "",
  // });

  // console.log(values);

  return (
    <div>
      {formNo == 1 && (
        <Form
          values={values}
          setValues={setValues}
          personName={personName}
          setPersonName={setPersonName}
          value={value}
          setValue={setValue}
        />
      )}
      {formNo == 2 && <Form2 values={values} setValues={setValues} />}
      {formNo == 3 && (
        <Form3
          values={values}
          setValues={setValues}
          personName={personName}
          setPersonName={setPersonName}
          value={value}
          setValue={setValue}
        />
      )}
    </div>
  );
};

export default Manage;
