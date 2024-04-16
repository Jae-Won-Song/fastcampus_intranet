import { useState, useRef } from "react";
import arrowDown from '../assets/images/icon_chevron_down.svg'

export default function Dropdown() {
    const textOptions = [
        "전체",
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
        <div className="dropdownWrapper" ref={dropdownRef}>
            <div className="dropdownBox" onClick={toggleDropdown}>
                <div className="dropdown-wrap">{selectedOption || '전체'}</div><img src={arrowDown} alt="arrowDown" />
            </div>
            {isOpen &&
                <div className="selectWrapper">
                    {textOptions.map((option, index) => (
                        <div className="selectOptions" key={index} onClick={() => handleOptionClick(option)}>
                            {option}
                        </div>
                    ))}
                </div>
            }
        </div>
    );
}
