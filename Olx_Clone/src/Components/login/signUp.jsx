import { useState, } from "react";
import { FaArrowLeft } from "react-icons/fa";
// import { FirebaseContext } from "../../firebase/context";
import { auth } from '../../firebase/config'
import { db } from '../../firebase/config'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { collection, addDoc } from 'firebase/firestore'
import {useNavigate} from 'react-router-dom'

function SignUp() {
    const Navigate = useNavigate()
    const [userName, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const usersCollectionRef = collection(db, "Users");

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(userName)
        try {
           await createUserWithEmailAndPassword(auth, email, password).then((userCredential)=>{
            const user = userCredential.user;
            updateProfile(user,{displayName:userName}).then(()=>{
                addDoc(usersCollectionRef, { name: userName, email: email, password: password, userUid:user.uid }).then(()=>{
                    Navigate('/login')
                })
            })
           })
           
            
            
        } catch (error) {
            console.error("Error creating user:", error.code, error.message);
        }


    }

    return (
        <div className="flex items-center justify-center h-svh bg-slate-200 relative">

            <div className="h-[85%] w-[40%] bg-slate-50 flex flex-col items-center rounded-lg justify-center relative " >
                <div className="absolute top-0 left-0 mt-2 mr-2 pl-2">
                    <button><FaArrowLeft /></button>
                </div>
                <img className="w-[70px]" src="olxLogo.png" alt="" />
                <h1 className="mt-3 font-medium">Create An Account</h1>
                <form onSubmit={handleSubmit} className="flex flex-col w-[70%] mt-7">
                    <input className=" border-solid border border-black  rounded-md h-[34px] p-2 text-sm" type="text" placeholder="Username" value={userName} onChange={(e) => setUsername(e.target.value)} />
                    <input className=" border-solid border border-black mt-4 rounded-md h-[34px] p-2 text-sm" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input className=" border-solid border border-black mt-4 rounded-md h-[34px] p-2 text-sm" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button className=" text-white font-bold  w-[100%] rounded-lg mt-6 h-[34px]" style={{ backgroundColor: "#003034" }}>Create</button><br />
                </form>

                <a className="text-sm underline cursor-pointer hover:text-blue-600">Login With Account</a>
            </div>

        </div>
    )


}

export default SignUp