// import React from 'react'

// const Button = ({text, bg="#FF624C", fontName="Montserrat", fontWidth="bold", size="xl", color="white", paddingY="4", paddingX="10", radius="10"}) => {
//   return (
//     <button className={'bg-${bg} font-${fontName} font-${fontWidth} text-${size} text-${color} py-${paddingY} px-${paddingX} rounded-${radius}'}>{text}</button>
      
   
//   )
// }

// export default Button

import React from 'react';

const Button = ({
  text,
  bg = "#FF624C",
  fontName = "Montserrat",
  fontWidth = "bold",
  size = "xl",
  color = "white",
  paddingY = "16",
  paddingX = "40",
  radius = "10",
  
}) => {
  const style = {
    backgroundColor: bg,
    fontFamily: fontName,
    fontWeight: fontWidth,
    fontSize: size,
    color: color,
    padding: `${paddingY}px ${paddingX}px`,
    borderRadius: `${radius}px`,
    cursor: 'pointer',
  };

  return (
    <button style={style} >
      {text}      
    </button>
  );
};

export default Button;
