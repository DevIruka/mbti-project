import { Provider } from "react-redux";
import Router from "./shared/Routes";
import reduxStore from "./redux/store/store";

function App() {
  return (
    <Provider store={reduxStore}>
      <Router />
    </Provider>
  );
}

export default App;
