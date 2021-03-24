import React  from 'react';

const Preload=()=>{
  const img=['../../assets/img/cash/active.png',
    '../../assets/img/cash/inactive.png',
    '../../assets/img/hand.svg',
    '../../assets/img/button/Correct.svg',
    '../../assets/img/button/Hover.svg',
    '../../assets/img/button/Inactive.svg',
    '../../assets/img/button/Selected.svg',
    '../../assets/img/button/Wrong.svg',
    '../../assets/img/button/Mobile/correct.svg',
    '../../assets/img/button/Mobile/inactive.svg',
    '../../assets/img/button/Mobile/selected.svg',
    '../../assets/img/button/Mobile/wrong.svg',
  ]
  return(
    <div style={{display:"none"}}>
      {img.map((el)=><img key={el} src={el} alt=""/>)}
    </div>
  )
}
export default Preload