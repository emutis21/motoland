import { Toaster, toast } from "react-hot-toast";

const About = () => {

  return (
    <div className="container">
      <h1>About</h1>

      <button onClick={()=>{toast.error("This didn't work.")}}>errror</button>
      <Toaster position="top-right" reverseOrder={true} />
    </div>
  );
};
export default About;
