import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';

const Pagination = () => {
    const { page, handlePageChange, totalPages } = useContext(AppContext);
  return (
    <div className='w-full flex justify-center items-center border border-slate-200 fixed bottom-0 bg-white'>
        <div className='flex justify-between w-11/12 max-w-[670px] py-2'>
        <div className='flex gap-x-2'>
                {
                    /* page chi value greater than 1 asel trch he button show kra. */
                    page > 1 && (
                        <button className='border rounded-md px-4 py-1 bg-slate-300 font-bold hover:border-red-400 hover:bg-transparent' onClick={() => handlePageChange(page - 1)}>Previous</button>
                    )
                }

                {
                    /* last page sathi next button chi value hide karaychi ahe. */
                    page < totalPages && (
                        <button className='border rounded-md px-4 py-1 bg-slate-300 font-bold hover:border-red-400 hover:bg-transparent' onClick={() => handlePageChange(page + 1)}>Next</button>
                    )
                }
        </div>
            <p className='font-bold text-sm mt-[6px]'>Page {page} of {totalPages}</p>
        </div>
    </div>
  )
}

export default Pagination;