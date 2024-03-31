"use client"

const Button = ({buttonText}) => {

  return (
    <button onClick={()=>window.open('https://calendly.com/barrettali786')} className="bg-black text-white py-2 px-4 rounded-lg hover:bg-green-600">
      {buttonText}
    </button>
  );
};

export default Button;
