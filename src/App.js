import { useState } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MultiStepForm from "./pages/MultiStepForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MultiStepForm />,
  },
]);

function App() {
  // const [image, setImage] = useState();

  // const convertToBase64 = (e) => {
  //   var reader = new FileReader();
  //   reader.readAsDataURL(e.target.files[0]);
  //   reader.onload = () => {
  //     console.log(reader.result);
  //     setImage(reader.result);
  //   };
  //   reader.onerror = (error) => {
  //     console.log("Error: ", error);
  //   };
  // };

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
