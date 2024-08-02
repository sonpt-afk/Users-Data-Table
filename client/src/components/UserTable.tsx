import React, { useState } from 'react'

interface User {
  name: { title: string; first: string; last: string }
  login: { username: string }
  picture: { thumbnail: string }
}

interface Props {
  users: User[]
}

const UserTable: React.FC<Props> = ({ users }) => {
  // Initialize state to store the column being sorted and the sort order (ascending or descending)

  const [sortCol, setSortCol] = useState<string>('')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')

  // Function to handle when the user clicks on a column header to sort

  const handleSort = (col: string) => {
    // If the current column is the one being clicked and is being sorted in ascending order, switch to descending
    // Otherwise, start sorting in ascending order
    const newOrder = sortCol === col && sortOrder === 'asc' ? 'desc' : 'asc'
    setSortCol(col)
    setSortOrder(newOrder)
  }

  // Sort the user list based on the selected column and sort order

  const sortedUsers = [...users].sort((a, b) => {
    let aValue = ''
    let bValue = ''
    // Determine the value to compare based on the selected column

    if (sortCol === 'username') {
      aValue = a.login.username
      bValue = b.login.username
    } else if (sortCol === 'fullname') {
      aValue = `${a.name.title} ${a.name.first} ${a.name.last}`
      bValue = `${b.name.title} ${b.name.first} ${b.name.last}`
    }
    // Compare the two values and return the sort result

    if (sortOrder === 'asc') {
      return aValue.localeCompare(bValue)
    } else {
      return bValue.localeCompare(aValue)
    }
  })

  return (
    <table className='min-w-full border-collapse block md:table'>
      <thead className='block md:table-header-group'>
        <tr className='border border-gray-200 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto md:relative'>
          <th className='bg-gray-600 p-2 text-white font-bold md:border md:border-gray-200 text-center block md:table-cell'>
            <button onClick={() => handleSort('fullname')}>
              Full Name {sortCol === 'fullname' ? (sortOrder === 'asc' ? '↑' : '↓') : ''}
            </button>
          </th>
          <th className='bg-gray-600 p-2 text-white font-bold md:border md:border-gray-200 text-center block md:table-cell'>
            <button onClick={() => handleSort('username')}>
              Username {sortCol === 'username' ? (sortOrder === 'asc' ? '↑' : '↓') : ''}
            </button>
          </th>
          <th className='bg-gray-600 p-2 text-white font-bold md:border md:border-gray-200 text-center block md:table-cell'>
            Thumbnail
          </th>
        </tr>
      </thead>
      <tbody className='block md:table-row-group'>
        {sortedUsers.map((user, index) => (
          <tr className='border border-black' key={index}>
            <td className='flex justify-center align-center'>
              {user?.name.title} {user?.name.first} {user?.name.last}
            </td>
            <td className='border border-black text-center'>{user?.login?.username}</td>
            <td className='border border-black'>
              <img src={user?.picture?.thumbnail} alt='' className='block m-auto' />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default UserTable
