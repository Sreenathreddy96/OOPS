import logo from './logo.svg';
import './App.css';
import TenthStudent from './components/TenthStudent';
import SSCStudent from './classes/SSCStudent';

function App() {

  let sreenath = new SSCStudent("Sreenath","Male");
  let uday = new SSCStudent("Uday","Male");
  let krishna = new SSCStudent("Krishna","Male");
  let pradeep = new SSCStudent("Pradeep","Male");
  let vikram = new SSCStudent("Vikram","Male");
  sreenath.calculateResult();
  sreenath.age = 27;
  return (
    <div className="App">
      <TenthStudent name="Sreenath"/>
      <TenthStudent name="Uday"/>
      <TenthStudent name="Krishna"/>
      <TenthStudent name="Pradeep"/>
      <TenthStudent name="Vikram"/>
      
    </div>
  );
}

export default App;
