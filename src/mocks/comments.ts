import {Comment} from '../types/comment';

const comments: Comment[] = [
  {
    id: 'e4d1588c-9372-4d2c-a08b-caaf23f668e6',
    date: '2019-05-08T14:13:56.569Z',
    user: {
      name: 'Oliver Conner',
      avatarUrl: 'https://13.design.pages.academy/static/host/avatar-angelina.jpg',
      isPro: true
    },
    comment: 'Comment 1',
    rating: 1.8
  },
  {
    id: '4157daa8-b21d-4961-a465-94323176ba12',
    date: '2019-05-08T14:13:56.569Z',
    user: {
      name: 'Donald Duck',
      avatarUrl: 'https://13.design.pages.academy/static/host/avatar-angelina.jpg',
      isPro: false
    },
    comment: 'Comment 2',
    rating: 4.2
  },
  {
    id: '6852faac-d558-4549-9ab8-229255ee863e',
    date: '2019-05-08T14:13:56.569Z',
    user: {
      name: 'Donald Obama',
      avatarUrl: 'https://13.design.pages.academy/static/host/avatar-angelina.jpg',
      isPro: false
    },
    comment: 'Comment 3',
    rating: 4.2
  },
  {
    id: 'f6e517e8-d266-48f0-9f61-8d2f2b3e6be6',
    date: '2019-05-08T14:13:56.569Z',
    user: {
      name: 'Dustin Porier',
      avatarUrl: 'https://13.design.pages.academy/static/host/avatar-angelina.jpg',
      isPro: false
    },
    comment: 'Comment 4',
    rating: 1.5
  }
];

export {comments};
