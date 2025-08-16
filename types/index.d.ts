import * as React from "react";
import { ViewProps } from "react-native";

type TextAlign = "center" | "left" | "right";

export interface StrokeTextProps extends ViewProps {
  width?: number;
  text: string;
  fontSize?: number;
  color?: string;
  strokeColor?: string;
  strokeWidth?: number;
  fontFamily?: string;
  align?: TextAlign;
  numberOfLines?: number;
  ellipsis?: boolean;
}

export const StrokeText: React.FC<StrokeTextProps>;
