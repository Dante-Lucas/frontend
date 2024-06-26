import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";
import { Input } from "../inputs/Input";
import { getCsrfToken } from "../../scripts/cookies";
import { setCsrfToken } from "../../scripts/cookies";
export function LoginForm() {
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [error,setError] = useState("")
    const navigate = useNavigate()
    const handlersubmit  = async(e) => {
        e.preventDefault();
        if (username.trim() ===''){
            setError("Preencha o campo username")
        }
        if(password.trim() ===''){
            setError("Preencha o campo password")
        }
    

        try{
            const response = await fetch("http://127.0.0.1:8000/api/v1/login/",{
              method: 'POST',
              headers:{
              'Content-Type': 'application/json',
            },
            body:JSON.stringify({username,password})
          })
      
          const result = await response.json()
          if(response.ok){
            //setMessage(result.success ||`Cadastro realizado com sucesso!`)
            localStorage.setItem("token",result.token)
            navigate("/produto")
          } else {
            setError(result.error)
          }
        } catch (error){
            console.log(error)
        }
    }
        
    return (
        <form id="form-login" onSubmit={handlersubmit} className="space-y-4 md:space-y-6"   method="POST">
            {
            error && 
            <div>
                <span className="font-medium text-red-800 bg-red-50 dark:bg-gray-800 dark:text-red-400">
                {error}
                </span>
            </div>
            }
            <Input 
                label="Username" 
                htmlFor='username' 
                type="text" 
                name="username" 
                id="username" 
                value={username} 
                onChange={e => setUsername(e.target.value)} 
                placeholder=""
            />
            
            <Input 
                label='Password' 
                htmlFor='password' 
                type="password" 
                name="password" 
                id="password" 
                value={password} 
                onChange={e => setPassword(e.target.value)} 
                placeholder=''
            />
            <div className="flex items-center justify-between">
                <div className="">
                
                </div>
                <a href="#" className="flex items-start text-sm font-medium text-blue-600 hover:underline dark:text-primary-500">Forgot password?</a>
            </div>
            <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign in</button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet? <Link to="/register" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
            </p>
        </form> 
    )
}