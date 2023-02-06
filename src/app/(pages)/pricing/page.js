import AboutFeaturesList from "../about/AboutFeaturesList";

export default function Pricing() {
    return (
        <section className="content">
            <div className="container">
                <div className="content__container">
                    <div className="page-title">
                        <h1>Our Pricing</h1>
                        <div className="page_title_bar"></div>
                    </div>
                    <div className="page-content">
                        <div className="pricing-page-list">
                            <p>Under Development Proccess...</p>
                        </div>
                        <div className="pricing-page-content">
                            <h3>Our Features</h3>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.</p>
                            <AboutFeaturesList />
                        </div>
                    </div>

                </div>
            </div>
        </section >
    );
}