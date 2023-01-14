import type { AppDispatch, RootState } from "./store";
import { useDispatch, useSelector } from "react-redux";

import type { TypedUseSelectorHook } from "react-redux";

export const _useDispatch: () => AppDispatch = useDispatch;
export const _useSelector: TypedUseSelectorHook<RootState> = useSelector;
