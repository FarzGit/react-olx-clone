// import { FaArrowLeft } from "react-icons/fa";
import { useState } from 'react'
import {auth,} from '../../firebase/config'
import {signInWithEmailAndPassword} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'



function Login() {
    const navigate = useNavigate()
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')


    const handleLogin = async (e)=>{
        e.preventDefault()

        await signInWithEmailAndPassword(auth,email,password).then((userCredential)=>{
            const user = userCredential.user
            console.log(user)
            navigate('/')
        }).catch((error)=>{
            console.log(error)
            window.alert("Enter a valid email or password")
        })
    }




    return (
        <div className="flex items-center justify-center h-svh bg-slate-200 relative">

            <div className="h-[85%] w-[40%] bg-slate-50 flex flex-col items-center rounded-lg justify-center relative " >
                {/* <div className="absolute top-0 left-0 mt-2 mr-2 pl-2">
                    <button><FaArrowLeft /></button>
                </div> */}
                <img className="w-[70px]" src="olxLogo.png" alt="" />
                <h1 className="mt-3 font-medium">Enter Email and Password</h1>
                <form onSubmit={handleLogin} className="flex flex-col w-[70%] mt-7">
                    <input type='email' placeholder="Email" onChange={(e)=>setEmail(e.target.value)} className=" border-solid border border-black  rounded-md h-[34px] p-2 text-sm"/>
                    <input  type='password' placeholder="Password" onChange={(e)=>setPassword(e.target.value)} className=" border-solid border border-black mt-4 rounded-md h-[34px] p-2 text-sm" />
                    <button  className=" text-white font-bold  w-[100%] rounded-lg mt-6 h-[34px]" style={{ backgroundColor: "#003034" }}>Login</button>
                </form>
                <br />
                <a className="text-sm underline cursor-pointer hover:text-blue-600">Create Account</a>
            </div>

        </div>
    )
}

export default Login