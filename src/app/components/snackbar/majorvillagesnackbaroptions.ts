import React from 'react';
import { TransitionProps } from "@mui/material/transitions";

export interface MajorVillageSnackBarOptions {
    open?: boolean;
    message: string;
    title: string;
    severity: "success" | "info" | "warning" | "error";
    autoHideDuration?: number | null | undefined;
    resultAction?: boolean;
}