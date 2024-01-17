import Users from '../user/Users'
import styles from './userlist.module.css'

interface User{
  id:number;
  name:string;
  email:string;
  profile:string;

}
const UserList = ({search,setSearch,list,setList ,setSelectedUser,selectedUser}:{search:string,setSearch:any,list:User[] ,setList:any,setSelectedUser:any,selectedUser:User[]}) => {
  return (
    <div className={styles.container}>
      {
        list.filter((item:User)=>{
          return search.toLowerCase()===''?item: item.name.toLowerCase().includes(search);
        }).map((user:User)=>{
            return <Users 
            setSearch={setSearch} 
            user={user}
            list={list} 
            setList={setList} 
            key={user.id} 
            setSelectedUser={setSelectedUser} 
            selectedUser={selectedUser} />
        })
      }
    </div>
  )
}

export default UserList
