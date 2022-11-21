import { css, DefaultTheme } from 'styled-components';

const colors = {
  behance_blue: '#2456f7',
  behance_black: '#000000',
  behance_gray800: '#1f1f1f',
  behance_gray700: '#333333',
  behance_gray600: '#474747',
  behance_gray500: '#5c5c5c',
  behance_gray400: '#adadad',
  behance_gray300: '#d6d6d6',
  behance_gray200: '#ededed',
  behance_gray100: '#f7f7f7',
  behance_white: '#ffffff',
};

const fonts = {
  behance_acumin_pro_black_80: css`
    font-family: AcuminProBlack;
    font-size: 5rem;
    font-weight: 900;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
  `,
  behance_acumin_pro_medium_32: css`
    font-family: AcuminProMedium;
    font-size: 2rem;
    font-weight: 500;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
  `,
  behance_acumin_pro_regular30: css`
    font-family: AcuminProRegular;
    font-size: 1.875rem;
    font-weight: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
  `,
  behance_acumin_pro_semibold_30: css`
    font-family: AcuminProSemibold;
    font-size: 1.875rem;
    font-weight: 600;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
  `,
  behance_acumin_pro_black_24: css`
    font-family: AcuminProBlack;
    font-size: 1.5rem;
    font-weight: 900;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
  `,
  behance_acumin_pro_medium_24: css`
    font-family: AcuminProMedium;
    font-size: 1.5rem;
    font-weight: 500;
    font-style: normal;
    line-height: normal;
    letter-spacing: -1.2px;
  `,
  behance_acumin_pro_semibold_20: css`
    font-family: AcuminProSemibold;
    font-size: 1.25rem;
    font-weight: 600;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
  `,
  behance_acumin_pro_bold_18: css`
    font-family: AcuminProBold;
    font-size: 1.125rem;
    font-weight: bold;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
  `,
  behance_acumin_pro_semibold_18: css`
    font-family: AcuminProSemibold;
    font-size: 1.125rem;
    font-weight: 600;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
  `,
  behance_acumin_pro_bold_17: css`
    font-family: AcuminProBold;
    font-size: 1.0625rem;
    font-weight: bold;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
  `,
  behance_acumin_pro_medium_17: css`
    font-size: 1.0625rem;
    font-weight: 500;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
  `,
  behance_acumin_pro_bold_16: css`
    font-family: AcuminProBold;
    font-size: 1rem;
    font-weight: bold;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
  `,
  behance_acumin_pro_regular_16: css`
    font-family: AcuminProRegular;
    font-size: 1rem;
    font-weight: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
  `,
  behance_acumin_pro_bold_14: css`
    font-family: AcuminProBold;
    font-size: 0.875rem;
    font-weight: bold;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.7px;
  `,
  behance_acumin_pro_regular_14: css`
    font-family: AcuminProRegular;
    font-size: 0.875rem;
    font-weight: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
  `,
  behance_acumin_pro_bold_12: css`
    font-family: AcuminProBold;
    font-size: 1.2rem;
    font-weight: bold;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
  `,
  behance_acumin_pro_regular_12: css`
    font-family: AcuminProRegular;
    font-size: 0.75rem;
    font-weight: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
  `,
};

const theme: DefaultTheme = {
  colors,
  fonts,
};
export default theme;
