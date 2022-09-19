export interface initialNewsTypes {
    news: Array<INewsItemType>
  isLoading: boolean,
  error: string,
}
export interface INewsItemType{
  title: string,
  content: string,
  author: string,
  createdAt: number,
  view: number,
  likes: number,
  dislikes: number,
  id: string
}