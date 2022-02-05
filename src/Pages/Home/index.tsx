import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Loading } from "~/Components/Loading"
import { NothingContent } from "~/Components/NothingContent"
import { Pagination } from "~/Components/Pagination"
import { Panel } from "~/Components/Panel"
import { Tag } from "~/Components/Tag"
import { getFilms, getTags } from "~/Services/api"
import { FilmInterface } from "~/Interfaces/FilmInterface"
import { TagInterface } from "~/Interfaces/TagInterface"
import { FilmsContainer } from "~/Components/FilmsContainer"
import { getPreviousFilter } from "~/Services/getPreviousFilter"

export const Home = () => {
	const { id } = useParams()
  const page = Number(id)

  const [films, setFilms] = useState<FilmInterface[]>([])
	const [tags, setTags] = useState<TagInterface[] | undefined>([])
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const [genresFilter, setGenresFilter] = useState<number[]>([])

	useEffect(() => {
		getFilms(page).then(response => setFilms(response))
		getTags().then(response => setTags(response))
			.then(() => setIsLoading(false))
		getPreviousFilter(setGenresFilter)
	}, [])

	const handleSelectCategory = (genreId: number) => {
		const currentIndex = genresFilter.indexOf(genreId)
		let newArray = [...genresFilter]
		
		if(currentIndex == -1){
			newArray = [...newArray, genreId]
		}
		else {
			newArray.splice(currentIndex, 1)
		}
		setGenresFilter(newArray)
		sessionStorage.setItem('filters', JSON.stringify(newArray))
	}

  return (
    <>
			{
				!isLoading ?
				<>
					<Panel>
						{
							tags?.map(tag => <Tag 
								key={tag.id}
								tag={tag}
								onClick={() => handleSelectCategory(tag.id)}
								selected={genresFilter.includes(tag.id)}
							/>)
						}
					</Panel>

					<FilmsContainer films={films} filter={genresFilter}/>
					{
						!films && <NothingContent/>
					}
					{
						!genresFilter.length  && <Pagination currentPage={page}/>
					}
				</> 
				:
				<Loading/>
			}
    </>
  )
}