import { useState, useEffect } from 'react';
import axios from 'axios';
import style from './AddDataForm.module.css';

function AddDataForm() {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (error || success) {
      setShowToast(true);
      const timer = setTimeout(() => {
        setShowToast(false);
        setError('');
        setSuccess('');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [error, success]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      {showToast && (
        <div
          className={`${style.toast} ${
            error ? style['toast-error'] : style['toast-success']
          }`}
        >
          {error || success}
        </div>
      )}
      <form className={style['form-group']} onSubmit={handleSubmit}>
        <label className={style['form-label']} htmlFor='name'>
          Name:
        </label>
        <input type='text' id='name' name='name' />
        <label htmlFor='age'>Age:</label>
        <input type='text' id='age' name='age' />
        <button
          type='submit'
          className={`${style.btn} ${style['btn-primary']}`}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddDataForm;

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   try {
//     const response = await axios.post('http://localhost:8080/api/authors', {
//       name,
//       age,
//     });
//     setData(response.data);
//     setSuccess(response.data.message);
//     setError('');
//     setName('');
//     setAge('');
//   } catch (error) {
//     setError(error.response.data.message);
//     setSuccess('');
//   }
// };
