import React from 'react'
import { IoCopy } from 'react-icons/io5'
import { Link } from 'react-router'
import { MdQrCode2 } from "react-icons/md";

const LinkTable = () => {
  return (
    <>
      <section className="py-[40px]">
        <div className="container">
          <div className="row">

            {/* Table Wrapper */}
            <div className="bg-[#0f172a] rounded-[12px] overflow-hidden border border-[#1e293b]">

              {/* Table Head */}
              <div className="flex items-center text-[14px] text-gray-400 px-[20px] py-[14px] border-b border-[#1e293b]">

                <div className="w-[22%]">Short Link</div>
                <div className="w-[28%]">Original Link</div>
                <div className="w-[15%] text-center">QR Code</div>
                <div className="w-[10%] text-center">Clicks</div>
                <div className="w-[15%] text-center">Status</div>
                <div className="w-[10%] text-right">Date</div>

              </div>

              {/* Row 1 */}
              <div className="flex items-center px-[20px] py-[16px] border-b border-[#1e293b] text-[14px] text-gray-300">

                <div className="short w-[22%] flex gap-[15px] items-center">
                  <Link className="text-blue-400 hover:underline">
                    https://linkly.com/Bn41aC0lnxj
                  </Link>

                  <button className='cursor-pointer'><IoCopy className='text-[18px]'/></button>
                </div>

                <div className="long w-[28%] flex items-center gap-[10px]">
                  <span className="w-[22px] h-[22px] bg-blue-500 rounded-full flex items-center justify-center text-white text-[12px]">
                    t
                  </span>
                  <span className="truncate">
                    https://www.twitter.com/tweets/8erelC0inu/
                  </span>
                </div>

                <div className="w-[15%] flex justify-center">
                  <div className="w-[34px] h-[34px] bg-gray-700 rounded-[6px] flex items-center justify-center text-[10px]">
                    <button className='w-[34px] h-[34px]'><MdQrCode2 className='text-[34px]'/></button>
                  </div>
                </div>

                <div className="w-[10%] text-center">
                  1313
                </div>

                <div className="w-[15%] flex justify-center">
                  <span className="px-[12px] py-[4px] rounded-full bg-green-500/10 text-green-400 text-[12px]">
                    Active
                  </span>
                </div>

                <div className="w-[10%] text-right text-gray-400">
                  Oct - 10 - 2023
                </div>

              </div>

              {/* Row 2 */}
              <div className="flex items-center px-[20px] py-[16px] text-[14px] text-gray-300">

                <div className="short w-[22%] flex gap-[15px] items-center">
                  <Link className="text-blue-400 hover:underline">
                    https://linkly.com/Bn41aC0lnxj
                  </Link>

                  <button className='cursor-pointer'><IoCopy className='text-[18px]'/></button>
                </div>

                <div className="w-[28%] flex items-center gap-[10px]">
                  <span className="w-[22px] h-[22px] bg-red-500 rounded-full flex items-center justify-center text-white text-[12px]">
                    Y
                  </span>
                  <span className="truncate">
                    https://www.youtube.com/watch?v=8J7ZmH0iXuk
                  </span>
                </div>

                <div className="w-[15%] flex justify-center">
                  <div className="w-[34px] h-[34px] bg-gray-700 rounded-[6px] flex items-center justify-center text-[10px]">
                     <button className='w-[34px] h-[34px]'><MdQrCode2 className='text-[34px]'/></button>
                  </div>
                </div>

                <div className="w-[10%] text-center">
                  4313
                </div>

                <div className="w-[15%] flex justify-center">
                  <span className="px-[12px] py-[4px] rounded-full bg-yellow-500/10 text-yellow-400 text-[12px]">
                    Inactive
                  </span>
                </div>

                <div className="w-[10%] text-right text-gray-400">
                  Oct - 08 - 2023
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default LinkTable
