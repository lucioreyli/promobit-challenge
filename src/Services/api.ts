import axios from "axios";
import { CastInterface } from "~/Interfaces/CastInterface";
import { CreditsInterface } from "~/Interfaces/CreditsInterface";
import { CrewInterface } from "~/Interfaces/CrewInterface";
import { FilmDetailsInterface } from "~/Interfaces/FilmDetailsInterface";
import { FilmInterface } from "~/Interfaces/FilmInterface";
import { TagInterface } from "~/Interfaces/TagInterface";

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/'
})

const _API_KEY = import.meta.env.VITE_TMDB_API_KEY

export const BASE_URL_IMG = 'https://image.tmdb.org/t/p/original'

export const getFilms = async (page: number) => {
  let response: FilmInterface[] = []

  await api.get(`/movie/popular?api_key=${_API_KEY}&language=pt-BR&page=${page}`)
    .then((res) => response = res.data.results)

  return response
}

export const getTags = async () => {
  let response: TagInterface[] = []

  await api.get(`/genre/movie/list?api_key=${_API_KEY}&language=pt-BR`)
    .then((res) => response = res.data.genres)

  return response
}

export const getFilmDetails = async (movieId: number) => {
  let response: FilmDetailsInterface = {}

  await api.get(`/movie/${movieId}?api_key=${_API_KEY}&language=pt-BR`)
    .then((res) => response = res.data)

  return response
}

export const getCertification = async (movieId: number) => {
  let response: string = ""

  await api.get(`/movie/${movieId}/release_dates?api_key=${_API_KEY}`)
    .then((res) => {
      res.data.results.map((arr: any) => {
        if(arr.iso_3166_1 == 'BR')
          response = arr.release_dates[0].certification
      })
    })

  return response
}

export const getCredits = async (movieId: number) => {
  let cast_array: CastInterface[] = []
  let crew_array: CrewInterface[] = []

  await api.get(`/movie/${movieId}/credits?api_key=${_API_KEY}&language=pt-BR`)
    .then((res) => {
      cast_array = res.data.cast
      crew_array = res.data.crew
    })

  const response: CreditsInterface = {
    cast_array,
    crew_array
  }
  
  return response
}

export const getTrailer = async (movieId: number) => {
  let response: string = ""

  await api.get(`/movie/${movieId}/videos?api_key=${_API_KEY}&language=pt-BR`)
    .then((res) => {
      res.data.results.map((result: any) => {
        if(result.official){
          response = result.key
        }
      })
    })

  return response
}

export const getRecommendations = async (movieId: number) => {
  let response: FilmInterface[] = []

  await api.get(`/movie/${movieId}/recommendations?api_key=${_API_KEY}&language=pt-BR`)
    .then((res) => {
      response = res.data.results.splice(0, 6)
    })

  return response
}