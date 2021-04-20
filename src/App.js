import './App.css';
import Header from './components/header'
import Tweets from './components/body'
function App() {
  
  return (
    <div className="App" >
      <Header />
      <Tweets height="800" />
      
    </div>
  );
}

export default App;
