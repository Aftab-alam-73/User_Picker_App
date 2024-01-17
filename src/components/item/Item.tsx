import styles from './item.module.css'
interface User{
  id:number;
  name:string;
  email:string;
  profile:string;

}
const Item = ({user,list,setList,selectedUser,setSelectedUser}:{user:User,list:User[],setList:any,selectedUser:User[],setSelectedUser:any}) => {
  const handleclick = () =>{
    setList([...list,user]);
    const newList=selectedUser.filter((item:any)=>{
      return item.id!=user.id;
    })
    setSelectedUser(newList);
  }
  return (
    <div className={styles.container}>
      <img src={user.profile} alt="profile picture" className={styles.img} />
      <span>{user.name}</span>
      <span onClick={handleclick} className={styles.cancel}>X</span>
    </div>
  )
}

export default Item
