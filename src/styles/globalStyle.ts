import { createGlobalStyle, css } from 'styled-components';

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
    font: inherit;
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
  font-family: "AcuminPro-Black";
  src:url("../fonts/Acumin-Pro-Black.ttf")

}
@font-face{
  font-family: "AcuminPro-Bold";
  src:url("../fonts/Acumin-Pro-Bold.ttf")

}
@font-face{
  font-family: "AcuminPro-Regular";
  src:url("../fonts/Acumin-Pro-Book.ttf")

}
@font-face{
  font-family: "AcuminPro-ExtraLight";
  src:url("../fonts/Acumin-Pro-ExtraLight.ttf")

}
@font-face{
  font-family: "AcuminPro-Light";
  src:url("../fonts/Acumin-Pro-Light.ttf")

}
@font-face{
  font-family: "AcuminPro-Medium1";
  src:url("../fonts/Acumin-Pro-Medium-1.ttf")

}
@font-face{
  font-family: "AcuminPro-Medium";
  src:url("../fonts/Acumin-Pro-Medium.ttf")

}
@font-face{
  font-family: "AcuminPro-Semibold";
  src:url("../fonts/Acumin-Pro-Semibold.ttf")

}
@font-face{
  font-family: "AcuminPro-Thin";
  src:url("../fonts/Acumin-Pro-Thin.ttf")

}
@font-face{
  font-family: "AcuminPro-UltraBlack";
  src:url("../fonts/Acumin-Pro-UltraBlack.ttf")

}
`;

export default GlobalStyle;
