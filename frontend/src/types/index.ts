export type Category = {
  id: string;
  name: string;
  slug: string;
};

export type Author = {
  id: string;
  name: string;
  email: string;
  avatarUrl: string | null;
};

export type Article = {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content: string;
  imageUrl: string;
  published: boolean;
  createdAt: Date | string;
  updatedAt: Date | string;
  category: Category;
  author: Author;
};

export type ArticleCard = Omit<Article, "content">;

export type ArticleFormData = {
  title: string;
  summary: string;
  content: string;
  categoryId: string;
  imageUrl: string;
  published: boolean;
};

export type PaginatedResponse<T> = {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
};

export type ApiError = {
  message: string;
  code?: string;
};
