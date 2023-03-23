import './App.css';
import Table from './components/Table';
import { ResizeColSizeProvider } from './components/tableContext';

function App() {
  return (
    <div className="App">
      <ResizeColSizeProvider>
        <Table />
      </ResizeColSizeProvider>
    </div>
  );
}

export default App;
