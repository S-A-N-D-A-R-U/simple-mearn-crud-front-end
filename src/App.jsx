
import { useState } from "react";
import "./App.css";
import UserTable from "./UserTable";

const users = [];

function App() {
  const [id, setId] = useState(0);
  const [name , setName] = useState('');

  return (
    <div className=" flex min-h-60 items-center gap-4 justify-center bg-violet-400 flex-col">
      <h1 className="text-3xl ">User Form</h1>
      <form action="" className="flex flex-col  ">
        <label htmlFor="id">Id</label>
        <input value={id} onChange={e=>{setId(e.target.value)}} type="text" id="id" placeholder="ID" />
        <br />
        <label htmlFor="name">Name</label>
        <input value={name} onChange={e=>{setName(e.target.value)}} type="text" id="name" placeholder="Name" />
      </form>
      <button className="bg-blue-500 py-2 px-5 rounded-md">ADD</button>
      <UserTable  rows={users} />
    </div>
  );
}

export default App;
