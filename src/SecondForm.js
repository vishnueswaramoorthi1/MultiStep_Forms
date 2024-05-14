import { useContext } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import DetailContext from './Context/DetailContext';

export const SecondForm = () => {
  const location=useLocation()
  const navigate=useNavigate()
  const emailRejux=/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const {details,setDetails}=useContext(DetailContext)
  const onlyDigitsRegex = /^\d+$/;
  console.log(location,"location")
    function value(e) {
      e.preventDefault();
      const email=document.getElementById("email").value
      const phone=document.getElementById("phone").value
      if (!email || !phone) {
        alert("Enter the Filed");
      } else if (!emailRejux.test(email) || !onlyDigitsRegex.test(phone)) {
        alert("Invalid Email");
      }
      else if (!onlyDigitsRegex.test(phone)) {
        alert("Invalid MobileNumber");
      }
      else{
  navigate("/third")
  setDetails({...details,Email:email,'Phone Number':phone})
      }
      
    }
    return (
      <div className="layout_portion">
          <div className="form_style">
        <form>
          <label htmlFor="email">Email</label>
          <br />
          <input type="email" id="email" name="email" />
          <br />
          <label htmlFor="phone">Phone Number</label>
          <br />
          <input type="text" id="phone" name="phone" />
          <br />
          <input type="submit" value="Next" onClick={(e) => value(e)} />
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
  