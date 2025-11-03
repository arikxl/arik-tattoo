import React from 'react'


const styles =
    `
.loader {
  width: 200px;
  height: 200px;
  display: inline-block;
  position: relative;
}
.loader::after,
.loader::before {
  content: '';
  width: 200px;
  height: 200px;
  border: 2px solid #FFF;
  position: absolute;
  left: 0;
  top: 0;
  box-sizing: border-box;
  animation: rotation 2s ease-in-out infinite;
}
.loader::after {
  border-color: rgb(251, 191, 36);
  animation-delay: 1s;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
`

const TattooLoader = () => {
    return (
        <div className='mt-24 '>
            <style>{styles}</style>
            <div className="loader ">
            </div>
        </div>
    )
}

export default TattooLoader