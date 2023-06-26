import React, { useEffect } from "react";
import InputBox from "./inputBox/InputBox";
import MultiSelect from "./MultiSelect";
import schedule from "node-schedule";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

const Form = ({
  values,
  setValues,
  personName,
  setPersonName,
  value,
  setValue,
}) => {
  const list = ["Oliver Hansen", "Van Henry", "April Tucker"];
  //   const [personName, setPersonName] = useState([]);

  //............

  useEffect(() => {
    values.personName = personName;
  }, [personName]);

  const inputs = [
    {
      id: 1,
      name: "usename",
      type: "text",
      placeholder: "username",
      label: "username",
      errorMessage: "username error",
      required: true,
      pattern: "^[A-Za-z0-9]{3,16}$",
    },
    {
      id: 2,
      name: "email",
      type: "text",
      placeholder: "email",
      label: "email",
      errorMessage: "email error",
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "text",
      placeholder: "password",
      label: "password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      required: true,
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "text",
      placeholder: "confirmPassword",
      label: "confirmPassword",
      errorMessage: "password mismatch",
      required: true,
      pattern: values.password,
    },
    {
      id: 5,
      name: "birthDate",
      type: "date",
      placeholder: "birthDate",
      label: "birthDate",
    },
    {
      id: 6,
      name: "imageLink",
      type: "file",
      placeholder: "image",
      required: true,
      errorMessage: "enter Image",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("values", JSON.stringify(values));

    console.log(values.alertTime);

    const job = schedule.scheduleJob(values.alertTime, function () {
      console.log("Alert!");
    });
  };
  const onChange = (e) => {
    if (e.target.type == "file") {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      console.log(e.target.files);
      reader.onload = () => {
        console.log(reader.result);
        setValues({ ...values, [e.target.name]: reader.result });
      };
      reader.onerror = (error) => {
        console.log("Error: ", error);
      };

      return;
    }
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  //   console.log(values);

  const setDateTime = (newValue) => {
    setValue(newValue);
    const newval = newValue.toISOString();
    setValues({ ...values, alertTime: newval });
  };

  return (
    <>
      <div className="app">
        <form onSubmit={handleSubmit}>
          {inputs.map((input) => {
            return (
              <InputBox
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            );
          })}
          <MultiSelect
            personName={personName}
            setPersonName={setPersonName}
            list={list}
          />

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DateTimePicker", "DateTimePicker"]}>
              <DateTimePicker
                label="Controlled picker"
                value={value}
                onChange={setDateTime}
              />
            </DemoContainer>
          </LocalizationProvider>

          <button>Submit</button>
        </form>
      </div>
    </>
  );
};

export default Form;
