import { Box, Card, Grid2, IconButton, Paper, Typography } from "@mui/material";
import { CarouselComponent } from "../components/CarouselComponent";
import { ImageDescription } from "../components/ImageDescription";
import { MasonryMain } from "../components/MasonryMain";
import { Navbar } from "../components/Navbar";
import { CardTravel } from "../components/CardTravel";
import { itemData } from "../../data/data";
import { CardCarousel } from "../components/CardCarousel";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export const KuyenPage = () => {
  return (
    <>
      <Navbar title="KUYEN TREKKING" />

      <ImageDescription />

      {/* <MasonryMain/> */}
      <Box sx={{ p: 0.5, mt: 5, mb: 5 }}>
        {/* <Grid2
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "center", // Centra horizontalmente
            alignItems: "center", // Centra verticalmente
          }}
        >
          <Typography
            variant="h3"
            sx={{
              width: "15rem",
              textAlign: "center",
              color: "secondary.main",
            }}
          >
            Conoce lugares hermosos de Mendoza
          </Typography>
        </Grid2> */}

        <Grid2
          container
          spacing={2}
          sx={{ display: "flex", justifyContent: "space-around", p: 1 }}
        >
          {itemData.slice(0, 3).map((item) => (
            <CardTravel key={item.title} img={item.img} />
          ))}
        </Grid2>

        {/* <CardCarousel/> */}
        <CarouselComponent />

        <IconButton
          size="large"
          sx={{
            color: "white",
            backgroundColor: "success.main",
            ":hover": {
              backgroundColor: "success.main",
              filter: "brightness(0.7)", // Oscurece la imagen base
            },
            position: "fixed",
            right: 50,
            bottom: 50,
            overflow: "visible",
            zIndex: 2,
          }}
        >
          <WhatsAppIcon sx={{ fontSize: 40 }} />
        </IconButton>
      </Box>
    </>
  );
};
