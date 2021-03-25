import React  from 'react';
import active from '../../assets/img/cash/active.png'
import hand from '../../assets/img/hand.svg'
import Correct from '../../assets/img/button/Correct.svg'
import Hover from '../../assets/img/button/Hover.svg'
import Inactive from '../../assets/img/button/Inactive.svg'
import Selected from '../../assets/img/button/Selected.svg'
import correct from '../../assets/img/button/Mobile/correct.svg'
import inactive from '../../assets/img/button/Mobile/inactive.svg'
import selected from '../../assets/img/button/Mobile/selected.svg'
import wrong from '../../assets/img/button/Mobile/wrong.svg'

const Preload=()=>{
  const img=[active,
    Inactive,
    hand,
    Correct,
    Hover,
    Inactive,
    Selected,
    correct,
    wrong,
    selected,
    inactive,
  ]
  return(
    <div style={{display:"none"}}>
      {img.map((el)=><img key={el} src={el} alt=""/>)}
    </div>
  )
}
export default Preload