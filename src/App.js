/* eslint-disable no-unused-vars */
import logo from './logo.svg';
import './App.css';
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
        </main>


        {/* <span style={{color: 'red',}}>kfeh</span> */}
      </div>
    </div>
  );
}











function HeaderWeb(props) {
  console.log(props);
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





export default App;
