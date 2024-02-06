import { useContext, useState } from "react";
import { AuthContext } from "../../firebase/context";
import { collection, addDoc } from 'firebase/firestore'
import {useNavigate} from 'react-router-dom'
import { db ,storage } from '../../firebase/config'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';





function AddProduct() {

    const [productName,setProductName]= useState('')
    const [price,setPrice] = useState()
    const [category,setCategory] = useState('')
    const [brand,setBrand]=useState('')
    const [location,setLocation] = useState('')
    const [description,setDescription] = useState('')
    const [image,setImage] = useState(null)

    const Navigate = useNavigate()
    const {user} = useContext(AuthContext)
    const UserCollectionRef = collection(db,'Products')
    const date = new Date()



        const createProduct = async(e)=>{
            e.preventDefault()
            const parsedPrice = parseFloat(price);
            try{
                const storageRef = ref(storage, `/images/${image.name}`);
                await uploadBytes(storageRef, image);
                const downloadURL = await getDownloadURL(storageRef);

                await addDoc(UserCollectionRef,{
                    productName:productName,
                    price:parsedPrice,
                    category:category,
                    brand:brand,
                    location:location,
                    description:description,
                    url:downloadURL,
                    userId:user.uid,
                    date:date.toString()
                })
                Navigate('/');
    
            }catch(error){
                console.log(error)
            }


        }



    return (
        <div className="flex items-center justify-center py-[30px] bg-slate-200 ">

            <div className=" w-[50%] bg-slate-50 flex flex-col py-[50px] items-center rounded-lg justify-center  " >
                
                <h1 className="mt-3 font-medium">Sell Product</h1>
                <form onSubmit={createProduct} className="flex flex-col w-[70%] mt-7">
                    <input onChange={(e)=>setProductName(e.target.value)} className=" border-solid border border-black  rounded-md h-[34px] p-2 text-sm" type="text" placeholder="Product name" />
                    <input onChange={(e)=>setPrice(e.target.value)} className=" border-solid border border-black mt-4 rounded-md h-[34px] p-2 text-sm" type="number" placeholder="Price" />
                    <input onChange={(e)=>setCategory(e.target.value)} className=" border-solid border border-black mt-4 rounded-md h-[34px] p-2 text-sm" type="text" placeholder="Category" />
                    <input onChange={(e)=>setBrand(e.target.value)} className=" border-solid border border-black mt-4 rounded-md h-[34px] p-2 text-sm" type="text" placeholder="Brand" />
                    <input onChange={(e)=>setLocation(e.target.value)} className=" border-solid border border-black mt-4 rounded-md h-[34px] p-2 text-sm" type="text" placeholder="Location" />
                    <textarea onChange={(e)=>setDescription(e.target.value)} className=" border-solid border border-black mt-4 rounded-md h-[34px] p-2 text-sm" type="text" placeholder="Description"></textarea>
                    <span className="mt-2 text-xs">Image</span>
                    <input onChange={(e)=>{
                        setImage(e.target.files[0])
                    }} className=" border-solid border border-black  rounded-md h-[34px] px-1 py-[3px] text-sm" type="file" />
                    <img src={image ? URL.createObjectURL(image):''} className="w-[200px] h-[200px] pt-4" alt="CHOOSE IMAGES"></img>
                   <button className=" text-white font-bold  w-[100%] rounded-lg mt-6 h-[34px]" style={{ backgroundColor: "#003034" }}>Create</button><br />
                    
                </form>
                <a className="text-sm underline cursor-pointer hover:text-blue-600">Login With Account</a>
            </div>

        </div>
    )

}

export default AddProduct