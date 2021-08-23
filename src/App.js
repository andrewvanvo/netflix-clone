import './App.css';
import Row from './components/Row';
import requests from './api';

function App() {
  return (
    <div className="App">
      
      <Row title = 'Trending Now' getUrl ={requests.fetchTrending}></Row>
      <Row title = 'Action' getUrl = {requests.fetchAction}></Row>
      
    </div>
  );
}

export default App;
