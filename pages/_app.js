import appConfig from "../config.json";
function GlobalStyle() {
  return (
    <style global jsx>{`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
      }
      body {
        font-family: "Advent Pro", sans-serif;
      }
      /* App fit Height */
      html,
      body,
      #__next {
        min-height: 100vh;
        display: flex;
        flex: 1;
      }
      #__next {
        flex: 1;
      }
      #__next > * {
        flex: 1;
      }
      .container {
        position: relative;
      }
      .container:before {
        content: "";
        background-color: ${appConfig.theme.colors.primary["500"]};
        width: 100px;
        height: 100px;
        position: absolute;
        transform: rotate(45deg);
        top: -65px;
        left: -65px;
      }
      .container:after {
        content: "";
        background-color: ${appConfig.theme.colors.primary["500"]};
        width: 100px;
        height: 100px;
        position: absolute;
        transform: rotate(45deg);
        bottom: -65px;
        right: -65px;
      }
      .container-photo {
        position: relative;
      }
      .container-photo:before {
        content: "";
        background-color: ${appConfig.theme.colors.neutrals["700"]};
        width: 25px;
        height: 45px;
        position: absolute;
        transform: rotate(45deg);
        top: -20px;
        left: -10px;
      }
      .container-photo:after {
        content: "";
        background-color: ${appConfig.theme.colors.neutrals["700"]};
        width: 25px;
        height: 45px;
        position: absolute;
        transform: rotate(45deg);
        bottom: -20px;
        right: -10px;
      }

      .pseudo-element-photo {
        position: relative;
        width: 166px;
        height: 166px;
      }
      .pseudo-element-photo:before {
        content: "";
        background-color: ${appConfig.theme.colors.neutrals["300"]};
        width: 15px;
        height: 35px;
        position: absolute;
        transform: rotate(45deg);
        top: -15px;
        left: -5px;
      }
      .pseudo-element-photo:after {
        content: "";
        background-color: ${appConfig.theme.colors.neutrals["300"]};
        width: 15px;
        height: 35px;
        position: absolute;
        transform: rotate(45deg);
        bottom: -15px;
        right: -5px;
      }
      .btn-login span {
        font-family: "Advent Pro", sans-serif !important;
        font-weight: 700 !important;
        letter-spacing: 2px !important;
      }
      .btn-login {
        position: relative;
        border: 0 !important;
      }
      .btn-login:before {
        content: "";
        background-color: ${appConfig.theme.colors.neutrals["700"]};
        width: 35px;
        height: 15px;
        position: absolute;
        transform: rotate(45deg);
        bottom: -15px;
        left: -10px;
      }
      .pseudo-element-input-login {
        position: relative;
        border: 0 !important;
        width: 100%;
      }
      .pseudo-element-input-login:before {
        content: "";
        background-color: ${appConfig.theme.colors.neutrals["700"]};
        width: 35px;
        height: 15px;
        position: absolute;
        transform: rotate(45deg);
        top: -15px;
        right: -10px;
      }
      .username {
        font-family: "Advent Pro", sans-serif !important;
        font-weight: 700 !important;
        text-transform: uppercase !important;
      }
      /* ./App fit Height */
    `}</style>
  );
}

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />;
    </>
  );
}
