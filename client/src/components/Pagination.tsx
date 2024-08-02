import React from 'react'

interface Props {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

const Pagination: React.FC<Props> = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className='flex justify-center my-4'>
      <button
        className='px-4 py-2 bg-blue-500 text-white rounded mr-2'
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span className='px-4 py-2'>{`Page ${currentPage} of ${totalPages}`}</span>
      <button
        className='px-4 py-2 bg-blue-500 text-white rounded ml-2'
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  )
}

export default Pagination
