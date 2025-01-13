import PortfolioRouteFragment from "@/fragments/PortfolioRouteFragment";

type Params = Promise<{ slug: string }>;

export default async function PortfolioDetail(props: { params: Params }) {
  const params = await props.params;
  const slug = params.slug;

  return (
    <>
      <PortfolioRouteFragment slug={slug} />
    </>
  );
}
