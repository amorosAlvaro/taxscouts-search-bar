import { useSelector } from 'react-redux';
import Header from './components/Header/Header';
import PopupList from './components/PopupList/PopupList';
import './App.css';

function App() {
  const books = useSelector((store) => store.books);
  console.log(books);

  return (
    <main className="App">
      <Header />
      {books.length > 2 ? <PopupList /> : <h3>PopUp List</h3>}
    </main>
  );
}

export default App;
