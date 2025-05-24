import Image from "next/image"
export default function Team() {
    return (
        <section className="flex justify-center items-center md:h-[40rem] my-20 px-6" id="timhukum">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center ">
                    <div className="overflow-hidden rounded-lg">
                        <Image 
                            src="/images/tim-kl.png" 
                            width={550} 
                            height={550} 
                            alt="Kawan Legal" 
                            className="rounded-lg"
                            />
                    </div>
                    <div className="text-black flex flex-col max-w-4xl mb-8 md:pr-36">
                        <h1 className="text-3xl font-style md:leading-[1.4] md:text-4xl text-black font-medium mb-6">
                            Tim Hukum Berpengalaman dan Berdedikasi
                        </h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="leading-[1.6] text-sm  mb-4">
                                <h6 className="text-lg font-bold mb-2">Berdiri dari sebelah kiri: </h6> 
                                <ul className="list-disc ml-4 space-y-2">
                                    <li>Dimitrianda Prameswara Zulkarnain SH</li>
                                    <li>Zeno Putra Elwin SH</li>
                                    <li>Fadhiil Fadlullah SH,</li>
                                    <li>Risky Faisal Pirdaus SH.</li>
                                </ul>
                            </div>
                            <div className="leading-[1.6] text-sm mb-4">
                                <h6 className="text-lg font-bold mb-2">Duduk dari sebelah kiri: </h6> 
                                <ul className="list-disc ml-4 space-y-2">
                                    <li>Muhamad Rafqi Mizi SH</li>
                                    <li>Fikra Abdul Razaq Faraid Sabban SH</li>
                                    <li>Jalal Wangsi SH</li>
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </section>
    )
}