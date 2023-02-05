import CommentForm from "./CommentForm";
import CommentItem from "./CommentItem";

export default function CommentsList() {
    return (
        <div className="comment-list">
            <CommentItem />
            <hr />
            <CommentItem />
            <hr />
            <CommentItem />
            <hr />
            <CommentItem />
            <hr />
            <CommentForm />
        </div>
    );
}