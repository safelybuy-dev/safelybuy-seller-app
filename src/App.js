import "./App.css";
import "./tailwind.generated.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Views/Dashboard";
import SamplePage from "./SamplePage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/about"></Route>
        <Route path="/sample">
          <SamplePage />
        </Route>
        <Route path="/">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
