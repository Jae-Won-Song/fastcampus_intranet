import Badge from './Badge'

import '../styles/components/_myList.scss'

const MyList = () => {
  return (
    <div className='my__list'> 
      <div className='top-info'>
      <p className='__title'>외출 신청 <Badge/></p>
      <p>2024.04.15~2024.04.17</p>
      </div>
      <p className='__article'>병원 진료로 인해 외출 신청합니다.</p>

    </div>  
  )
}

export default MyList
