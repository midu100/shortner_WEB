import React, { useState } from "react";
import Btn from "./common/Btn";
import { Link } from "react-router";
import { Slide, toast } from "react-toastify";
import { authServices, urlServices } from "../api";

const ShortnerUrl = () => {
  const [shortUrl, setShortUrl] = useState("");
  const[longUrl,setLongUrl] = useState('')
  const[copy,setcopy] = useState(false)

  
  const handleShort = async ()=>{
    if(!longUrl){
        setShortUrl('')
    }

    try {

        const res = await urlServices.createShort(longUrl)        
        // console.log(res)
        setShortUrl(`http://localhost:2222/${res.shortUrl}`)

    } 
    
    catch (error) {
       console.log(error)    

       const errorMessage = error.response?.data?.message || "Something went wrong!";
    
        toast.error(errorMessage, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Slide,
        });
    }

  }

  const handleCopy = async() => {
      await navigator.clipboard.writeText(shortUrl)

    //   success
    toast.success('Copied!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Slide,
        });

    setcopy(true)    

    setTimeout(()=>{
        setcopy(false)
    },2000)


  };
  return (
    <>
      <section className="mt-[130px]">
        <div className="container">
          <div className="row flex justify-center">
            <div className="shortDiv w-[996px] flex flex-col items-center">
              <h1 className="text-4xl text-center md:text-5xl font-bold leading-tight bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
                Shorten Your Loooong Links :)
              </h1>

              <p className="w-[500px] text-gray-400 mt-4 text-[18px] text-center">
                Linkly is an efficient and easy-to-use URL shortening service
                that streamlines your online experience.
              </p>

              {/* Input Box */}
              <div className="mt-8 w-full flex items-center bg-[#111827] border border-white/10 rounded-full px-3 py-2">
                <input
                  onChange={(e)=>{setLongUrl(e.target.value)}}
                  value={longUrl}
                  type="text"
                  placeholder="Enter the link here"
                  className="flex-1 bg-transparent outline-none text-gray-300 placeholder-gray-500 px-3 text-sm"
                />

                <Btn onClick={handleShort} Name={"Short Link"} />
              </div>

              {/* Short URL Output Box */}
              {shortUrl && (
                <div className="mt-4 w-full flex items-center bg-[#111827] border border-white/10 rounded-full px-3 py-2">
                  <Link
                    to={shortUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-blue-400 px-3 text-sm truncate"
                  >
                    {shortUrl}
                  </Link>

                  <Btn
                    Name={copy ? 'Copied' : 'Copy'}
                    onClick={handleCopy}
                    className="bg-gradient-to-r from-blue-500 to-pink-500 text-white text-sm px-6 py-2 rounded-full hover:opacity-90 transition"
                  >
                    
                  </Btn>
                </div>
              )}

              <p className="text-gray-400 mt-4 text-[18px] text-center">
                You can create{" "}
                <span className="text-pink-500 font-medium">
                  unlimited links,view your links and count clicks .
                </span>{" "}
                Register Now to enjoy Unlimited usage
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShortnerUrl;
