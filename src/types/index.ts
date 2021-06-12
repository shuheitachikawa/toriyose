export type Post = {
  id: string;
  icon: string;
  title: string;
  description: string;
  category: string;
  content: string;
  publishedAt: string;
};

export type Category = {
  name: string;
  href: string;
  text: string;
  color: string;
  bg: string;
};
