import {createAction} from '@reduxjs/toolkit';
import {NameSpace} from '../const';
import {AppRoute} from '../const';

const redirectToRoute = createAction<AppRoute>(`${NameSpace.App}/redirectToRoute`);

export {redirectToRoute};
