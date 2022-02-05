type Props = { 
  certification: string 
}

export const AgeComponent: React.FC<Props> = ({ certification }) => {
  return (
    <>
      {
        certification 
          + 
        ( certification === '' ? 
            'S/I'
            :isNaN(Number(certification)) && certification != 'S/I' ? 'ivre ' : ' anos '
        )
      }
    </>
  )
}