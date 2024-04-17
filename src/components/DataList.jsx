import style from './DataList.module.css';

function DataList({ data, handleDelete }) {
  return (
    <div className={style.bd}>
      <table className={style.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Username</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item._id}>
              <td>{item._id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.username}</td>
              <td>{item.password}</td>
              <td>
                <button
                  className={style['delete-button']}
                  onClick={() => handleDelete(item._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataList;
