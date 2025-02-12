import Image from "next/image";

export default function Header() {
    return (
        <header className="flex items-start gap-8 py-16">
            <Image src="/pp-w.png" alt="Profile picture" width={100} height={100} />
            <div>
                <h1 className="text-4xl font-bold font-alt">Sébastien Gaudard</h1>
                <p className="text-xl font-medium mb-2">Fullstack developer</p>
                <div className="flex items-center space-x-2 mb-4">
                    <span className="text-muted-foreground">Front-end master</span>
                    <div className="size-1 bg-foreground rounded-full"></div>
                    <span className="text-muted-foreground">Back-end enjoyer</span>
                    <div className="size-1 bg-foreground rounded-full"></div>
                    <span className="text-muted-foreground">Devops adventurer</span>
                </div>
                <nav>
                    <ul className="flex items-center gap-4">
                        <li>
                            <a href="https://www.linkedin.com/in/sebastien-gaudard/" className="flex items-center gap-2 underline">
                                <Image src="/linkedin.svg" alt="LinkedIn" width={24} height={24} />
                                LinkedIn</a>
                        </li>
                        <li>
                            <a href="https://github.com/SebGrd" className="flex items-center gap-2 underline">
                                <Image src="/github.svg" alt="Gtihub" width={24} height={24} />
                                Github</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}