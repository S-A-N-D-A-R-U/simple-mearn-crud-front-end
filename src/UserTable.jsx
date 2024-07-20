const UserTable = ({rows}) => {
  return (
    <div>
        <table class="table-fixed bg-blue-300 border border-separate  border-slate-500 ">
          <thead>
            <tr>
              <th className="border border-slate-600">ID</th>
              <th className="border border-slate-600">Name</th>
              <th className="border border-slate-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.length > 0 ? rows.map(row => (
              <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>
                <button className="bg-blue-500 py-1 px-4 rounded-md" onClick={() =>{}}>Update</button>
                <button className="bg-blue-500 py-1 px-4 rounded-md" onClick={() =>{}}>Delete</button>
              </td>
            </tr>
            )):(
              <tr>
              <th className="border border-slate-600">No data</th>
              
            </tr>
            )
            }
            
          </tbody>
        </table>
    </div>
  )
}

export default UserTable
