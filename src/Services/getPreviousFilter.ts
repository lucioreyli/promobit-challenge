export const getPreviousFilter = (setGenresFilter: (value: React.SetStateAction<number[]>) => void) => {
  const previousFilter = sessionStorage.getItem('filters')
  if(previousFilter)
    setGenresFilter(JSON.parse(previousFilter))
}