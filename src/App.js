import { useSelector } from 'react-redux';
import Header from './components/Header/Header';
import PopupList from './components/PopupList/PopupList';

function App() {
  const books = useSelector((store) => store.books);

  return (
    <div className="App">
      <Header />
      {books.length > 0 ? <PopupList /> : <h3>PopUp List</h3>}
    </div>
  );
}

export default App;
