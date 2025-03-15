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
  <button className="btn btn active btn-secondary btn-lg mt-4"
    onClick= {
      () => nav3(-2)
    }
  >
    Done</button>
  </>
  );
};