import styles from './App.module.css'
import React, { useState } from "react"
import UserList from "./components/userlist/UserList"
import Item from "./components/item/Item"
import {data} from './data'

interface User{
  id:number;
  name:string;
  email:string;
  profile:string;

}
function App() {
  const [list,setList]=useState<User[]>(data) 
  const [show,setShow]=useState<boolean>(false)
  const [selectedUser,setSelectedUser]=useState<User[]>([]);
  const [search,setSearch]=useState<string>("");
const handchange=(e:React.ChangeEvent<HTMLInputElement>) => {
  setSearch(e.target.value)
  
}
  return (
    <>
    <div className={styles.container}>
      <div className={styles.subContainer}>
       <h1 className={styles.heading}>User picker</h1>
       <div className={styles.inputContainer}>
        {
          selectedUser.map((user:User) =>{
            return <Item user={user} list={list} setList={setList} selectedUser={selectedUser} setSelectedUser={setSelectedUser}  key={user.id}/>
          })

        }
         

         <span className={styles.inputList}>
          <input 
          type="text" 
          value={search} 
          onChange={handchange} 
          onFocus={()=>setShow(true)} 
          placeholder="Add new user..."  
          className={styles.input}/>
          
          {
          show && <UserList 
          search={search} 
          setSearch={setSearch} 
          list={list} 
          setList={setList} 
          setSelectedUser={setSelectedUser} 
          selectedUser={selectedUser}/>
          }
          </span> 
       </div>
      </div>
    </div>
        
    </>
  )
}

export default App
