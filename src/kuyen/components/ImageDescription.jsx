import { Box, Icon, styled, Typography } from "@mui/material";
import imagePresentation from "../../assets/image-presentation.jpg";
import imageLogo from "../../assets/logo-kuyen.png";

// Define la animación
const scaleUpVerTop = `
  @keyframes scale-up-ver-top {
    0% {
      transform: scaleY(0.4);
      transform-origin: 100% 0%;
      opacity: 0;
    }
    100% {
      transform: scaleY(1);
      transform-origin: 100% 0%;
      opacity: 1;
    }
  }
`;

const ImageInfo = styled("img")(({ theme }) => ({
  width: "30%",
  display: 'flex',
  
  justifySelf: 'center',
  alignContent: 'center'
}));

export const ImageDescription = () => {
  const ImagePrimary = styled("img")(({ theme }) => ({
    backgroundSize: "cover",
    backgroundPosition: "center",
    objectFit: "cover",
    height: "100%",
    width: "100%",
    filter: "brightness(0.7)", // Oscurece la imagen base
    animation: "scale-up-ver-top 0.7s cubic-bezier(0.390, 0.575, 0.565, 1.000)",
    // Inyecta la definición de la animación en el componente
    [`@global`]: {
      ...scaleUpVerTop,
    },
  }));

  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        width: "100%",
      }}
    >
      {/* Imagen de fondo */}
      <ImagePrimary src={imagePresentation} />
      {/* Superposición con gradiente */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))",
        }}
      />
      {/* Texto encima */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          px: 2, // Padding horizontal para evitar que el texto se corte en pantallas pequeñas
          width: "100%", // Asegura que el texto se mantenga dentro del contenedor
        }}
      >
        {/* Título principal */}
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{
            color: "white",
            fontSize: { xs: "2rem", sm: "3rem", md: "4rem" }, // Ajuste responsivo del tamaño
            fontWeight: "bold",
          }}
        >
          <ImageInfo src={imageLogo} />
          ¡Bienvenido a nuestra página!
        </Typography>
        {/* Subtítulo */}
        <Typography
          variant="h6"
          sx={{
            color: "white",
            fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" }, // Ajuste responsivo
            maxWidth: "600px", // Limita el ancho del texto en pantallas grandes
            mx: "auto", // Centra el texto horizontalmente
          }}
        >
          Explora nuestro contenido y descubre más. Estamos aquí para ofrecerte
          lo mejor.
        </Typography>
      </Box>
    </Box>
  );
};
