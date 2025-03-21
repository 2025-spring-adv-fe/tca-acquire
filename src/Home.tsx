import { useNavigate } from "react-router";

 export const Home = () => {

  // Use a react hook for button navigation

  const nav = useNavigate();

  return(
  <>
  <h3
    className='text-2xl font-bold'
  >
    Home
  </h3>
  <button 
    className="btn btn active btn-secondary btn-lg mt-4"
    onClick= {
      () => nav("/setup")
    }
    >
    Play Acquire</button>
  </>
  );
};