import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./index.css";

export function Cards({ card }) {
  console.log(card);
  return (
    <Card
      sx={{
        maxWidth: 800,
        maxHeight: 800,
        margin: 1,
        borderRadius: 0,
        position: "relative",
        minHeight: 300,
        backgroundColor: "black",
      }}
    >
      <CardMedia
        image={card.imageUrl}
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          zIndex: 0,
          backgroundColor: "black",
          backgroundPosition: "center",
          boxShadow: "black",
          transition: "0.3s",
          opacity: 0.7,
        }}
      />

      <CardActionArea>
        <CardContent sx={{ p: 3 }}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            minHeight={180}
            color={"common.white"}
            textAlign={"center"}
            sx={{
              "& h2": {
                color: "white",
                letterSpacing: "2px",
                fontSize: "2.15rem",
                fontWeight: 1000,
                lineHeight: 1.45,
                fontFamily: "'Playfair Display',serif",
                mb: "1.275rem",
              },
            }}
          >
            <h2>{card.title.toUpperCase()}</h2>
          </Box>
          <Typography
            variant={"overline"}
            sx={{
              display: "block",
              textAlign: "center",
              color: "#fff",
              letterSpacing: "3px",
              fontWeight: 200,
              fontSize: 12,
            }}
          >
            SHOP NOW
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
