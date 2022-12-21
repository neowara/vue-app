export interface ShowInterface {
  ended: string,
  image: {
    medium: string
    original: string,
  },
  language: string,
  name: string,
  id: string,
  summary: string,
  rating: {
    average: string | null
  },
  genres: Array<string>
}