import Image from "next/image";

export default function ForgotPassword() {
    return (
        <section class="auth">
            <form className="auth-form">
                <div className="auth-form-logo">
                    <Image src="/images/logo.png" alt="" width={127} height={38} />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Enter Valid Email Address" />
                    <button type="submit" className="btn">Send Reset Link</button>
                </div>
                <div className="auth-form-text">
                    <p>We will send a password to your Email</p>
                </div>
            </form>
        </section>
    );
}