import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import styled from "styled-components";

const StyledCard = styled(Card, {
  name: 'styledCard',
  slot: 'wrapper',
  skipSx: true,
})(
  (props) => ({
    maxWidth: 'auto',
  })
);

const StyledCardMedia = styled(CardMedia, {})(
  (props) => ({
    height: 500,
  })
);

const StyledTypography = styled(Typography, {
  name: 'styledTypography',
  slot: 'wrapper',
  skipSx: true,
})(
  (props) => ({
    textAlign: 'center', 
    m: 1,
  })
)

export default function CarouselItems({ title, image, overview }) {
  return (
    <StyledCard>
      <CardActionArea>
        <StyledCardMedia
          component="img"
          // height="140"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <StyledTypography gutterBottom variant="h5" component="div">
            {title}
          </StyledTypography>
          <Typography variant="body2" color="text.secondary">
            {overview}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          More Detailes
        </Button>
      </CardActions>
    </StyledCard>
  );
}
