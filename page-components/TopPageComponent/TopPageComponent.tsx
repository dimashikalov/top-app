import { TopPageComponentProps } from "./TopPageComponent.props";

export const TopPageComponent = ({
  firstCategory,
  page,
  products,
}: TopPageComponentProps) => {
  return <>{products && products.length}</>;
};
