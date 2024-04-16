import React, { useEffect } from 'react';
import '../styles/components/_formdate.scss'

const FormDate = () => {
  useEffect(() => {
    const datePicker = document.querySelectorAll('input[type="date"]');
    datePicker.forEach(input => {
      input.style.color = 'black';
    });
  }, []);

  return (
    <div className='date__wrapper'>
      <div>
        <div className='date-title'>시작일</div>
        <input type="date" className='input'/>
      </div>
      <div>
        <div className='date-title'>종료일</div>
        <input type="date" className='input'/>
      </div>
    </div>
  )
}

export default FormDate;
