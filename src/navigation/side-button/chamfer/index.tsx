import React, { FC } from "react";

type ChamferProps = {
  position: 'top' | 'bottom';
  color?: string;
};

const Chamfer: FC<ChamferProps> = ({ position, color = 'black' }) => {
  return (
    <>
      {position === 'top' && <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M0 100H100V0.0558472C99.9698 55.2587 55.2099 100 0 100Z" fill={color} />
      </svg>}
      {position === 'bottom' && <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M100 99.9442C99.9698 44.7413 55.2099 0 0 0H100V99.9442Z" fill={color}/>
      </svg>}
    </>
  )
}

export default Chamfer;
