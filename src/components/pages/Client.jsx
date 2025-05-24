import Image from "next/image"


export default function Client() {
    return (
        <section className="flex justify-center items-center py-28" id="klien">
            <div className="container mx-auto md:w-[85%] p-6">
                <div className="realtive flex flex-col bg-abumuda justify-center items-center overflow-hidden rounded-t-lg">
                    <div className="relative flex flex-col w-full bg-black left-0 p-6 md:px-24 md:py-12 bg-[url(https://images.pexels.com/photos/7841486/pexels-photo-7841486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)] bg-cover bg-no-repeat">
                        <div className="absolute inset-0 bg-black/80 z-10" />
                        <div className="md:w-[80%] text-white z-30 ">
                            <h1 className="text-3xl font-style md:leading-[1.4] md:text-4xl font-medium mb-4 ">
                                Klien Kawan Legal
                            </h1>
                            <p className="leading-[1.6] text-sm text-justify mb-4">
                                Kawan Legal telah melayani kebutuhan Klien dalam bisnis dan menempatkan
                                hukum sebagai bagian strategis untuk meningkatkan pertumbuhan dan menjaga keberlanjutan 
                                bisnis Klien maupun sebagai upaya penyelesaian yang solutif terhadap permasalahan perizinan 
                                yang dihadapi Klien. Dari sekian banyak Klien Legalin beberapa diantaranya, yaitu:
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 text-white z-30">
                            <ul className="">
                                {
                                    CLIENT1.map((item,idx) => (
                                        <li key={idx}>{item}</li>
                                    ))
                                }
                            </ul>
                            <ul className="">
                                {
                                    CLIENT2.map((item,idx) => (
                                        <li key={idx}>{item}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                     <div className="relative w-full h-[140px] md:h-[400px] overflow-hidden">
                        <Image
                            src="https://images.pexels.com/photos/8112172/pexels-photo-8112172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                            alt="Klien Kawan Legal"
                            fill
                            className="object-cover object-top rounded-b-lg"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

const CLIENT1 = [
    "PT. BINKEI KINDENKO ENGGINEERING INDONESIA",
    "PT. ACSET INDONUSA, TBK",
    "PT. ATMC PUMP SERVICES",
    "PT. INNOTECH SYSTEMS",
    "PT. INDOPOWER INTERNASIONAL",
    "PT. ENCONA ENGINEERING",
    "PT. JAKARTA AKUARIUM INDONESIA",
    "PT. SACINDO MACHINERY",
    "PT. KLARITY GROUP INDO",
    "PT. GELORA INTI MANDIRI",
]


const CLIENT2= [
    "PT. PRAJA GHUPTA",
    "PT. SWA NUSA MULTIMEDIA",
    "PT. TIDAR NUSANTARA ABADI",
    "PT. ALMAS SATRIA PERKASA",
    "PT. BERKAH MEKAR BERSAMA",
    "PT. BUMI ENERGI PUTRA INDONESIA",
    "PT. WERINAMA JAYA ENERGI",
    "PT. WERINAMA AGRO INTERNASIONAL",
    "PT. USAHA NUSANTARA INTI TERPADU INDONESIA",
    "PT. CIPTA KARYA WATERINDO",
]