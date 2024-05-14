import { useContext } from "react";
import DetailContext from "./Context/DetailContext";

export const ThirdForm = () => {
  const {details,setDetails}=useContext(DetailContext)
  function value(e) {
    e.preventDefault();
    const designation=document.getElementById("job").value
    const salary=document.getElementById("salary").value
    if (!designation || !salary) {
      alert("Enter the Filed");
    } 
    else{
setDetails({...details,Designation:designation,'Salary':salary})

    }
    
  }
  console.log(details,"Details")
    return (
      <div className="layout_portion">
          <div className="form_style">
        <form>
          <label htmlFor="job">Designation</label>
          <br />
          <input type="text" id="job" name="job" />
          <br />
          <label htmlFor="salary">Salary</label>
          <br />
          <input type="text" id="salary" name="salary" />
          <br />
          <input type="submit" value="Submit" onClick={(e) => value(e)} />
        </form>
        </div>
        <style>{
          `
          .layout_portion{
              display: flex;
              justify-content: center;
              align-items: center;
              height:100vh;
              width:100vw;
          }
          .form_style{
              background-color:green;
              height:50%;
              width:50%;
              display: flex;
              justify-content: center;
              align-items: center;
          }
          `}</style>
      </div>
    );
  };
  