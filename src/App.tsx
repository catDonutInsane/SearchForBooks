
import './App.css';
import {Routes, Route} from 'react-router-dom'
import { Header } from './components/Header/Header';
import { BookList } from './components/BookList/BookList';
import { BookInfo } from './components/BookInfo/BookInfo';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
          <Route path='/' element={<BookList/>}></Route>
          <Route path='/:id' element={<BookInfo/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
