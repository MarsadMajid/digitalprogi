import React from 'react'

const Card2 = ({card2img}) => {
  return (
<div className="relative h-96 w-full overflow-hidden">
      <img
        id="hover-cards"
        src="https://static.wixstatic.com/media/25f9e8_b517ee9da190446a9982cbd38c19390d~mv2.jpg/v1/crop/x_0,y_123,w_300,h_402/fill/w_296,h_396,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/300x0w.jpg"
        alt=""
        className="w-full h-full object-cover"
      />
      <div className="absolute mt-56 inset-0 bg-blue-500 bg-opacity-50 flex hover:mt-20 duration-300 ">
        <div className=" text-white">
          <h2 className="text-xl font-semibold mb-2">Nicole Boyd</h2>
          <p className="text-sm">
            CEO of Prept Concierge <br /> <br /> When we joined up with
            Digital Prodigee it was fast and efficient.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Card2