import Link from "next/link";

export default function Header() {
    return (
        <header className='header'>
            <div className='container'>
                <div className="row">
                    <div className="col-sm-2">
                        <div className="header-logo">
                            <Link href="/">
                                <img src="/images/logo.png" alt="Picture of the author" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-sm-10">
                        <div className="header-nav">
                            <nav>
                                <ul>
                                    <li>
                                        <Link href="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link href="/about">About Us</Link>
                                    </li>
                                    <li>
                                        <Link href="/pricing">Pricing</Link>
                                    </li>
                                    <li>
                                        <Link href="/faq">FAQ</Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">Contact Us</Link>
                                    </li>
                                </ul>
                            </nav>
                            <nav>
                                <ul>
                                    <li>
                                        <Link href="/auth/signin">SignIn</Link>
                                    </li>
                                    <li>
                                        <Link href="/auth/signup">SignUp</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}