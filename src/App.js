import './App.css';
import {  BrowserRouter as Router,  Switch,  Route,  Link} from "react-router-dom";
import Home from './Components/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch';
import FriendDetails from './Components/FriendDetails/FriendDetails';
function App() {  
  return (
    <Router >  
      <Switch>
        <Route path="/home">
          <Home></Home>

        </Route>
        <Route path="/friend/:id">
          <FriendDetails></FriendDetails>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
       
        <Route path="*">
          <NoMatch></NoMatch>

        </Route>
        
        </Switch>       
         
    </Router>
  );
}

export default App;
