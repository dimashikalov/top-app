import { withLayout } from "@/layout/Layout";
import { Button, Htag, P, Rating, Tag } from "../components";
import React, { useState } from "react";

function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Htag tag="h1">Hello world</Htag>
      <Button appearance="primary" arrow="right">
        CLick me
      </Button>
      <Button
        appearance="ghost"
        arrow="down"
        onClick={() => console.log("click")}
      >
        CLick me
      </Button>
      <P>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
        cupiditate.
      </P>
      <P size="s">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
        cupiditate.
      </P>
      <P size="l">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
        cupiditate.
      </P>
      <Tag size="s">Small</Tag>
      <Tag size="s">Small</Tag>
      <Tag size="m" color="red">
        mediem
      </Tag>
      <Tag size="m" color="primary">
        mediem
      </Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
    </>
  );
}

export default withLayout(Home);
