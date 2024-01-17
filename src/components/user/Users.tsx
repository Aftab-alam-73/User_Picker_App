import styles from './user.module.css'
interface User{
  id:number;
  name:string;
  email:string;
  profile:string;

}
const Users = ({user,setSearch,setSelectedUser,selectedUser,setList,list}:{user:User,setSearch:any,setSelectedUser:any,selectedUser:User[],setList:any,list:User[]}) => {
  const handleclick=()=>{
    setSelectedUser([...selectedUser,user])
    const newList=list.filter((item:any)=>{
      return item.id!=user.id;
    })
    setList(newList)
    setSearch("")
  }
  return (
    <div className={styles.user} onClick={handleclick}>
      <img src={user.profile} alt="profile" className={styles.img}/>
      <span>{user.name}</span>
      <span>{user.email}</span>
    </div>
  )
}

export default Users
