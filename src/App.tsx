import './App.css';
import { Main } from './component/Main';
import { Routes, Route } from 'react-router-dom';
import { Item } from './component/Item';
import { NotFound } from './component/NotFound';


function App() {


  return (
    <>
    <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/catalog/:id" element={<Item/>}/>
        <Route path="*" element={<NotFound/>} />
    </Routes>
    </>
  );
}

export default App;
