import './App.css';
import AddDataForm from './components/AddDataForm';
import DataTable from './pages/DataTable';

function App() {
  return (
    <>
      <div className='container'>
        <h1>
          {' '}
          React <span className='text-gradient'>Forms</span>{' '}
        </h1>
        <AddDataForm />
        <DataTable />
      </div>
    </>
  );
}

export default App;
