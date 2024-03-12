import Image from "next/image"

export default function Welcome({ setOpen }) {
    return (
        <>
            <Image
                src="/KJP-9922_websize-1-1250x1000.jpg"
                fill
                priority
                style={{
                    objectFit: "cover",
                    objectPosition: '30% 100%'
                }}
            />
            <div className=" relative grid grid-rows-12 h-screen justify-items-center">
                <div className=" row-span-4">
                </div>
                <div className="row-span-4 grid grid-rows-12 justify-items-center">
                    <div className=" row-span-2" />
                    <div className='row-span-3 flex items-start text-sm tracking-wide' style={{
                        fontWeight: 600
                    }}>
                        PAWIWAHAN LAN MEPANDES
                    </div>
                    <div className='font-daydream text-7xl'>
                        Oka & Laras
                    </div>
                </div>
                <div className=' row-span-3 grid content-between justify-items-center'>
                    <div className=''>
                        Yth. Kepada Bapak/Ibu/Saudara/i
                    </div>
                    <div className='' style={{
                        fontWeight: 600
                    }}>
                        Bagas ('Perlu DIganti')
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
                    <div className='text-center text-sm'>
                        Mohon maaf apabila terdapat kesalahan penulisan nama/gelar
                    </div>
                </div>
            </div>
        </>
    )
}