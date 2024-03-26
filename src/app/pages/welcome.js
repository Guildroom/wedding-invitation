import Image from "next/image"
import { useEffect, useState } from "react"

export default function Welcome({ setOpen }) {

    const [name, setName] = useState('')

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const nameTemp =searchParams.get('name')
        if(nameTemp){
            setName(nameTemp)
        }
      }, []);


    return (
        <div className="bg-[#121010]">
            <Image className=" opacity-50 object-cover"
                src="/1-cover awal.jpeg"
                fill
                priority
            />
            <div className=" relative grid grid-rows-12 h-screen justify-items-center">
                <div className=" row-span-4">
                </div>
                <div className="row-span-4 grid grid-rows-12 justify-items-center">
                    <div className=" row-span-2" />
                    <div className=' text-white row-span-3 flex items-start text-sm tracking-wide' style={{
                        fontWeight: 600
                    }}>
                        PAWIWAHAN LAN MEPANDES
                    </div>
                    <div className='text-white font-daydream text-7xl'>
                        Oka <span className="font-Dreaming">&</span> Laras
                    </div>
                </div>
                <div className='text-white row-span-3 grid content-between justify-items-center'>
                    <div className=''>
                        Yth. Kepada Bapak/Ibu/Saudara/i
                    </div>
                    <div className='' style={{
                        fontWeight: 600
                    }}>
                        {name}
                    </div>
                    <div className=''>
                        <button onClick={() => {
                            setOpen(true)
                        }} className='bg-white text-black rounded-3xl'>
                            <div className='mx-6 my-3 font-semibold'>
                                Buka Undangan
                            </div>
                        </button>
                    </div>
                    <div className='text-white text-center text-sm'>
                        Mohon maaf apabila terdapat kesalahan penulisan nama/gelar
                    </div>
                </div>
            </div>
        </div>
    )
}