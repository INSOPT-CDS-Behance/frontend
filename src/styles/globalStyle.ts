import { createGlobalStyle, css } from 'styled-components';

import AcuminProBold from '../fonts/Acumin-Pro-Bold.ttf';
import AcuminProBook from '../fonts/Acumin-Pro-Book.ttf';
import AcuminProExtraLight from '../fonts/Acumin-Pro-ExtraLight.ttf';
import AcuminProLight from '../fonts/Acumin-Pro-Light.ttf';
import AcuminProMedium from '../fonts/Acumin-Pro-Medium.ttf';
import AcuminProSemibold from '../fonts/Acumin-Pro-Semibold.ttf';
import AcuminProThin from '../fonts/Acumin-Pro-Thin.ttf';
import AcuminProUltraBlack from '../fonts/Acumin-Pro-UltraBlack.ttf';
import AcuminProBlack from '../fontsAcumin-Pro-Black.ttf';

export const reset = css`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  menu,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  section {
    display: block;
  }
  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
    display: none;
  }
  body {
    line-height: 1;
  }
  menu,
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;

export const GlobalStyle = createGlobalStyle`
${reset}

#root, body, html {
    width: 100%;
    height: 100vh;
 
}
* {
  
    box-sizing: border-box;
    }
@font-face{
  font-family: "AcuminProBlack";
  src: url(${AcuminProBlack}) format("truetype");

}
@font-face{
  font-family: "AcuminProBold";
  src: url(${AcuminProBold}) format("truetype");

}
@font-face{
  font-family: "AcuminProRegular";
  src:url(${AcuminProBook}) format("truetype");

}
@font-face{
  font-family: "AcuminProExtraLight";
  src:url(${AcuminProExtraLight}) format("truetype");

}
@font-face{
  font-family: "AcuminProLight";
  src:url(${AcuminProLight}) format("truetype");

}
@font-face{
  font-family: "AcuminProMedium";
  src:url(${AcuminProMedium}) format("truetype");

}
@font-face{
  font-family: "AcuminProSemibold";
  src: url(${AcuminProSemibold}) format("truetype");

}
@font-face{
  font-family: "AcuminProThin";
  src:url(${AcuminProThin})  format("truetype");

}
@font-face{
  font-family: "AcuminProUltraBlack";
  src:url(${AcuminProUltraBlack}) format("truetype");

}
`;

export default GlobalStyle;
