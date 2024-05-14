import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import DetailContext from './Context/DetailContext';
export const FirstForm = () => {
  const namePattern = /^[a-zA-Z\s-]+$/;
  const {details,setDetails}=useContext(DetailContext)
  const navigate=useNavigate()
  function value(e) {
    e.preventDefault();
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    if (!fname || !lname) {
      alert("Enter the Filed");
    } else if (!namePattern.test(fname) || !namePattern.test(lname)) {
      alert("Invalid first name or last name.");
    }
    else{
navigate("/second")
setDetails({...details,FirstName:fname,LastName:lname})

    }
  }
  return (
    <div className="layout_portion">
      <div className="form_style">
        <form>
          <label htmlFor="fname">First name</label>
          <br />
          <input type="text" id="fname" name="fname" />
          <br />
          <label htmlFor="lname">Last name:</label>
          <br />
          <input type="text" id="lname" name="lname" />
          <br />
          <input type="submit" value="Next" onClick={(e) => value(e)} />
        </form>
      </div>
      <style>{`
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
