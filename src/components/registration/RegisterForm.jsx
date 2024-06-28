import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getCsrfToken } from "../../scripts/cookies";
import { Input } from "../inputs/Input";
export const RegisterForm = () => {
  // username é o a variavel com valor inicial e setusername é a função que atualiza a variavel username
  //formamto do state = [valor,função que atualiza o valor]
  const [username,setUsername] = useState("")//userstate facilita no quisito de não precisar usar dom pra pegar o id do input
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [confirmPassword,setConfirmPassword] = useState("")
  const [telefone,setTelefone] = useState("")
  //const [data,setdata] = useState("")
  const [message,setMessage] = useState("")
  const [error,setError] = useState("")
  const csrftoken = getCsrfToken()
  const navigate = useNavigate()
  const handlersubmit  = async(e) => {
    e.preventDefault();
    if (username.trim() ===''){
      setError("Preencha o campo username")
    }
    if(password !== confirmPassword){
      setError("As senhas precisam ser iguais")
    }

    try{
      const response = await fetch("http://127.0.0.1:8000/api/v1/register/",{
        method: 'POST',
        headers:{
        'Content-Type': 'application/json',
        'X-CSRFToken': csrftoken,
      },
      body:JSON.stringify({username,email,password,confirmPassword,telefone})
    })

    const result = await response.json()
    if(response.ok){
      setMessage(result.success ||`Cadastro realizado com sucesso!`)
      navigate("/login")
    } else {
      setError(result.error)
    }
    
    //throw new Error(error)
    } catch(error){
      setError(error)
    }
  }

    return (
      <form onSubmit={handlersubmit}  id="form_register"  className="space-y-4 md:space-y-6"  method="POST">
        {/* forma de renderizar um valor no html*/}
        {
          message && 
          <div className="p-4 mb-4 text-sm rounded-lg">
            <span className=" font-medium text-green-800  bg-green-50 dark:bg-gray-800 dark:text-green-400">
              {message}
            </span>
          </div>
        }

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
          label='Email' 
          htmlFor='email' 
          type="email" 
          name="email" 
          id="email" 
          value={email} 
          onChange={e => setEmail(e.target.value)} 
          placeholder=''
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
        
  
        
        <Input 
          label='Confirm Password' 
          htmlFor='confirmPassword' 
          type="password" 
          name="confirmPassword" 
          id="confirmPassword" 
          value={confirmPassword} 
          onChange={e => setConfirmPassword(e.target.value)} 
          placeholder=''/>
        
  
        
        <Input 
          label='Telefone' 
          htmlFor='telefone' 
          type="text" 
          name="telefone" 
          id="telefone" 
          value={telefone} 
          onChange={e => setTelefone(e.target.value)} 
          placeholder=''
        />
        
  
        <div className="flex items-start">
          <div className="flex items-center h-5 ">
            <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
          </div>
        </div>
  
        <button id="button-form" type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Crie uma conta</button>
        
        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
          Already have an account? <Link to={"/login"} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
        </p>
      </form>
    ) 
}