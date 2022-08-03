import React, { FC, createContext } from "react";
import { Helmet } from "react-helmet";

import { SVGjs } from "../../components/SVG";
import { Controls } from "../../components/Controls";

import { useFPS } from "../../hooks/useFPS";

import { MainLayoutStyled } from "./styles/MainLayoutStyled";
import { FPSStyled } from "./styles/FPSStyled";

/** Main layout */
export const MainLayout: FC<{}> = (): JSX.Element => {
  const FPS = useFPS();

  return (
    <MainLayoutStyled>
      <Helmet>
        <meta charSet="utf-8" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
        />
      </Helmet>
      <FPSStyled>{FPS} fps/sec</FPSStyled>
      <Controls />
      <SVGjs />
    </MainLayoutStyled>
  );
};
