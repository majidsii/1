import { useState } from "react";
import userList from "./list";
export default function Majid(){

  const [filterText, setFiltertext] = useState("");
  const [sort, setSort] = useState("username");
  
  const inputHandlerSort = (event) =>{
    setSort(event.target.value);
  };
  
  const inputHandler = (event) =>{
    setFiltertext(event.target.value);
  };

  return(
    <div className="flex flex-col items-center">
      <h2 className="mt-8 text-3xl font-bold" >
        Form For Search ...
      </h2>
      <div className="mt-8 ">
        <label for="INPUT" className="p-3">search:</label>
        <input id="INPUT" className="rounded-md p-3" onInput={inputHandler}></input>
        <select value={sort} className="ml-3 p-3 rounded-md" onInput={inputHandlerSort}>
          <option>date</option>
          <option>username</option>
        </select>
      </div>

      <div className="mt-3 ml-24 overflow-scroll h-screen w-40 overflow-x-hidden">
        {userList
        .sort((user1, user2)=> user1[sort] < user2[sort] ? 1 : -1)
        .filter((user)=> user.username.includes(filterText))
        .map(user=> <p key={user.username} className="my-1">{user.username}</p>)}
      </div>
    </div>
  );
};