import './App.css';
import Card from './components/Card';

function App() {
  const title = 'Shopping List';
  return (
    <div className='app'>
      <Card title = {title}></Card>
    </div>
  );
}

export default App;
