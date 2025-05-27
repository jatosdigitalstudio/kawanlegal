import Link from "next/link";
import Image from "next/image";
export default function Footer() {
    return (
      <footer className="py-4 md:py-8 px-6 md:px-28" id="footer">
        <div className="container mx-auto px-2 md:px-4">
          <div className="grid rid-cols-1 md:grid-cols-3 grid-rows-1  gap-6 mb-12">
            <div className="flex items-center mb-2 max-w-md">
                <Link href="/" >
                    <Image src="/images/logo-kawanlegal.png" width={300} height={100} alt='Kawan Legal' />
                </Link>
            </div>
            <div className="col-span-2">
                <div className="grid grid-rows md:grid-cols-3 gap-4">
                    <div>
                    <h3 className="font-style font-semibold text-xl mb-2">Perusahaan</h3>
                    <ul className="space-y-2 text-md ">
                        <li><Link href="/#about" className="text-gray-800">Tentang Kami</Link></li>
                        <li><Link href="/#practice" className="text-gray-800">Layanan Hukum</Link></li>
                        <li><Link href="/#attorney" className="text-gray-800">Tim Hukum</Link></li>
                        <li><Link href="/#journal" className="text-gray-800">Klien</Link></li>
                    </ul>
                    </div>

                    <div>
                    <h3 className="font-style font-semibold text-xl mb-2">Hubungi Kami</h3>
                    <ul className="space-y-2 text-md ">
                        <li><Link href="/" className="text-gray-800">021 - 22804301  </Link></li>
                        <li><Link href="/" className="text-gray-800">0811-806-567</Link></li>
                        <li><Link href="/" className="text-gray-800">info@kawanlegal.id</Link></li>
                    </ul>
                    </div>
                    <div>
                        <h3 className="font-style font-semibold text-xl mb-2">Alamat Kantor</h3>
                        <div className=" text-md ">
                            <Link href="/" className="text-gray-800"> 
                              Jl. Moch. Kahfi II Nomor 28a, RT 001 RW 004,
                              Kelurahan Ciganjur, Kecamatan Jagakarsa,
                              Jakarta Selatan. DKI Jakarta 12620
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          <div className="border-t border-maroon mt-4 md:mt-2 pt-8 text-center text-sm md:text-md">
            <p>© 2025 KAWAN LEGAL. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }