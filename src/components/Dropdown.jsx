import { useState, useRef } from "react";
import arrowDown from '../assets/images/icon_chevron_down.svg'

export default function Dropdown() {
    const textOptions = [
        "전체보기",
        "휴가",
        "조퇴",
        "외출",
    ];

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <div className="DropdownWrapper" ref={dropdownRef}>
            <div className="DropdownBox" onClick={toggleDropdown}>
                {selectedOption || '유형을 선택하세요'}
                <div className="Arrow"><img src={arrowDown} alt="arrowDown" /></div>
            </div>
            {isOpen &&
                <div className="SelectWrapper">
                    {textOptions.map((option, index) => (
                        <div className="SelectOptions" key={index} onClick={() => handleOptionClick(option)}>
                            {option}
                        </div>
                    ))}
                </div>
            }
        </div>
    );
}
