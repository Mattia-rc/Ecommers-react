
import './App.css';
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer';

function App() {
  return (
   <main className='App'>

    <NavBar/>
    <ItemListContainer greeting= "Mis productos"/>
   </main>

    
    
  );
}

export default App;
