import './App.css';
import HomePage from './components/HomePage/HomePage';
import Footer from './components/common/Footer/Footer';
import Header from './components/common/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Header />
      <div className="mt-2 mb-16">
        <HomePage />
      </div>
      <Footer />
    </>

  );
}

export default App;
