// "use client"
// import Image from "next/image";

// export default function Quotes() {
//   return (
//     <section className="relative h-[80vh] bg-[#652126] flex items-center z-50">
//         <div className="container mx-auto">
//             <Image
//                 src="https://images.pexels.com/photos/8112201/pexels-photo-8112201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//                 alt="background"
//                 fill={true}
//                 className="object-cover"
//                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//             />
//             <div className="absolute inset-0 bg-red/60" />
//             <div className="grid grid-cols-1 md:grid-cols-2 ">
//                 <div className="relative bg-black text-left text-white p-6 md:p-24 ">
//                     <h1 className="font-style text-2xl font-bold">
//                         "Kami yakin bahwa kami memiliki keahlian,
//                         pengetahuan, dan pendekatan efisien dalam
//                         memberikan pelayanan hukum terbaik,
//                         menyediakan solusi dan mencapai target
//                         dari klien.”

//                     </h1>
//                     <p className="font-text text-lg md:text-lg my-4">
//                         Kawan Legal
//                     </p>
//                 </div>
//                 <div className=""></div>
//             </div>
//         </div>
//     </section>
//   );
// }

"use client"
import Link from "next/link";
import Image from "next/image";

export default function Quotes() {
  return (
    <section className="relative h-[20rem] my-10 overflow-hidden ml-8 md:ml-28 bg-[#652126] flex items-center rounded-tl-[5rem]">
        <div className="container mx-auto">
            <Image
                src="https://images.unsplash.com/photo-1505663912202-ac22d4cb3707?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="background"
                fill={true}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-red/80" />

            <div className="relative max-w-5xl text-left text-white md:ml-12 px-6 md:px-24">
                <h1 className="font-style text-md md:text-2xl font-bold">
                    "Kami yakin bahwa kami memiliki keahlian,
                    pengetahuan, dan pendekatan efisien dalam
                    memberikan pelayanan hukum terbaik,
                    menyediakan solusi dan mencapai target
                    dari klien.”
                </h1>
                <p className="font-text text-lg md:text-lg my-4">
                    Kawan Legal
                </p>
            </div>

        </div>
        
    </section>
  );
}
