import { useNavigate } from "react-router";

 export const Play = () => {

  const nav3 = useNavigate();

  return(
  <>
  <h3
    className='text-2xl font-bold'
  >
    Play
  </h3>

  <h4 className="text-lg font-semibold">
    Turn #1
    <button className="btn btn xs-outline btn-light ml-4">
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