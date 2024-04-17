import { useState, useEffect } from 'react';
import axios from 'axios';
import DataList from '../components/DataList';

const API_URL = 'http://localhost:8080/api/authors';

function DataTable() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const interval = setInterval(fetchData, 3000); // Fetch data every 5 seconds

    return () => {
      clearInterval(interval); // Clear the interval when the component unmounts
    };
  }, []);

  const deleteData = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      console.log('Data deleted');
      setData(data.filter((item) => item._id !== id));
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <DataList data={data} handleDelete={deleteData} />
      )}
    </div>
  );
}

export default DataTable;
