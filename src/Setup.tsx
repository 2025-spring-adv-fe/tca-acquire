import { useNavigate } from "react-router";

interface SetupProps {
  totalGameCount: number;
}

 export const Setup: React.FC<SetupProps> = ({totalGameCount}) => {

  const nav2 = useNavigate();


  return(
  <>
  <h3
    className='text-2xl font-bold'
  >
    Setup ({totalGameCount} games played)
  </h3>
  <button 
    className="btn btn active btn-secondary btn-lg mt-4"
    onClick= {
      () => nav2("/play")
    }
    >
      Start Playing</button>
  </>
  );
};