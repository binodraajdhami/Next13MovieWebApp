import Image from "next/image";
import Link from "next/link";

export default function SignUp() {
    return (
        <section class="auth">
            <form className="auth-form">
                <div className="auth-form-logo">
                    <Image src="/images/logo.png" alt="" width={127} height={38} />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Name" />
                    <input type="email" className="form-control" placeholder="Email" />
                    <input type="password" className="form-control" placeholder="Password" />
                    <button type="submit" className="btn">Sign Up</button>
                </div>
                <div className="auth-form-text">
                    <p>Already have an account? <Link href="/auth/signin">Sign in!</Link></p>
                </div>
            </form>
        </section>
    );
}