import * as types from './action-types';
import IThing from '../context/interfaces/i-thing';
import IActions from '../context/interfaces/i-actions';
import { SnackbarProps } from '../context';

const buildAction = (type: string, payload: any): IActions => ({type, payload});

export const setLoader = (loadingState: boolean): IActions => buildAction(types.SET_LOADER, loadingState);
export const changeColor = (thingId: string, paletteColor: string): IActions => buildAction(types.CHANGE_COLOR, {thingId, paletteColor});
export const updateThing = (thing: IThing): IActions => buildAction(types.UPDATE_THING, thing);
export const displaySnackbar = (SnackbarProps: SnackbarProps): IActions => buildAction(types.DISPLAY_SNACKBAR, SnackbarProps);
export const hideSnackbar = (): IActions => buildAction(types.HIDE_SNACKBAR, null);