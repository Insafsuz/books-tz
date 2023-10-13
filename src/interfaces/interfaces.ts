export interface IOption {
  value: string
  label: string
}

interface IImage {
  smallThumbnail: string
  thumbnail: string
}

interface IInfo {
  imageLinks: IImage | undefined
  categories: string[]
  title: string
  authors: string[]
  description: string
}

export interface IBook {
  id: string
  volumeInfo: IInfo
}
