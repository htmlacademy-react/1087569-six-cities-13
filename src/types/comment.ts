import {Host} from './offer';

type Comment = {
  id: string;
  date: string;
  user: Host;
  comment: string;
  rating: number;
}

type CommentData = {
  comment: string;
  rating: number;
}

export type {Comment, CommentData};
