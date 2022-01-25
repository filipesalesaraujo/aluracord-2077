import "@fontsource/advent-pro";
import "@fontsource/advent-pro/700.css";
import { Box, Button, Text, TextField, Image } from "@skynexui/components";
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

function Title(props) {
  const Tag = props.tag || "h1";
  return (
    <>
      <Tag>{props.children}</Tag>
      <style jsx>{`
        ${Tag} {
          color: ${appConfig.theme.colors.neutrals["000"]};
          font-size: 24px;
          font-weight: 600;
        }
      `}</style>
    </>
  );
}

export default function PaginaInicial() {
  const username = "filipesalesaraujo";

  return (
    <>
      <GlobalStyle />
      <Box
        styleSheet={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: appConfig.theme.colors.primary[500],
          backgroundImage: "url(https://raw.githubusercontent.com/filipesalesaraujo/aluracord/main/assets/background.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Box
          className="container"
          styleSheet={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            width: "100%",
            maxWidth: "700px",
            padding: "32px",
            margin: "16px",
            boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
            backgroundColor: appConfig.theme.colors.neutrals[700],
          }}
        >
          {/* Formulário */}
          <Box
            as="form"
            styleSheet={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: { xs: "100%", sm: "50%" },
              textAlign: "center",
              marginBottom: "32px",
            }}
          >
            <Title tag="h2">BOAS VINDAS DE VOLTA!</Title>
            <Text
              variant="body3"
              styleSheet={{
                marginBottom: "32px",
                color: appConfig.theme.colors.neutrals[300],
                fontFamily: "Advent Pro",
              }}
            >
              {appConfig.name}
            </Text>

            <div className="pseudo-element-input-login">
              <TextField
                fullWidth
                styleSheet={{
                  borderRadius: "0px",
                  fontFamily: "sans-serif",
                }}
                textFieldColors={{
                  neutral: {
                    textColor: appConfig.theme.colors.neutrals[700],
                    mainColor: appConfig.theme.colors.neutrals[900],
                    mainColorHighlight: appConfig.theme.colors.neutrals[300],
                    backgroundColor: appConfig.theme.colors.primary[500],
                  },
                }}
              />
            </div>
            <Button
              className="btn-login"
              type="submit"
              label="Entrar"
              fullWidth
              styleSheet={{
                textTransform: "uppercase",
                borderRadius: "0px",
                fontweight: "700",
              }}
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["000"],
                mainColor: appConfig.theme.colors.neutrals[300],
                mainColorLight: appConfig.theme.colors.primary[400],
                mainColorStrong: appConfig.theme.colors.primary[600],
              }}
            />
          </Box>
          {/* Formulário */}

          {/* Photo Area */}
          <Box
            className="container-photo"
            styleSheet={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              maxWidth: "200px",
              padding: "16px",
              gap: "20px",
              backgroundColor: appConfig.theme.colors.neutrals[300],
              flex: 1,
              minHeight: "240px",
            }}
          >
            <div className="pseudo-element-photo">
              <Image
                className="photo"
                styleSheet={{
                  marginBottom: "16px",
                }}
                src={`https://github.com/${username}.png`}
              />
            </div>

            <Text
              className="username"
              variant="body4"
              styleSheet={{
                color: appConfig.theme.colors.neutrals[900],
                backgroundColor: appConfig.theme.colors.primary[600],
                padding: "3px 10px",
              }}
            >
              {username}
            </Text>
          </Box>
          {/* Photo Area */}
        </Box>
      </Box>
    </>
  );
}
