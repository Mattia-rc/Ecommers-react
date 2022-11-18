
import './App.css';
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer';
import ItemDetailContainer from './componentes/itemDetailContainer';

function App() {
  return (
   <main className='App'>

    <NavBar/>
    <ItemListContainer greeting= "Mis productos"/>
    <ItemDetailContainer/>
   </main>

    
    
  );
}

export default App;
