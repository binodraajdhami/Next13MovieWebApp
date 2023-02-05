export default function AboutFeaturesItem({ title, content, icon }) {
    return (
        <div className="about-feature-content-item">
            <div>
                <div className="feature-content-icon">
                    <img src={icon} alt="" />
                </div>
            </div>
            <div>
                <div className="feature-content-details">
                    <h4>{title}</h4>
                    <p>{content}</p>
                </div>
            </div>
        </div>
    );
}