# Promobit Challenge - Front-end

Challenge provided by 
[Promobit](https://promobit.com.br) 
using the framework 
[React](https://reactjs.org) 
and API of movies provided by 
[TMDB](https://themoviedb.org) 
in version 3.0.


## 🛠️ Functionalities
  - [x] List of movies
  - [x] Pagination
  - [x] Search by filter
  - [x] Movie's data and trailer
  - [x] Users' avaliation
  - [x] Movies recomendation


## 🚀 Technologies
  - [Vite](https://vitejs.dev)
  - [React](https://reactjs.org)
  - [TMDB v3](https://developers.themoviedb.org/3/getting-started/introduction)
  - [TypeScript](https://www.typescriptlang.org)
  - [Styled-components](https://styled-components.com)


## 🎨 Layout
The layout of project is available at [Figma](https://www.figma.com/file/rM7WPqhLY9ObnGzSCeWLxB/Teste-Front-End?node-id=0%3A1).


## 🤔 Getting started

1. Clone this repository.
2. Run `cd promobit-challenge`.
3. Run `yarn` to install dependencies.
4. Create `.env.local` in root directory and add the [`TMDB's API KEY`][apikey] as

```env
VITE_TMDB_API_KEY=Insert here your API Key
```
5. Instead this, you can add the [`TMDB's API KEY`][apikey] as string in `src/Services/api.ts` and replace `import.meta.env.VITE_TMDB_API_KEY`.
6. Run `yarn dev` to start the web development.


![API_KEY in code](https://iili.io/02kL4j.png)


NOTES: 
  - Without the API KEY, you will not can be able to use all functionalities.
  - You will need a TMDB account to request and use your API Key.
  - If you are trying the responsivity (mobile or desktop), change the dimensions in developer/inspect element mode and reload the page.


## 👨🏻‍💻 Author
- [Lucio Andrade](https://ayo.so/lucioreyli).


## 📝 License
- Undefined.




[apikey]: https://www.themoviedb.org/settings/api