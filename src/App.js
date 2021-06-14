import './App.css';
import {BasicTable} from './components/BasicTable'
import {FilteringTable} from './components/FilteringTable' 
import {ColumnFilteringTable} from './components/ColumnFilteringTable'

function App() {
  return (
    <div className="App">
      {/* <BasicTable /> */}
      <FilteringTable />
      {/* <ColumnFilteringTable /> */}
    </div>
  );
}

export default App;
