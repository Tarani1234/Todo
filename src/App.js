import AddTodo from "./AddTodo";
import "./App.css";
import AppName from "./components/AppName";
import Todoitems1 from "./components/Todoitems1";
import Todoitems2 from "./components/Todoitems2";
function App() {
  return (
    <center>
     <AppName/>
      <AddTodo/>
      <Todoitems1/>
        <Todoitems2/>    
    </center>
  );
}

export default App;
