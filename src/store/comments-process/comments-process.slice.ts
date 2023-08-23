import {createSlice} from '@reduxjs/toolkit';
import {NameSpace, RequestStatus} from '../../const';
import {fetchCommentsAction, postCommentAction} from '../api-actions';
import {CommentsProcess} from '../../types/state';

const initialState: CommentsProcess = {
  comments: [],
  sendingCommentStatus: RequestStatus.Unsent
};

export const commentsProcess = createSlice({
  name: NameSpace.Comments,
  initialState,
  reducers: {
    dropSendingStatus: (state) => {
      state.sendingCommentStatus = RequestStatus.Unsent;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCommentsAction.fulfilled, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(postCommentAction.pending, (state) => {
        state.sendingCommentStatus = RequestStatus.Pending;
      })
      .addCase(postCommentAction.fulfilled, (state, action) => {
        state.sendingCommentStatus = RequestStatus.Success;
        state.comments.push(action.payload);
      })
      .addCase(postCommentAction.rejected, (state) => {
        state.sendingCommentStatus = RequestStatus.Error;
      });
  }
});

export const {dropSendingStatus} = commentsProcess.actions;
