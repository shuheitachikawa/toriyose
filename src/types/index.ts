export type Post = {
  id: string;
  url: string;
  name: string;
  desc: string;
  fv: Fv;
  description: string;
  categoriel: Category[];
  content: string;
  publishedAt: string;
  revisedAt: string;
  updatedAt: string;
  categories: Category[];
};

type Fv = {
  height: number;
  width: number;
  url: string;
}

export type Category = {
  id: string;
  name: string;
  icon: string;
  key: string;
  publishedAt: string;
  revisedAt: string;
  updatedAt: string;
};

export type ContactInfo = {
  url: string;
  message: string;
}

export type PrivacyPolicy = {
  id: string;
  content: string;
  publishedAt: string;
  revisedAt: string;
  updatedAt: string;
}
