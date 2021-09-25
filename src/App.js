import "./App.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import ItemDetailContainer from "./componentes/ItemDetailContainer";
import ItemListContainer from "./componentes/ItemListContainer";
import CartContextProvider from "./context/CartContext";

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <Link to="/">Home</Link>
          <Switch>
            <Route exact path="/" component={ItemListContainer} />
            <Route path="/:id" component={ItemDetailContainer} />
          </Switch>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
