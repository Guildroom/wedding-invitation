import { useEffect, useState } from "react"
import axios from 'axios';


export const Ucapan = () => {
    const [apiResult,setApiResult] = useState([])
    const [name, setName] = useState('')
    const [ucapan, setUcapan] = useState('')

    const getUcapan = async() =>{
        await axios.get('https://wedding-api-two.vercel.app/comment/') 
        .then(function (response) {
           setApiResult(response.data)
        })
        .catch(function (error) {
        console.log(error);
        });
    }

    const postUcapan = async() =>{
        const data = {
            name: name,
            comment: ucapan
          }
        console.log(data)
        await axios.post('https://wedding-api-two.vercel.app/comment/',data) 
        .then(function (response) {
            getUcapan()
            setName('')
            setUcapan('')
        })
        .catch(function (error) {
        console.log(error);
        });
    }

    console.log(name)
    console.log(apiResult)
    useEffect(()=>{
        getUcapan()
    },[])
    return (
        <div className="">
            <div className=" pt-12 text-white text-lg font-bold text-center">
                DOA DAN UCAPAN
            </div>
            <div className="bg-[#FFFFFF] row-span-11 my-12 mx-8 opacity-60 rounded-3xl ">
            </div>
            <div className=" absolute grid justify-center grid-rows-12 h-screen lg:h-[100vh] lg:justify-start lg:pl-12 top-0 left-0 right-0">
                <div />
                <div className="row-span-11 m-12 rounded-3xl ">
                    <div className=" bg-white mt-10 opacity-100 w-[65vw] rounded-xl lg:w-[15vw]">
                        <input placeholder={'Nama'} value={name} onChange={(e) => { setName(e.target.value) }} className="text-black pl-4 lg:py-[2px] w-full rounded-xl" />
                    </div>
                    <div className=" bg-white mt-5 opacity-100 w-[65vw] rounded-xl lg:w-[30vw]">
                        <input placeholder={'Ucapan'} value={ucapan} onChange={(e) => { setUcapan(e.target.value) }} className="text-black pl-4 pt-2 pb-10 w-full rounded-xl " />
                    </div>
                    <div className=" bg-[#6F6F6F] justify-start mt-5 opacity-100 w-[15vw] rounded-2xl">
                        <div onClick={() => { postUcapan()}} className="text-white py-1 text-center cursor-pointer">
                            Kirim
                        </div>
                    </div>
                    {/* ucapan */}
                    <div className="mt-4 p-2 opacity-55 h-[50%]  w-[65vw] overflow-scroll rounded-lg bg-white">
                        {apiResult && apiResult.length>0?
                            apiResult.map((data)=>{
                                return(
                                    <div className=" text-black text-wrap text-sm">
                                        {/* TODO: need to make this responsive */}
                                        <span className="font-bold">{data.name}</span> {data.comment}
                                    </div>
                                )
                            })
                        
                        :null}
                    </div>
                </div>
            </div>
        </div>
    )
}