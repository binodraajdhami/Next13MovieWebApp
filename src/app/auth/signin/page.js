import Image from "next/image";
import Link from "next/link";

export default function SignIn() {
    return (
        <section class="auth">
            <form className="auth-form">
                <div className="auth-form-logo">
                    <Image src="/images/logo.png" alt="" width={127} height={38} />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Email/Username" />
                    <input type="password" className="form-control" placeholder="Password" />
                    <button type="submit" className="btn">Sign In</button>
                </div>
                <div className="auth-form-text">
                    <p>Don't have an account? <Link href="/auth/signup">Sign up!</Link></p>
                    <Link href="auth/forgot-password">Forgot password?</Link>
                </div>
            </form>
        </section>
    );
}