
import './App.css';

import Layout from "./componentes/Layout"
import ItemListContainer from "./componentes/ItemListContainer"
import React from 'react';
/* import CartProvider from "./context/cartContext" */

function App() {
  return (
  
   <main className='App'>
    <Layout>
        <ItemListContainer />
    </Layout>
   </main>

    
    
  );
}

export default App;
