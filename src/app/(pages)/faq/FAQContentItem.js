export default function FAQContentItem({ title, content }) {
    return (
        <div className="faq-page-content-item">
            <h4>{title}</h4>
            {content.map((item, index) => {
                return (
                    <p key={index}>{item}</p>
                );
            })}
        </div>
    )
}