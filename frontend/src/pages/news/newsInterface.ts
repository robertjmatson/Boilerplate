
export interface Id {
  id: number;
}

export interface News {
    id: string;
    title: string,
    author: string,
    excerpt?: string,
    content: string,
    status: string,
  }

export interface Category {
    id: string,
    name: string,
  }
  