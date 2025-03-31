import { useNavigate } from "react-router";
import { useState } from "react";


interface PlayProps {
  totalGameCount: number;
}

 export const Play: React.FC<PlayProps> = ({totalGameCount}) => {

  const nav3 = useNavigate();

  const [turnNumber, setTurnNumber] = useState(6);

  return(
  <>
  <h3
    className='text-2xl font-bold'
  >
    Play ({totalGameCount} games played)
  </h3>

  <h4 className="text-lg font-semibold">
    Turn #{turnNumber}
    <button 
      className="btn btn xs-outline btn-light ml-4"
      onClick={
        () => {
          setTurnNumber(turnNumber + 1)
        }
      }
    >
      +
    </button>
  </h4>
  <button className="btn btn active btn-secondary btn-lg mt-4"
    onClick= {
      () => nav3(-2)
    }
  >
    Done</button>
  </>
  );
};