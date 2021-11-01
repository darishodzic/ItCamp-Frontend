import Category from "./components/CategoryFold.jsx/Category";
import Ping from "./components/Ping";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
function App() {
  return (
    <Switch>
      <Route path="/home" exact>
          <h1>Home page</h1>
      </Route >
      <Route path="/cart" exact>
        <h1>Cart</h1>
      </Route>
      <Route path="/login" exact>
        <h1>Login page</h1>
      </Route>
      <Route path="/sign-up" exact>
        <h1>Sign-up</h1>
      </Route>
      <Route path="/category" exact>
        <h1>category</h1>
      </Route>
      <Route path="/category/:categoryId" exact> 
        <h1>Nesto</h1>
      </Route>
      <Route path="*" >
        <h1>Not found</h1>
      </Route>
    </Switch>
  );
}

export default App;
