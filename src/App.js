import './App.css';
import RenderingLists from './components/RenderingLists'


function App() {
  return (
    <div className="App">

      {/* Render list items */}
      <RenderingLists/> 

      <RenderingLists/>     
   <ConditionalRender/>
    </div>
  );
}

export default App;
