import React, { useEffect, useState } from 'react'
import UserTable from 'src/components/UserTable'
import Pagination from 'src/components/Pagination'

interface User {
  name: { title: string; first: string; last: string }
  login: { username: string }
  picture: { thumbnail: string }
}

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUsers = async (page: number) => {
      setLoading(true)
      try {
        const res = await fetch(`http://localhost:5000/api/users?page=${page}&results=10`)
        const data = await res.json()
        setUsers(data.results)
      } catch (err) {
        console.log(err)
      } finally {
        setLoading(false)
      }
    }
    fetchUsers(currentPage)
  }, [currentPage])

  return (
    <div className='container mx-auto'>
      <h1 className='text-2xl font-bold text-center my-4'>Random User List</h1>
      {loading ? (
        <div className='text-center'>Loading ...</div>
      ) : (
        <>
          <UserTable users={users} />
          <Pagination currentPage={currentPage} totalPages={10} onPageChange={setCurrentPage}></Pagination>
        </>
      )}
    </div>
  )
}

export default App
