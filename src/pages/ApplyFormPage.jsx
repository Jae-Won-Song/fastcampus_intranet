import RadioForm from '../components/RadioForm';
import Article from '../components/Article';
import FormDate from '../components/FormDate';

import '../styles/components/_apply.scss';
import '../styles/components/_article.scss';
import '../styles/components/_button.scss'

const FormTitle = () => {
  return (
    <div className='wrapper'>
      <div className='form'>
          <div className='__cat'>휴가 / 조퇴 / 외출 신청</div>
            <div className='title'>제목</div>
          <input type="text" name="titleInput" className="input" placeholder='제목을 입력하세요.'/>
          <div>유형</div>
        <div>
          <RadioForm/>
        </div>
        <Article/>
      </div>
      <FormDate/>
      <button className='apply-btn'>제출하기</button>
    </div>
  );
}

export default FormTitle;
