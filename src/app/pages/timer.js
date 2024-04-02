"use client";
import { useEffect, useState } from "react"


export const Timer = () => {
    const [partyTime, setPartyTime] = useState(false);
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const target = new Date("4/30/2024 12:00:00");

        const interval = setInterval(() => {
            const now = new Date();
            const difference = target.getTime() - now.getTime();
            const d = Math.floor(difference / (1000 * 60 * 60 * 24));
            setDays(d);

            const h = Math.floor(
                (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            setHours(h);

            const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            setMinutes(m);

            const s = Math.floor((difference % (1000 * 60)) / 1000);
            setSeconds(s);

            if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
                setPartyTime(true);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    
    return (
        <>
            <div className="bg-[#6F6F6F] rounded-xl py-3 col-span-3 ">
                <div className="text-center font-Sanchez text-lg">
                    {days}
                </div>
                <div className="text-center font-Sanchez text-lg">
                    Hari
                </div>
            </div>
            <div className="bg-[#6F6F6F] rounded-xl py-3 col-span-3">
                <div className="text-center font-Sanchez text-lg">
                    {hours}
                </div>
                <div className="text-center font-Sanchez text-lg">
                    Jam
                </div>
            </div>
            <div className="bg-[#6F6F6F] rounded-xl py-3 col-span-3">
                <div className="text-center font-Sanchez text-lg">
                    {minutes}
                </div>
                <div className="text-center font-Sanchez text-lg">
                    Menit
                </div>
            </div>
            <div className="bg-[#6F6F6F] rounded-xl py-3 col-span-3 ">
                <div className="text-center font-Sanchez text-lg">
                    {seconds}
                </div>
                <div className="text-center font-Sanchez text-lg">
                    Detik
                </div>
            </div>
        </>
    )
}
