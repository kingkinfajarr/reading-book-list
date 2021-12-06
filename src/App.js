import Footer from './components/Footer';
import BookList from './components/BookList';
import BookContextProvider from './context/BookContext';
import AddBook from './components/AddBook';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <div className="md:container md:max-w-2xl container px-6 mx-auto">
        <BookContextProvider>
          <Header />
          <AddBook />
          <BookList />
          <Footer />
        </BookContextProvider>
      </div>
    </div>
  );
}

export default App;
