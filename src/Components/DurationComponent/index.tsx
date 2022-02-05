export const DurationComponent: React.FC<{ runtime: number | null | undefined }> = ({ runtime }) => {
  return(
    <>
      {
        !!runtime && `${Math.floor(runtime/60)}h ${Math.round(runtime%60)}m`
      }
    </>
  )
}