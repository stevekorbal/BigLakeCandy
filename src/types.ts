export type ProductCategory = "all" | "candy" | "fruits" | "vegetables" | "icecream" | "desserts";

export interface Product {
  slug: string;
  title: string;
  price: string;
  oldPrice?: string | null;
  image: string;
  weight: string;
  description: string;
  category: "candy" | "fruits" | "vegetables" | "icecream" | "desserts";
  isSale: boolean;
}

export type PageRoute = 
  | { type: "home" }
  | { type: "shop"; category?: ProductCategory }
  | { type: "product"; slug: string }
  | { type: "fundraising" }
  | { type: "wholesale" }
  | { type: "about" }
  | { type: "faq" }
  | { type: "contact" }
  | { type: "privacy" }
  | { type: "terms" }
  | { type: "refund" }
  | { type: "cart" }
  | { type: "checkout" };
