import { Outlet, useSearchParams } from 'react-router-dom'

export const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const status = searchParams.get('status')
  return (
    <>
      <div>
        <span>Filters: </span>
        <button onClick={() => setSearchParams({})}>All Users</button>
        <button onClick={() => setSearchParams({ status: 'active' })}>
          Active Users
        </button>
      </div>
      {status === 'active' ? (
        <>
          <h2>User 1 - active</h2>
          <h2>User 2 - active</h2>
        </>
      ) : (
        <h2>User 3 - inactive</h2>
      )}
      <Outlet />
    </>
  )
}
