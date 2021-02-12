import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Contact from "./pages/Contact";
import ContactDetail from "./pages/ContactDetail";

export default function App() {
  return (
    <Router>
      <div >
        <Switch>
          <Route exact path="/" component={Contact}></Route>
          <Route path="/details/:id" component={ContactDetail}></Route>
        </Switch>
      </div>
    </Router>
  );
}
