export default function ReviewItem() {
    return (
        <div className="comment-item">
            <div className="comment-user">
                <div>
                    <img src="/images/user.svg" alt="" />
                </div>
                <div>
                    <h4>Best Marvel movie in my opinion</h4>
                    <span>24.08.2018, 17:53 by John Doe</span>
                </div>
            </div>
            <div className="comment-details">
                <div className="comment-text">
                    <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
        </div>
    );
}