import Link from "next/link";

export default function AdminLayout({ children }) {
    return (
        <>
            <section className="admin-dashboard">
                <div className="container-fluid">
                    <div className="admin-dashboard-header">
                        <h2>Admin Dashboard under construction!</h2>
                        <Link href="/">Back to Home Page</Link>
                    </div>
                    <div className="admin-dashboard-body">
                        <div className="admin-dashboard-sidebar">
                            <h2>Side Menu</h2>
                        </div>
                        <div className="admin-dashboard-main">
                            {children}
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}