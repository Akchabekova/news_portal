export interface initialNewsTypes {
    news: Array<newsItemType>
}
export interface newsItemType{
  title: string,
  content: string,
  author: string,
  createdAt: number,
  view: number,
  likes: number,
  dislakes: number,
  id: string
}