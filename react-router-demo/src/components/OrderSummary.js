import { useNavigate } from 'react-router-dom'

export const OrderSummary = () => {
  const navigate = useNavigate()

  return (
    <>
      <div>
        Order confirmed!
        <button onClick={() => navigate(-1)}>Go back</button>
      </div>
    </>
  )
}
