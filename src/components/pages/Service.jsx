'use client'
import { SERVICES } from "@/lib/data"
import Image from "next/image"

export default function Service() {
    return (
        <section className="relative flex flex-col justify-center items-center p-6 md:mb-20 z-20 bg-[url(https://images.unsplash.com/photo-1505663912202-ac22d4cb3707?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-no-repeat">
            <div className="absolute inset-0 bg-red/80 !z-10" />
            <div className="container mx-auto md:w-[85%] z-30 py-12" id="layanan">
                <div className="relative flex flex-col bg-red rounded-xl py-4 md:py-16 md:px-12 md:mt-[-20rem] mb-8 overflow-hidden bg-[url(https://images.pexels.com/photos/7841486/pexels-photo-7841486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)] bg-cover bg-no-repeat">
                    <div className="absolute inset-0 bg-black/75 z-10" />
                    <div className="p-6 md:w-[40%] text-black flex flex-col max-w-4xl mb-4  z-30">
                        <h1 className="text-3xl font-style md:leading-[1.4] md:text-4xl text-white font-medium">
                            Layanan Legalitas Komprehensif untuk Bisnis Anda
                        </h1>
                        {/* <p className="leading-[1.6] text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl aliquet sed leo sollicitudin 
                            donec magna. Tellus eu ullamcorper donec eget. Dolor dictum nibh aliquam nunc mattis amet       
                        </p> */}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 p-6 gap-4 md:gap-8 z-30">
                        {
                            SERVICES.map((item) =>(
                                <div 
                                    key={item.id}
                                    className="flex flex-col justify-center space-y-2 bg-white py-8 px-6 md:p-8 rounded-xl w-full transform transition-transform duration-300   hover:-translate-y-2">
                                    {/* <Image src={item.image} alt="law" width={40} height={40} /> */}
                                    <h1 className="text-md text-red font-style font-bold">{item.name}</h1>
                                    <p className="text-sm text-gray-700 ">
                                        {item.text}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}