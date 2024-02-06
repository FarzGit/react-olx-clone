import { FaRegHeart } from 'react-icons/fa'

import { db } from '../../firebase/config'
import { collection, getDocs } from 'firebase/firestore'
import { useState, useEffect,useContext } from 'react'
import { postContext } from "../../firebase/postContext";
import { useNavigate } from 'react-router-dom';


function Products() {
    const navigate = useNavigate()
    const {setPostDetails} = useContext(postContext)
    const productCollectionref = collection(db, 'Products')
    const [product, setProduct] = useState([])

    useEffect(() => {
        const fetch = async () => {
            try {
                const data = await getDocs(productCollectionref)
                console.log(data)

                setProduct(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
            } catch (error) {
                console.log(error)
            }
        }

        fetch()
    }, [])

        const productDetails =(obj)=>{
                setPostDetails(obj)
                navigate('/productDetails',{state:{obj:obj}})
        }


    function formatDate(dateString) {
        const options = { month: 'short', day: 'numeric', year: 'numeric' };
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('en-US', options).format(date);
    }


    return (
        <>

        {product.map((obj,index)=>(


        <div onClick={()=>productDetails(obj)} key={index} className=' relative border-2 w-[270px] h-[265px] mt-4  ml-2 cursor-pointer'>
            <div className='absolute top-0 right-0 w-[35px] h-[35px] bg-white rounded-full flex items-center justify-center mt-1 mr-1 '>
                <FaRegHeart size={20} />
            </div>

            <div className='h-[180px] pt-[2px] pl-[2px] pr-[2px] '>
                <img className='h-[180px] w-[270px] ' src={obj.url} alt=''/>
            </div>

            <div className=' pt-2 pl-3 pr-3 '>
                <span className='font-bold'>&#8377; {obj.price}</span>
                <br />
                <p className='font-medium text-gray-500 text-sm'>{obj.productName}</p>
            </div>
            <div className='text-xs pl-3 pr-3 pt-1 flex justify-between'>
                <span>{obj.location}</span>
                <span>{formatDate(obj.date)}</span>
            </div>
        </div>
         ))}

</>
    )
}

export default Products
