import { AppDispatch, RootState } from "@/store/store";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const useAppDispatch : () => AppDispatch = useDispatch;
export const useAppSeleactor : TypedUseSelectorHook <RootState> = useSelector;