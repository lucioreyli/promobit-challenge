import { CompanyInterface } from "./CompanyInterface";
import { CountriesProductionInterface } from "./CountriesProductionInterface";
import { LanguageInterface } from "./LanguageInterface";
import { TagInterface } from "./TagInterface";

export interface FilmDetailsInterface {
  adult?: boolean,
  backdrop_path?: string | null,
  belongs_to_collection?: null | object,
  budget?: number,
  genres?: TagInterface[],
  homepage?: string | null,
  id?: number,
  imdb_id?: string | null,
  original_language?: string,
  original_title?: string,
  overview?: string | null,
  popularity?: number,
  poster_path?: string | null,
  production_companies?: CompanyInterface[],
  production_countries?: CountriesProductionInterface[],
  release_date?: string,
  revenue?: number,
  runtime?: number | null,
  spoken_languages?: LanguageInterface[],
  status?: string,
  tagline?: string | null,
  title?: string,
  video?: boolean,
  vote_average?: number,
  vote_count?: number,
}