import logo from './logo.svg';
import './App.css';
import Car1 from "./Components1/car1.jsx";
import Car2 from "./Components1/car2.jsx";
import Car3 from "./Components1/car3.jsx";
import Car4 from "./Components1/car4.jsx";


function Car(){
  return (
    <>
    <h2>Audi</h2>
    <img src="https://images.pexels.com/photos/168938/pexels-photo-168938.jpeg?auto=compress&cs=tinysrgb&w=600"
     alt = "Audi " height="150px" width = "180px"/>
     </>
  );
}
function App() {
  return (
    <>
    <h1>CARS</h1>
    <hr></hr>
    <div class = "Car_align">
    <Car1/>
    <Car2/>
    <Car3/>
    <Car4/>
    </div>
    
    </>
  );
}

export default App;

