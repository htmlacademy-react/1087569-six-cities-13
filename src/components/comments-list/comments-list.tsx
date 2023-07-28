import CommentItem from '../comment-item/comment-item';
import {Comment} from '../../types/comment';

type CommentsListProps = {
  comments: Comment[];
}

function CommentsList({comments}: CommentsListProps): JSX.Element {
  return(
    <ul className="reviews__list">
      {comments.map((comment) => <CommentItem key={comment.id} commentItem={comment} />)}
    </ul>
  );
}

export default CommentsList;
