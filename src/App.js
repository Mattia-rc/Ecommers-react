
import './App.css';
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer';
import ItemDetailContainer from './componentes/itemDetailContainer';
import VolverAtras from './componentes/VolverAtras';
function App() {
  return (
   <main className='App'>
    <NavBar/>
    <VolverAtras/>
    <ItemListContainer/>
    <ItemDetailContainer/>
   
   </main>

    
    
  );
}

export default App;
