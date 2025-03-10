import "./App.css";


interface AppProps {
  timestamp: string;
  magicNumber: number;
}

const App: React.FC<AppProps> = (

  {
  timestamp, 
  magicNumber
  }
) => {

  console.log(
    "App Called 2"
    // , typeof(props)
    // , props
  );

  return (
    <div>
      <h1 className="text-2xl font-bold">TCA Acquire</h1>

      <p>{timestamp} - {magicNumber}</p>

      <button 
        className="btn btn-primary"
      >
        Play Acquire
      </button>
    </div>
  );
}; 

export default App;