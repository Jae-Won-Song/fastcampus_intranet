import Dropdown from '../components/Dropdown';
import MyList from '../components/MyList';

import '../styles/components/_button.scss'
import '../styles/components/_applylist.scss'


const ApplyList = () => {
  return (
    <div className='list-wrapper'>
      <div className='list-title'>휴가 / 조퇴 / 외출 신청내역</div>
        <div className='nav-top'>
          <Dropdown/>
          <button className='apply-btn'>신청하기</button>
        </div>
      <MyList/>
      <MyList/>
    </div>
  )
}

export default ApplyList


