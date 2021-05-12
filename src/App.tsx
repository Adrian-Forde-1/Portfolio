import { FC } from "react";

// React Router DOM
import { Switch, Route } from "react-router-dom";

// Styles
import "./styles/styles.css";

// Components
import Homepage from "./components/Pages/Homepage/Homepage";
import ViewProject from "./components/Pages/Project/ViewProject";

const App: FC = () => {
  return (
    <div className="wrapper wrapper--fd-col wrapper--mh-100" id="app">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/project/:project" component={ViewProject} />
      </Switch>
    </div>
  );
};

export default App;
