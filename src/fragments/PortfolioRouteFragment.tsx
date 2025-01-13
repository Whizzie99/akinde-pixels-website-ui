/* eslint-disable @typescript-eslint/no-explicit-any */
import { client } from "@/lib/contentful";
import PortfolioRoute from "@/components/Portfolio/PorfolioModal/PortfolioRoute";
import React from "react";

interface Props {
  slug: string;
}

async function getPortfolio(slug: string) {
  const data = await client.getEntries({
    "fields.slug": slug,
    content_type: "portoflio",
  });

  return data;
}

export default async function PortfolioRouteFragment({ slug }: Props) {
  const { items } = await getPortfolio(slug);
  const portfolio: any = items[0];

  return (
    <>
      <PortfolioRoute portfolio={portfolio} />
    </>
  );
}
