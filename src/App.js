import Footer from './components/Footer';
import BookList from './components/BookList';
import BookContextProvider from './context/BookContext';
import AddBook from './components/AddBook';
import Header from './components/Header';

function App() {
  return (
    <div className="App dark:bg-gray-900 transition-all duration-300 min-h-screen">
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
