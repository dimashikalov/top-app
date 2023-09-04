import { withLayout } from "@/layout/Layout";
import { Button, Htag, Input, P, Rating, Tag, Textarea } from "../components";
import React, { useState } from "react";
import { GetStaticProps } from "next";
import axios from "axios";
import { MenuItem } from "@/interfaces/menu.interface";

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
      <P size="m">
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
      <Tag size="s" color="ghost">
        Small
      </Tag>
      <Tag size="s" color="primary">
        Small
      </Tag>
      <Tag size="m" color="red">
        mediem
      </Tag>
      <Tag size="m" color="primary">
        mediem
      </Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
      <Input placeholder="test" />
      <Textarea placeholder="txtArea" />
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
    {
      firstCategory,
    }
  );

  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
