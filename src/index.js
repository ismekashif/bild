// Requires
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Components
import Hero from './components/hero/hero';
import Router from './components/router';

const App = () => {
  return (
    <>
      <Hero />
      <Router />
    </>
  );
}

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));