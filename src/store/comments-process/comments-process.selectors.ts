import {NameSpace, RequestStatus} from '../../const';
import {State} from '../../types/state';
import {Comment} from '../../types/comment';

export const getComments = (state: State): Comment[] => state[NameSpace.Comments].comments;
export const getSendingCommentStatus = (state: State): RequestStatus => state[NameSpace.Comments].sendingCommentStatus;
