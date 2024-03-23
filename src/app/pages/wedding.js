import Image from "next/image";
import Gallery from "./galery";
import { useState } from "react";

export default function Wedding() {
    const [name,setName] = useState('')
    const [ucapan,setUcapan] = useState('')


    return (
        <div className="bg-[#F6F2E5]">
            {/* first page */}
            <div className=" pb-7">
                <div className=" mx-3 grid grid-cols-12 content-start text-[#F6F2E5] justify-items-center font-YesevaOne">
                    <div className="bg-[#CEC1BE] relative my-7 col-span-4 w-11/12">
                        <div className=" h-64 z-0 lg:h-screen">
                            <Image
                                src="/2-hal2-tgl 29.jpeg"
                                fill
                                priority
                                style={{
                                    opacity: 0.6,
                                    objectFit: "cover",
                                    objectPosition: '60% 100%'
                                }}
                            />
                        </div>
                        <div className=" drop-shadow-2xl text-center relative text-4xl md:6xl sm:8xl  ">
                            29
                        </div>
                    </div>
                    <div className="relative my-7 bg-[#CEC1BE] col-span-4 w-11/12">
                        <div className="h-64 z-0 lg:h-screen">
                            <Image
                                src="/3-hal2-bulan04.jpeg"
                                fill
                                priority
                                style={{
                                    opacity: 0.6,
                                    objectFit: "cover",
                                    objectPosition: '60% 100%'
                                }}
                            />
                        </div>
                        <div className=" drop-shadow-2xl text-center relative text-4xl md:6xl sm:8xl  ">
                            04
                        </div>
                    </div>
                    <div className="relative my-7 bg-[#CEC1BE] col-span-4 w-11/12">
                        <div className=" h-64 z-0 lg:h-screen">
                            <Image
                                src="/4-hal2-thn24.jpeg"
                                fill
                                priority
                                style={{
                                    opacity: 0.6,
                                    objectFit: "cover",
                                    objectPosition: '60% 100%'
                                }}
                            />
                        </div>
                        <div className=" drop-shadow-2xl text-center relative text-4xl md:6xl sm:8xl  ">
                            24
                        </div>
                    </div>
                </div>
                <div className=" mt-5 grid justify-items-center text-sm text-[#5A4739]" style={{
                    fontWeight: 700
                }}>
                    PAWIWAHAN LAN MEPANDES
                </div>
                <div className=' mt-5 font-daydream grid justify-items-center text-7xl text-[#5A4739]'>
                    Oka & Laras
                </div>
                <div className=' mt-12 grid justify-items-center text-sm text-[#5A4739]' style={{
                    fontWeight: 700
                }}>
                    OM SWASTYASTU
                </div>
                <div className=' mt-3 grid justify-items-center text-center text-sm text-[#5A4739] lg:mx-48' style={{
                    fontWeight: 600
                }}>
                    Atas Asung Kertha Wara Nugraha Ida Sang Hyang Widhi Wasa/Tuhan Yang Maha Esa, perkenankan kai mengundang Bapak/Ibu/Saudara/i pada Upacara Pawiwahan (Pernikahan) dan Mepandes (Potong Gigi) putra-putri kami.
                </div>
            </div>
            {/* Mempelai */}
            <div className="py-9">
                <div className=' mt-12 grid justify-items-center text-lg text-[#5A4739]' style={{
                    fontWeight: 700
                }}>
                    MEMPELAI
                </div>
                <div className=" pt-4 lg:px-[20vw]">
                    <div className=" min-h-[70vh] max-h-full relative lg:h-screen">
                        <Image
                            src="/5-mempelai pria.jpeg"
                            fill
                            priority
                            style={{
                                objectFit: "cover",
                            }}
                        />
                        <div className="absolute bottom-[15px] left-0">
                            <div className="bg-[#CEC1BE] opacity-75 py-[16px] pl-[8px] pr-[20vw] rounded-r-lg">
                                <div className="uppercase text-sm" style={{
                                    fontWeight: 700
                                }}>
                                    Ngurah putu oka harybuana
                                </div>

                                <div className="uppercase text-sm pt-6" style={{
                                    fontWeight: 500
                                }}>
                                    Putra Pertama dari Pasangan
                                </div><div className="uppercase text-sm" style={{
                                    fontWeight: 500
                                }}>
                                    I Ngurah Mayun & Ni Luh Putu Masyeni
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Pengantin */}
            <div className="py-9">
                <div className=' uppercase mt-12 grid justify-items-center text-lg text-[#5A4739]' style={{
                    fontWeight: 700
                }}>
                    Pengantin
                </div>
                <div className=" pt-4 lg:px-[20vw]">
                    <div className=" min-h-[70vh] max-h-full relative lg:h-screen">
                        <Image
                            src="/6-mempelai wanita.jpeg"
                            fill
                            priority
                            style={{
                                objectFit: "cover",
                                objectPosition: '50% 20%'
                            }}
                        />
                        <div className="absolute bottom-[15px] left-0">
                            <div className="bg-[#CEC1BE] opacity-75 py-[16px] pl-[8px] pr-[20vw] rounded-r-lg">
                                <div className="uppercase text-sm" style={{
                                    fontWeight: 700
                                }}>
                                    gusti kadek natia larasati
                                </div>

                                <div className="uppercase text-sm pt-6" style={{
                                    fontWeight: 500
                                }}>
                                    Putri Kedua dari Pasangan
                                </div><div className="uppercase text-sm" style={{
                                    fontWeight: 500
                                }}>
                                    Gusti Putu Armada & Ketut Praba Wijayanti
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* sane Mempendes */}
            <div className=" py-9 grid justify-center">
                <div className=" pb-6 uppercase text-lg text-center text-[#5A4739]" style={{
                    fontWeight: 700
                }}>
                    Sane Mempendes
                </div>
                <div className=" capitalize text-lg text-center text-[#5A4739]" style={{
                    fontWeight: 500
                }}>
                    Ni Made Ayu Agatha Widya L.
                </div>
                <div className=" capitalize text-lg text-center text-[#5A4739]" style={{
                    fontWeight: 500
                }}>
                    I Putu Ngurah Rama Aldi S.
                </div>
            </div>
            {/* date */}
            <div className=" py-9">
                <div className=" uppercase text-lg text-center text-[#5A4739]" style={{
                    fontWeight: 700
                }}>
                    Tanggal dan Waktu
                </div>
                <div className=" bg-white mx-6 mt-3 mb-6">
                    <div className="pt-6 uppercase text-center text-[#5A4739]" style={{
                        fontWeight: 700
                    }}>
                        Natab & mepandes
                    </div>
                    <div className=" mx-3 grid grid-cols-12 content-start text-[#F6F2E5] justify-items-center font-YesevaOne">
                        <div className="relative my-7 bg-white col-span-4 w-11/12">
                            <div className=" h-48 z-0 lg:h-[70vh]">
                                <Image
                                    src="/7-hal6-tgl29.jpeg"
                                    fill
                                    priority
                                    style={{
                                        objectFit: "cover",
                                        objectPosition: '30% 100%'
                                    }}
                                />
                            </div>
                            <div className="absolute bottom-[-20px] z-10 inset-x-0 box-shadow-2xl text-center  text-4xl md:6xl sm:8xl  ">
                                29
                            </div>
                            <div className="absolute bottom-[-24px] z-0 opacity-20 left-2 right-0 box-shadow-2xl text-center text-black text-4xl md:6xl sm:8xl  ">
                                29
                            </div>
                        </div>
                        <div className="relative my-7 bg-white col-span-4 w-11/12">
                            <div className=" h-48 z-0 lg:h-[70vh]">
                                <Image
                                    src="/8-hal6-bln04.jpeg"
                                    fill
                                    priority
                                    style={{
                                        objectFit: "cover",
                                        objectPosition: '30% 100%',
                                    }}
                                />
                            </div>
                            <div className=" absolute bottom-[-20px] inset-x-0 z-10 text-center text-4xl md:6xl sm:8xl  ">
                                04
                            </div>
                            <div className="absolute bottom-[-24px] z-0 opacity-20 left-2 right-0 box-shadow-2xl text-center text-black text-4xl md:6xl sm:8xl  ">
                                04
                            </div>
                        </div>
                        <div className="relative my-7 bg-white col-span-4 w-11/12">
                            <div className=" h-48 z-0 lg:h-[70vh]">
                                <Image
                                    src="/9-hal6-thn24.jpeg"
                                    fill
                                    priority
                                    style={{
                                        objectFit: "cover",
                                        objectPosition: '30% 100%'
                                    }}
                                />
                            </div>
                            <div className=" absolute bottom-[-20px] inset-x-0 z-10 drop-shadow-2xl text-center text-4xl md:6xl sm:8xl  ">
                                24
                            </div>
                            <div className="absolute bottom-[-24px] z-0 opacity-20 left-2 right-0 box-shadow-2xl text-center text-black text-4xl md:6xl sm:8xl  ">
                                24
                            </div>
                        </div>
                    </div>
                    <div className=" pt-1 text-center text-[#5A4739]" style={{
                        fontWeight: 500
                    }}>
                        Senin
                    </div>
                    <div className=" pt-1 text-center text-[#5A4739]" style={{
                        fontWeight: 500
                    }}>
                        29 April 2024
                    </div>
                    <div className=" pt-1 text-center text-[#5A4739]" style={{
                        fontWeight: 500
                    }}>
                        12.00 - 15.00 WITA
                    </div>
                    <div className=" px-2 pt-1 text-center text-[#5A4739]" style={{
                        fontWeight: 500
                    }}>
                        Jl. Raya Denpasar, Br. Kuwum, Desa Kuwum, Mengwi
                    </div>
                    <div className=" pt-9 uppercase text-center text-[#5A4739]" style={{
                        fontWeight: 700
                    }}>
                        Natab & mepandes
                    </div>
                    <div className=" mx-3 grid grid-cols-12 content-start text-[#F6F2E5] justify-items-center font-YesevaOne">
                        <div className="relative my-7 bg-white col-span-4 w-11/12">
                            <div className=" h-48 z-0 lg:h-[70vh]">
                                <Image
                                    src="/10-hal6-tgl30.jpeg"
                                    fill
                                    priority
                                    style={{
                                        objectFit: "cover",
                                        objectPosition: '30% 80%'
                                    }}
                                />
                            </div>
                            <div className="absolute bottom-[-20px] z-10 inset-x-0 box-shadow-2xl text-center  text-4xl md:6xl sm:8xl  ">
                                30
                            </div>
                            <div className="absolute bottom-[-24px] z-0 opacity-20 left-2 right-0 box-shadow-2xl text-center text-black text-4xl md:6xl sm:8xl  ">
                                30
                            </div>
                        </div>
                        <div className="relative my-7 bg-white col-span-4 w-11/12">
                            <div className=" h-48 z-0 lg:h-[70vh]">
                                <Image
                                    src="/11-hal6-bln04.jpeg"
                                    fill
                                    priority
                                    style={{
                                        objectFit: "cover",
                                        objectPosition: '30% 90%'
                                    }}
                                />
                            </div>
                            <div className=" absolute bottom-[-20px] inset-x-0 z-10 text-center text-4xl md:6xl sm:8xl  ">
                                04
                            </div>
                            <div className="absolute bottom-[-24px] z-0 opacity-20 left-2 right-0 box-shadow-2xl text-center text-black text-4xl md:6xl sm:8xl  ">
                                04
                            </div>
                        </div>
                        <div className="relative my-7 bg-white col-span-4 w-11/12">
                            <div className=" h-48 z-0 lg:h-[70vh]">
                                <Image
                                    src="/12-hal6-thn24.jpeg"
                                    fill
                                    priority
                                    style={{
                                        objectFit: "cover",
                                        objectPosition: '30% 100%'
                                    }}
                                />
                            </div>
                            <div className=" absolute bottom-[-20px] inset-x-0 z-10 drop-shadow-2xl text-center text-4xl md:6xl sm:8xl  ">
                                24
                            </div>
                            <div className="absolute bottom-[-24px] z-0 opacity-20 left-2 right-0 box-shadow-2xl text-center text-black text-4xl md:6xl sm:8xl  ">
                                24
                            </div>
                        </div>
                    </div>
                    <div className=" pt-1 text-center text-[#5A4739]" style={{
                        fontWeight: 500
                    }}>
                        Senin
                    </div>
                    <div className=" pt-1 text-center text-[#5A4739]" style={{
                        fontWeight: 500
                    }}>
                        29 April 2024
                    </div>
                    <div className=" pt-1 text-center text-[#5A4739]" style={{
                        fontWeight: 500
                    }}>
                        12.00 - 15.00 WITA
                    </div>
                    <div className=" px-2 pt-1 text-center text-[#5A4739]" style={{
                        fontWeight: 500
                    }}>
                        Jl. Raya Denpasar, Br. Kuwum, Desa Kuwum, Mengwi
                    </div>
                    <div className='grid justify-center pt-6 pb-6'>
                        <button onClick={() => {
                        }} className='bg-[#CEC1BE] text-white rounded-3xl'>
                            <div className=' uppercase mx-6 my-3 font-semibold'>
                                Google Maps
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            {/* loca Story 1 */}
            <div>
                <div className=" pb-6 font-BrittanySignature text-4xl text-[#706A62] text-center">
                    Our Love Story
                </div>
                <div className="grid grid-cols-2 gap-4 px-8">
                    <div className="bg-white">
                        <div className="px-2 pt-2">

                            <div className=" relative h-48 lg:h-[70vh]">
                                <Image
                                    src="/97d91701-8093-4002-ac60-a78317d26d36.jpg"
                                    fill
                                    priority
                                    style={{
                                        objectFit: "cover",
                                        objectPosition: '30% 100%'
                                    }}
                                />
                            </div>
                        </div>
                        <div className="text-[#706A62] text-center pt-3">
                            The Day We Met
                        </div>
                        <div className="text-[#706A62] text-center pt-[1px]">
                            03-06-2022
                        </div>
                    </div>
                    <div className="bg-white">
                        <div className="px-2 pt-2">

                            <div className=" relative h-48 lg:h-[70vh]">
                                <Image
                                    src="/CB903E15-D8A5-4BF4-8CF2-9CB263B97705.jpg"
                                    fill
                                    priority
                                    style={{
                                        objectFit: "cover",
                                        objectPosition: '30% 100%'
                                    }}
                                />
                            </div>
                        </div>
                        <div className="text-[#706A62] text-center pt-3">
                            The Day I Said Yes
                        </div>
                        <div className="text-[#706A62] text-center pt-[1px]">
                            20-08-2022
                        </div>
                    </div>
                    <div className="bg-white">
                        <div className="px-2 pt-2">

                            <div className=" relative h-48 lg:h-[70vh]">
                                <Image
                                    src="/IMG_2238.png"
                                    fill
                                    priority
                                    style={{
                                        objectFit: "cover",
                                        objectPosition: '50% 70%'
                                    }}
                                />
                            </div>
                        </div>
                        <div className="text-[#706A62] text-center pt-3">
                            Our First Date
                        </div>
                        <div className="text-[#706A62] text-center pt-[1px]">
                            08-08-2022
                        </div>
                    </div>
                    <div className="bg-white">
                        <div className="px-2 pt-2">

                            <div className=" relative h-48 lg:h-[70vh]">
                                <Image
                                    src="/IMG_2496.PNG"
                                    fill
                                    priority
                                    style={{
                                        objectFit: "cover",
                                        objectPosition: '30% 50%'
                                    }}
                                />
                            </div>
                        </div>
                        <div className="text-[#706A62] text-center pt-3">
                            First Family Meeting

                        </div>
                        <div className="text-[#706A62] text-center pt-[1px]">
                            28-09-2023
                        </div>
                    </div>
                    <div className="bg-white">
                        <div className="px-2 pt-2">

                            <div className=" relative h-48 lg:h-[70vh]">
                                <Image
                                    src="/IMG_1473.png"
                                    fill
                                    priority
                                    style={{
                                        objectFit: "cover",
                                        objectPosition: '30% 80%'
                                    }}
                                />
                            </div>
                        </div>
                        <div className="text-[#706A62] text-center pt-3">
                            Our First Photo

                        </div>
                        <div className="text-[#706A62] text-center pt-[1px]">
                            14-08-2022
                        </div>

                    </div>
                    <div className="bg-white">
                        <div className="px-2 pt-2">

                            <div className=" relative h-48 lg:h-[70vh]">
                                <Image
                                    src="/1B5288D6-FEBC-4273-83A8-ED3591B0942D.jpg"
                                    fill
                                    priority
                                    style={{
                                        objectFit: "cover",
                                        objectPosition: '30% 100%'
                                    }}
                                />
                            </div>
                        </div>
                        <div className="text-[#706A62] text-center pt-3">
                            A Ring from You

                        </div>
                        <div className="text-[#706A62] text-center pt-[1px]">
                            22-12-2023
                        </div>

                    </div>
                </div>
            </div>
            {/* doa dan ucapan */}
            <div className=" h-32 bg-gradient-to-b from-[#F6F2E5] to-[#828181]" />
            <div className=" bg-[#121010]">
                <div className=" relative h-screen lg:h-[100vh]">
                    <div>
                        <Image
                            src="/25-doa dan ucapan.jpeg"
                            fill
                            priority
                            style={{
                                objectFit: "cover",
                                objectPosition: '30% 50%',
                                opacity: 0.5
                            }}
                        />
                    </div>
                    <div className="absolute grid grid-rows-12 h-screen lg:h-[100vh] top-0 left-0 right-0">
                        <div className=" pt-12 text-white text-lg font-bold text-center">
                            DOA DAN UCAPAN
                        </div>
                        <div className="bg-[#FFFFFF] row-span-11 m-12 opacity-60 rounded-3xl ">
                        </div>
                        <div className=" absolute grid justify-center grid-rows-12 h-screen lg:h-[100vh] lg:justify-start lg:pl-12 top-0 left-0 right-0">
                            <div />
                            <div className="row-span-11 m-12 rounded-3xl ">
                                <div className=" bg-white mt-10 opacity-100 w-[65vw] rounded-xl lg:w-[15vw]">
                                    <input placeholder={'Nama'} value={name} onChange={(e)=>{setName(e.target.input)}} className="text-black pl-4 lg:py-[2px] w-full rounded-xl"/>
                                </div>
                                <div className=" bg-white mt-5 opacity-100 w-[65vw] rounded-xl lg:w-[30vw]">
                                    <input placeholder={'Ucapan'} value={ucapan} onChange={(e)=>{setUcapan(e.target.input)}} className="text-black pl-4 pt-2 pb-10 w-full rounded-xl "/>
                                </div>
                                <div className=" bg-[#6F6F6F] justify-start mt-5 opacity-100 w-[15vw] rounded-2xl">
                                    <div onClick={()=>{}} className="text-white py-1 text-center cursor-pointer">
                                        Kirim
                                    </div>
                                </div>
                                {/* ucapan */}
                                <div className="pt-5">
                                   <div className=" text-black text-sm">
                                    {/* TODO: need to make this responsive */}
                                        <span className="font-bold">Name</span> Ucapan
                                   </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" h-32 bg-gradient-to-b from-[#828181] to-[#F6F2E5]" />
            {/* Galery */}
            <div className=" pt-11">
                <div className=" pb-6 font-BrittanySignature text-4xl text-[#706A62] text-center">
                    Our Galery
                </div>
                <Gallery />
            </div>

            <div className=" h-32 bg-gradient-to-b  from-[#F6F2E5] to-[#666666]" />
            <div className="bg-[#EBEBEB]">
                <div className=" relative h-screen lg:h-[100vh]">
                    <div>
                        <Image
                            src="/26-wedding gift.jpeg"
                            fill
                            priority
                            style={{
                                objectFit: "cover",
                                objectPosition: '30% 20%',
                                opacity: 0.8
                            }}
                        />
                    </div>
                    <div className="absolute grid grid-rows-12 h-screen lg:h-[100vh] top-0 left-0 right-0">
                        <div className=" row-span-1 pt-6 text-white text-lg font-bold text-center">
                            WEDDING GIFT
                        </div>
                        <div className=" row-span-1 mx-12 mt-2 text-white text-sm font-semibold text-center">
                            Doa Restu Anda merupakan karunia yang sangat berarti bagi kami. Kehadiran Anda tentu kami sangat harapkan.
                        </div>
                        <div className=" row-span-1 mx-12 self-end text-white text-sm font-semibold text-center">
                            Dan jika memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi hadiah melalui :
                        </div>
                        <div className=" relative mt-8 mx-16 row-span-5">

                            <div className="bg-white absolute top-0 left-0 right-0 bottom-0 opacity-50">
                            </div>
                            <div className="absolute top-0 left-0 right-0 bottom-0">
                                <div className="grid grid-rows-12">

                                    <div className="text-[#5A4739] mt-4 row-span-3 px-3 font-semibold text-center">
                                        Mandiri - 1450014046391
                                        A.n Gusti Kadek Natia Larasati
                                    </div>
                                    <div className="text-[#5A4739] mt-3 row-span-3 px-3 font-semibold text-center">
                                        LinkAja - 0821-2698-1101
                                        A.n Ngurah Putu Oka Harybuana
                                    </div>
                                    <div className="text-[#5A4739] mt-3 row-span-3 px-3 font-semibold text-center">
                                        Alamat Pengiriman Hadiah Fisik:
                                        Mutiara Asih Village B3, Jalan Bina Asih II, Jati Asih, Jatiasih, Kota Bekasi, 17423
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" row-span-2 mx-12 self-end text-white text-sm font-semibold text-center">
                            Merupakan sebuah kehormatan dan kebahagian bag kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu. Atas kehadirannya kami ucapkan terima kasih.
                        </div>
                        <div className=" row-span-1 mt-4 mx-4 grid grid-cols-12 gap-4 justify-center">
                            <div className="bg-[#6F6F6F] rounded-xl py-3 col-span-3 ">
                                <div className="text-center font-Sanchez text-lg">
                                    00
                                </div>
                                <div className="text-center font-Sanchez text-lg">
                                    Hari
                                </div>
                            </div>
                            <div className="bg-[#6F6F6F] rounded-xl py-3 col-span-3">
                                <div className="text-center font-Sanchez text-lg">
                                    00
                                </div>
                                <div className="text-center font-Sanchez text-lg">
                                    Hari
                                </div>
                            </div>
                            <div className="bg-[#6F6F6F] rounded-xl py-3 col-span-3">
                                <div className="text-center font-Sanchez text-lg">
                                    00
                                </div>
                                <div className="text-center font-Sanchez text-lg">
                                    Hari
                                </div>
                            </div>
                            <div className="bg-[#6F6F6F] rounded-xl py-3 col-span-3 ">
                                <div className="text-center font-Sanchez text-lg">
                                    00
                                </div>
                                <div className="text-center font-Sanchez text-lg">
                                    Hari
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}