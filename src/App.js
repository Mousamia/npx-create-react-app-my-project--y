/* eslint-disable no-unused-vars */
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
const murgi = {
  color: 'red',
}



// main app()
//  i dont know how to add style in components
function App() {
  const skills = ["html", "css", "react", "javascript"]


  return (
    <div className="App">

      <div className='container'>

        <header className="header">
          <HeaderWeb></HeaderWeb>
        </header>


        <main className="main">
          <aside className="sidebar">
            <h2>My Skillset</h2>

            {
              skills.map(skill => <Sidebar name={skill}  > </Sidebar>)
            }


          </aside>

          <div className='right-side-bar'>
            <Counter></Counter>
          </div>
        </main>


        {/* <span style={{color: 'red',}}>kfeh</span> */}
      </div>
    </div>
  );
}



function HeaderWeb(props) {
  
  return (
    <div>
      <h1> Hello, I am Samia Shahrin</h1>
      <h3>Professional Web Developer</h3>
      <img src="./logo.svg" alt="" />

    </div>
  )
}

function Sidebar(props) {
  console.log(props);

  return (
    <div>
      <ul>
        <li> {props.name}  </li>

      </ul>
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(13);
  // console.log(count);
  // console.log(setCount);

  const increaseCount = () => {
    const updateCount = count + 1;
    setCount(updateCount);
    console.log(updateCount);
  }

  // // short form

  // const increaseCount = () => console.log(setCount(count+1));
  // console.log(setCount);
  

  return(
    <div className='counter'>
      <h1>Count: </h1>
      <button className="increase" onClick={increaseCount}>
        increase
      </button>
    </div>
  )
}






export default App;
