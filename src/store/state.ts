export interface state {
  APIAdress: string,
  CastAPIAdress: string,
  shows: Array<object>,
  cast: Array<object>,
}

export const state: state = {
  APIAdress: 'https://api.tvmaze.com/search/shows?',
  CastAPIAdress: 'https://api.tvmaze.com/shows/',
  shows: [],
  cast: [],
}