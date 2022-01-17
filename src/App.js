import './App.css';
import Greet from './components/Greet';
import GreetClasscomp from './components/GreetClasscomp';
import FuncClick from './components/FuncClick';
import ClassClick from './components/ClassClick';
import Counter from './components/Counter';
import NewCounter from './components/NewCounter';
import BindingEvents from './components/BindingEvents';
import ParentComponent from './components/ParentComponent';


function App() {
  return (
    <div className="App">
      {/* <FuncClick/> */}
      {/* <ClassClick/> */}
      {/* <BindingEvents/> */}
      <ParentComponent/>
      {/* <NewCounter realName ="Jeff" alias="Muteru"/> */}

      {/* <Greet name = 'Jeff' heroname='Super Morio'/> */}
      {/* <GreetClasscomp name ='Muteru' heroname ='Spider Buda'/> */}
    </div>
  );
}

export default App;
