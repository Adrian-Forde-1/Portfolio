import { FC } from "react";

// React Router DOM
import { Switch, Route } from "react-router-dom";

// Styles
import "./styles/styles.css";

// Components
import Homepage from "./components/Pages/Homepage/Homepage";

const App: FC = () => {
  return (
    <div className="wrapper wrapper--fd-col wrapper--mh-100" id="app">
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
    </div>
  );
};

export default App;
