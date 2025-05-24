"use client"
import Link from "next/link";
import Image from "next/image";
export default function Hero() {
  return (
    <section className="relative h-[40rem] overflow-hidden mr-8 md:mr-28 bg-red flex items-center rounded-tr-[2rem]" id="hero">
        <div className="container mx-auto">
            <Image
                src="https://images.pexels.com/photos/8111865/pexels-photo-8111865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="background"
                fill={true}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-red/80" />
            <div className="relative text-left text-white md:ml-12 px-6 md:px-24">
                <div className="max-w-2xl space-y-4">
                    <h1 className="text-3xl md:leading-[1.2] font-style md:text-5xl font-semibold">
                       Pendamping Legal Terpercaya untuk Setiap Langkah Bisnis Anda
                    </h1>
                    <p className="font-text text-md md:text-lg mb-4">
                        Kawan Legal menyediakan layanan hukum terpadu untuk pendirian badan usaha, 
                        perizinan, hingga perlindungan hak kekayaan intelektual.          
                    </p>
                </div>
                <div className="flex flex-col md:flex-row mx-auto mt-6 justify-start gap-2 md:gap-4">
                    <Link href="/#tentang" scroll className="bg-yellow text-black px-6 py-3 rounded-md">
                        Pelajari selengkapnya
                    </Link>
                </div>
            </div>

        </div>
        
    </section>
  );
}
