import './App.css';
import { Main } from './component/Main';
import { Routes, Route } from 'react-router-dom';
import { Item } from './component/Item';
import { NotFound } from './component/NotFound';
import { Header } from './component/Header';
import { Delivery } from './component/Delivery';
import { About } from './component/About';
import { Buyerprotection } from './component/Buyerprotection';


function App() {


  return (
    <>
    <Header/>
    <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/catalog/:id" element={<Item/>}/>
        <Route path="/delivery" element={<Delivery/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/buyerprotection" element={<Buyerprotection/>}/>
        <Route path="*" element={<NotFound/>} />
    </Routes>
    </>
  );
}

export default App;
