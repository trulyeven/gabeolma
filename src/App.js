import { Link } from 'react-router-dom';
import './App.css';
import Router from './router/Router';

function App() {
  return (<Router />,
    <div className="App">
      <Link to='/'>홈</Link>
      
      <hr />
      APP
      
    </div>
  );
}

export default App;
