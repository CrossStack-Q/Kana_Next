import React from "react";
import { useAppContext } from "@/store/state";

function Component() {
  const { region } = useAppContext();

  return <>{region}</>;
}

export default Component;
