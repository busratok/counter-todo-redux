import { DECREMENT, INCREMENT, RESET } from "../types/counterTypes";

export const inc = () => ({ type: INCREMENT });

export const dec = () => ({ type: DECREMENT });

export const reset = () => ({ type: RESET });
