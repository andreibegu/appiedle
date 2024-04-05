import Image from "next/image"
import Link from "next/link"

export default function Header() {
    return (
        <header className="bg-blue-50 border-2 border-solid border-blue-100">
            <div className="container mx-auto p-4 flex justify-between items-center">
                <div className="flex-1"></div>
                <div className="flex justify-center">
                    <Image src="/logo.png" alt="Logo" width={70} height={70} />
                </div>
                <div className="flex-1 flex justify-end pr-4">
                    <Link href="/?showInfo=true" className="text-appie-500 hover:text-appie-400 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-appie-500 aria-disabled:cursor-not-allowed aria-disabled:opacity-50">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 md:w-12 md:h-12">
                            <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" />
                        </svg>
                    </Link>
                </div>
            </div>
        </header>
    )
}