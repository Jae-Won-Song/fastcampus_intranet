import '../styles/components/_RadioForm.scss'

const RadioForm = () => {
  return (
    <>
      <div className='radio-wrapper'>
        <input type="radio" className="StyledRadio" name="유형" id="휴가" />
        <label htmlFor="휴가">휴가</label>
        <input type="radio" className="StyledRadio" name="유형" id="조퇴" />
        <label htmlFor="조퇴">조퇴</label>
        <input type="radio" className="StyledRadio" name="유형" id="외출" />
        <label htmlFor="외출">외출</label>
      </div>
    </>
  );
}

export default RadioForm;
