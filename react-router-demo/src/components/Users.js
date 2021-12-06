import { Outlet, useSearchParams } from 'react-router-dom'

export const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const showActiverUsers = searchParams.get('filter') === 'active'
  return (
    <>
      <div>
        <button onClick={() => setSearchParams({ filter: 'active' })}>
          Active Users
        </button>
        <button onClick={() => setSearchParams({})}>Reset Filter</button>
      </div>
      {showActiverUsers ? (
        <h2>Showing active users</h2>
      ) : (
        <h2>Showing all users</h2>
      )}
      <Outlet />
    </>
  )
}
