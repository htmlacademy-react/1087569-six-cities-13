import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {State, AppDispatch} from '../types/state';

const useAppDispatch = () => useDispatch<AppDispatch>();

const useAppSelector: TypedUseSelectorHook<State> = useSelector;

export {useAppDispatch, useAppSelector};
