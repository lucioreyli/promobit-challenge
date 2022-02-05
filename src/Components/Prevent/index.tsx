import { useEffect } from "react"
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { pageRange } from "~/Constants/pageRange"
import { Home } from "~/Pages/Home"

export const Prevent: React.FC<{ refer: string }> = ({ refer }) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const identifier = Number(id)

  useEffect(() => {
    if(isNaN(identifier)){
      navigate(refer)
    }
  }, [])

  return(
    <>
    {
       identifier < pageRange.MIN_PAGE_LIMIT || identifier > pageRange.MAX_PAGE_LIMIT?
        <Navigate to={refer}/> 
        :<Home/>
    }
    </>
  )
}