import React, { useEffect } from "react";
import InputBox from "./inputBox/InputBox";
import MultiSelect from "./MultiSelect";
import schedule from "node-schedule";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

const Form2 = ({ values, setValues }) => {
  const list = ["Oliver Hansen", "Van Henry", "April Tucker"];
  //   const [personName, setPersonName] = useState([]);

  //............

  const inputs = [
    {
      id: 1,
      name: "courtname",
      type: "text",
      placeholder: "Court Name",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character",
      label: "Court Name",
      pattern: "^[A-Za-z0-9]{,255}$",
      required: true,
    },

    {
      id: 2,
      name: "courtid",
      type: "number",
      placeholder: "Court ID",
      errorMessage: "It should be a valid email address.",
      label: "Court ID",
      pattern: "^[A-Za-z0-9]{,255}$",
      required: true,
    },

    {
      id: 3,
      name: "prejudge",
      type: "text",
      placeholder: "Presiding Judge",
      label: "Presiding Judge",
      pattern: "^[A-Za-z0-9]{,255}$",
      required: true,
    },

    {
      id: 4,
      name: "deputy",
      type: "text",
      placeholder: "Deputy's Name",
      label: "Deputy's Name",
      pattern: "^[A-Za-z0-9]{,255}$",
      required: true,
    },

    {
      id: 5,
      name: "clerk",
      type: "text",
      placeholder: "Clerk's Name",
      label: "Clerk's Name",
      pattern: "^[A-Za-z0-9]{,255}$",
      required: true,
    },

    {
      id: 6,
      name: "municipal_name",
      type: "text",
      placeholder: "Municipal Name",
      label: "Municipal Name",
      pattern: "^[A-Za-z0-9]{,255}$",
      required: true,
    },

    {
      id: 7,
      name: "office_name",
      type: "text",
      placeholder: "Office Name",
      label: "Office Name",
      pattern: "^[A-Za-z0-9]{,255}$",
      required: true,
    },

    {
      id: 8,
      name: "court_address",
      type: "text",
      placeholder: "Court Address ",
      label: "Court Address ",
      pattern: "^[A-Za-z0-9]{,255}$",
      required: true,
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

          <button>Submit</button>
        </form>
      </div>
    </>
  );
};

export default Form2;
