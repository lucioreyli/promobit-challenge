export const AgeComponent: React.FC<{ certification: string }> = ({ certification }) => {
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