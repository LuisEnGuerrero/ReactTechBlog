//import logo from './assets/images/logo.svg';
import './assets/css/App.css';

//Importar componentes creados:
import Footer from './components/Footer';
import Router from './Router';


function App() {
  return (
    <div className="App">
      <Router />

      <div className="clearfix"></div>
      <Footer />
    </div>
  );
}

export default App;
