export interface IProductDetails {
  productId: string;
}

export interface ProductDetailsProps {
  params: Promise<IProductDetails>;
}

export interface IChildrenProps {
  children: React.ReactNode;
}
