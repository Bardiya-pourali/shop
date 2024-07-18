import Container from "../../componenets/container/Container"
import Button from '../../componenets/button/Button';
import { useShoppingCartContext } from "../../context/ShoppingCartContext";
import { ChangeEventHandler, useState } from "react";

const Login = () => {

    const{handleLogin}=useShoppingCartContext();

    const[user,setUser] = useState({
        username:"",
        password:"",
})

    const handleChange=(e:React.ChangeEventHandler<HTMLInputElement>)=>{
const {name,value}=e.target;

setUser({
    ...user,
    [name]:value,
})
    }


  return (
    <div className="mt-10">
      <Container>
        <div className="w-80 h-80 bg-violet-400 mx-auto p-6 rounded">
            <input onChange={handleChange} className="w-full mt-1 p-2 rounded" type="text" name="username" placeholder="نام کاربری" value={user.username} />
            <input onChange={handleChange} className="w-full mt-4 p-2 rounded" type="password" name="password" placeholder="رمز عبور" value={user.password} />
            <Button onClick={()=>handleLogin(user.username,user.password)} type="submit" className="mt-4" variant="primary">ورود</Button>
        </div>
      </Container>
    </div>
  )
}

export default Login
