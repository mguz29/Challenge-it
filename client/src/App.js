import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
        <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;
