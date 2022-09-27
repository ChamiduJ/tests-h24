export type Category = {
  name: string
  categoryArticles: CategoryArticle
  articleCount: number
  childrenCategories: ChildCategory
}

export type Article = {
  name:  string
  variantName: string
  prices: Prices
  images: Image[]
}

export type ChildCategory = {
  list: Array<{
    name: string
    urlPath: string
  }>
}

export type Prices = {
  currency: string
  regular: {
    value: number
  }
}

export type Image = {
  path: string
}

export type CategoryArticle = {
  articles: Article[]
}

export interface IProductsContext {
  categoriesData: ICategoriesData
  setCategoriesData: React.Dispatch<React.SetStateAction<ICategoriesData>>
}

export interface IProductsResponse {
  data: {
    categories: Category[]
  }
}

export interface ICategoriesData {
  original: Category[]
  filtered: Category[]
}
