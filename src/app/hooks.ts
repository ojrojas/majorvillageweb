import React from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { ThemeContext } from "./core/context/theme.context";
import type { RootState, AppDispatch } from "./store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useTheme = () => React.useContext(ThemeContext);
