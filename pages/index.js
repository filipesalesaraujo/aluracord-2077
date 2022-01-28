import { useRouter } from "next/router";
import { Box, Button, Text, TextField, Image } from "@skynexui/components";
import React from "react";

import "@fontsource/advent-pro";
import "@fontsource/advent-pro/700.css";

import appConfig from "../config.json";

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
  const [username, setUsername] = React.useState("filipesalesaraujo");
  const roteamento = useRouter();
  return (
    <>
      <Box
        styleSheet={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: appConfig.theme.colors.primary[500],
          backgroundImage:
            "url(https://raw.githubusercontent.com/filipesalesaraujo/aluracord/main/assets/background-1920-1080.jpg)",
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
            onSubmit={function (infosDoEvento) {
              infosDoEvento.preventDefault();
              roteamento.push(`/chat?username=${username}`);
            }}
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
                value={username}
                onChange={function (event) {
                  const valor = event.target.value;
                  setUsername(valor);
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
