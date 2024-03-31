import React from 'react'

const Card = ({cardimg,cardtext,carddesc}) => {
  return (
<div className="rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full" src={cardimg} alt="" />
      <div className="px-6 py-4">
        <p className="bg-blue-600 text-white text-center font-bold py-2 rounded">{cardtext}</p>
        <p className="text-gray-700 text-base mt-2">{carddesc}</p>
      </div>
    </div>
  )
}

export default Card