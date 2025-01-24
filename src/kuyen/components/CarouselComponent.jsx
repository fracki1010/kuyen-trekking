import { styled } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { itemData } from "../../data/data";

const CarouselContainer = styled('div')(({ theme }) => ({
  width: '100%', // Ancho completo del carrusel
  height: '300px', // Ajusta la altura del carrusel según lo que necesites
  overflow: 'hidden', // Evita que se desborden las imágenes
  position: 'relative',
}));

const ImageCarousel = styled('img')(({ theme }) => ({
  width: '100%', // Asegura que la imagen ocupe todo el ancho del contenedor
  height: '100%', // Asegura que la imagen ocupe todo el alto del contenedor
  objectFit: 'cover', // Ajusta la imagen para cubrir el contenedor sin deformarla
  display: 'block', // Evita márgenes extraños causados por las imágenes en línea
}));

export const CarouselComponent = () => {
  return (
    <Carousel>
      {itemData.map((item, i) => (
        <CarouselContainer key={item.title}>
          <ImageCarousel src={item.img} alt={item.title} />
        </CarouselContainer>
      ))}
    </Carousel>
  );
};

