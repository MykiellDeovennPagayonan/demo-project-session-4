import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/header';
import ContentA from './components/contentA';
import ContentB from './components/contentB';
import ContentC from './components/contentC';

function App() {
  const [page, setPage] = useState("a")
  const [number, setNumber] = useState(0)
  
  useEffect(() => {
    console.log("HI")
  }, [number])

  return (
    <div className='body'>
      <Header setPage={setPage} setNumber={setNumber} number={number}/>
  

      {page === "a" && <ContentA />}
      {page === "b" && <ContentB />}
      {page === "c" && <ContentC />}

    </div>
  );
}

export default App;
