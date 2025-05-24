import Image from "next/image"
export default function About() {
    return (
        <section className="flex justify-center items-center md:h-[40rem] my-20 px-6 md:mb-[20rem]" id="tentang">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 place-items-center ">
                    <div className="text-black flex flex-col max-w-4xl mb-8 md:px-24">
                        <h1 className="text-3xl font-style md:leading-[1.4] md:text-4xl text-black font-medium mb-6">
                            Mitra Strategis Legalitas Usaha Sejak 2017
                        </h1>
                        <p className="leading-[1.6] text-sm text-justify mb-4">
                            <span className="font-bold">Kawan Legal </span>berdiri sejak 10 Agustus 2017 sebagai mitra terpercaya dalam urusan legalitas bisnis. 
                            Berawal dari nama Legalin, kami telah membantu ribuan wirausahawan dan perusahaan dalam pendirian 
                            usaha dan pengurusan izin dengan proses yang cepat, jelas, dan profesional.
                        </p>
                        <p className="leading-[1.6] text-sm text-justify">
                            Kami hadir untuk menjadi <span className="italic">sahabat legalitas</span> Anda. Dengan pendekatan yang komunikatif dan edukatif, 
                            kami memberikan lebih dari sekadar layanan hukum – kami memberi pemahaman agar Anda bisa menjalankan 
                            bisnis dengan rasa aman dan percaya diri.       
                        </p>
                    </div>
                    <div className="md:px-12 overflow-hidden rounded-lg">
                        <Image 
                            src="https://images.pexels.com/photos/8112172/pexels-photo-8112172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                            width={500} 
                            height={500} 
                            alt="about lawfirm" 
                            className="rounded-lg"
                            />
                    </div>
                </div>
            </div>
        </section>
    )
}