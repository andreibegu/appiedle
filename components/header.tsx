import Image from "next/image"

export default function Header() {
    return (
        <header className="bg-blue-50 border-2 border-solid border-blue-100">
            <div className="hidden container mx-auto p-4 justify-center items-center md:flex">
                <Image src="/logo.png" alt="Logo" width={70} height={70} />
            </div>
            <div className="flecontainer mx-auto p-4 flex justify-center items-center md:hidden">
                <Image src="/logo.png" alt="Logo" width={50} height={50} />
            </div>
        </header>
    )
}