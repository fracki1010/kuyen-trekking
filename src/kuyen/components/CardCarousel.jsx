import Carousel from "react-material-ui-carousel";
import { itemData } from "../../data/data";
import { Button, Paper, styled, Typography } from "@mui/material";

const ImageStyled = styled("img")(({ theme }) => ({
    width: '100%', // Asegura que la imagen ocupe todo el ancho del contenedor
    height: '100%', // Asegura que la imagen ocupe todo el alto del contenedor
    objectFit: 'cover', // Ajusta la imagen para cubrir el contenedor sin deformarla
    display: 'block', // Evita márgenes extraños causados por las imágenes en línea
}));

export const CardCarousel = () => {
  return (
    <Carousel className="SecondExample">
      {itemData.map((item, index) => {
        return (
          <Paper key={item.title}>
            <ImageStyled src={item.img} />
              <Typography variant="h5">Hola mundo</Typography>
              <br />
              <Typography>
                Duis et ad deserunt culpa ipsum Lorem et cupidatat eu.
              </Typography>

              <Button
                className="CheckButton"
                component="a"
                target="_blank"
                rel="noreferrer"
              >
                Check it out!
              </Button>
          </Paper>
        );
      })}
    </Carousel>
  );
};
