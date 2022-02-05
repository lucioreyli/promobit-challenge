type Props = { 
  runtime: number | null | undefined 
}

export const DurationComponent: React.FC<Props> = ({ runtime }) => {
  return(
    <>
      {
        !!runtime && `${Math.floor(runtime/60)}h ${Math.round(runtime%60)}m`
      }
    </>
  )
}