import React, { useEffect, useState } from 'react'
import { IoCopy } from 'react-icons/io5'
import { Link } from 'react-router'
import { MdQrCode2 } from "react-icons/md";
import { urlServices } from '../../api';
import { Slide, toast } from 'react-toastify';

const LinkTable = () => {
  const [data,setData] = useState(null)
  const [copy,setCopy] = useState(false)


  useEffect(()=>{

    (async()=>{
      try {
        const res = await urlServices.getAll()
        setData(res)
      } 
      
      catch (error) {
        console.log(error)  
      }
    })()

  },[])
  console.log(data)


  return (
    <>
      <section className="py-[40px] mt-15">
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

              {
                data?.map((item,i)=>(
                  <div className="flex items-center px-[20px] py-[16px] border-b border-[#1e293b] text-[14px] text-gray-300">

                    <div className="short w-[22%] flex gap-[15px] items-center">
                      <a
                        href={`http://localhost:2222/${item.urlShort}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline">

                        {`http://localhost:2222/${item.urlShort}`}

                      </a>

                      <button className='cursor-pointer'><IoCopy className='text-[18px]'/></button>
                    </div>

                    <div className="long w-[28%] flex items-center gap-[10px]">
                      <span className="w-[22px] h-[22px] bg-blue-500 rounded-full flex items-center justify-center text-white text-[12px]">
                        t
                      </span>
                      <span className="truncate">
                        {item.urlLong}
                      </span>
                    </div>

                    <div className="w-[15%] flex justify-center">
                      <div className="w-[34px] h-[34px] bg-gray-700 rounded-[6px] flex items-center justify-center text-[10px]">
                        <button className='w-[34px] h-[34px]'><MdQrCode2 className='text-[34px]'/></button>
                      </div>
                    </div>

                    <div className="w-[10%] text-center">
                      {item.visitHistory.length}
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

                ))
              }


            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default LinkTable
