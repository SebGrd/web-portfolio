import Image from "next/image";

export default function Header() {
    return (
        <header className="flex sm:items-start flex-col sm:flex-row items-center gap-8 py-16">
            <Image src="/pp-w.png" alt="Profile picture" width={100} height={100} />
            <div>
                <h1 className="text-4xl text-center sm:text-left font-bold font-alt">Sébastien Gaudard</h1>
                <p className="text-xl text-center sm:text-left font-medium mb-2">Fullstack developer</p>
                <div className="flex items-center justify-center sm:justify-start flex-wrap space-x-2 mb-4">
                    <span className="text-muted-foreground">Front-end master</span>
                    <div className="size-1 bg-foreground rounded-full"></div>
                    <span className="text-muted-foreground">Back-end enjoyer</span>
                    <div className="size-1 bg-foreground rounded-full"></div>
                    <span className="text-muted-foreground">Devops adventurer</span>
                </div>
                <nav>
                    <ul className="flex items-center justify-center flex-wrap sm:justify-start gap-4">
                        <li>
                            <a href="https://www.linkedin.com/in/sebastien-gaudard/" target="_blank" className="flex items-center gap-2 underline">
                                <Image src="/linkedin.svg" alt="LinkedIn" width={24} height={24} />
                                LinkedIn</a>
                        </li>
                        <li>
                            <a href="https://github.com/SebGrd" target="_blank" className="flex items-center gap-2 underline">
                                <Image src="/github.svg" alt="Gtihub" width={24} height={24} />
                                Github</a>
                        </li>
                        <li>
                            <a href="https://www.malt.fr/profile/sebastiengaudard1" target="_blank" className="flex items-center gap-2 underline">
                                <Image src="/malt.svg" alt="Gtihub" width={24} height={24} />
                                Malt</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}