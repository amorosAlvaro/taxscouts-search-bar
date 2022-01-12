import { useSelector } from 'react-redux';
import Header from './components/Header/Header';
import PopupList from './components/PopupList/PopupList';
import './App.css';

function App() {
  const books = useSelector((store) => store.books);
  return (
    <main className="App">
      <Header />
      {books.length && (<PopupList />) }
    </main>
  );
}

export default App;
