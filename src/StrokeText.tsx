import React from "react";
import { requireNativeComponent } from "react-native";
import type { StrokeTextProps } from "../types";

const ComponentName = "StrokeTextView";

const NativeStrokeText = requireNativeComponent<StrokeTextProps>(ComponentName);

export const StrokeText = (props: StrokeTextProps) => {
  return <NativeStrokeText {...props} />;
};
