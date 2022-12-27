export interface Id {
  id: number;
}

export interface News extends Id{
    title: string,
    author: string,
    excerpt?: string,
    content: string,
    status: string,
  }

export interface Category extends Id {
    name: string
}