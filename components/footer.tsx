export default function Footer() {
    return (
        <footer className="h-10 bg-blue-50 text-slate-500 border-2 border-solid border-blue-100">
            <div className="flex h-full items-center pl-4 gap-2">
                <a className="underline decoration-dashed" href="https://github.com/andreibegu/appiedle">Github</a>
                <p>●</p>
                <a className="underline decoration-dashed" href="https://paypal.me/andreibegu">Donate</a>
            </div>
        </footer>
    )
}