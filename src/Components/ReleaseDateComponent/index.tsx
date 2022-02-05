type Props = {
  release_date: string | undefined
}

export const ReleaseDateComponent: React.FC<Props> = ({ release_date }) => {
  return (
    <>
      {
        !!release_date && new Intl.DateTimeFormat('pt-BR')
          .format(new Date(release_date))
      } (BR)
    </>
  )
}