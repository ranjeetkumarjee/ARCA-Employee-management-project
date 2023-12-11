import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Loader from './components/Loader/Loader';
import { useEffect, useState } from 'react';
import PersonCard from './components/Card/PersonCard';

function App() {
  const [data, setData]=useState();
  const [error, setError]=useState();
  const [loading, setLoading]=useState(true);

  const url='https://mocki.io/v1/3a4b56bd-ad05-4b12-a181-1eb9a4f5ac8d'
  const getData=async ()=>{
    try {
      const response = await fetch('https://mocki.io/v1/3a4b56bd-ad05-4b12-a181-1eb9a4f5ac8d');
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }


      const result = await response.json();
      console.log("result", result);
      setData(result);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(()=>{
  getData();

  }, [])


  

  

  return (
    <>
    {loading ? <Loader /> : (
      <div className="App">
      <Navbar />
        <div className='cardDisplay_sec'>
          {
            data.map((item,index)=>{
              return <PersonCard item={item} key={index} data={data} />
            })
          }
        </div>
    </div>
    )}
    </>
  );
}

export default App;
