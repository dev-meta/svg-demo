import { createContext } from "react";

import { MainContextInterface } from "./interfaces/MainContextInterface";

export const MainContext = createContext<MainContextInterface>({
  title: ""
});
