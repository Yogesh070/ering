import { useState } from "react";
import dropdown from '../../images/drop-down.png'


function TargetLanguageDropdown({ selected, setSelected }) {
    const [isActive, setIsActive] = useState(false);
    const options = ["French", "English", "Spanish"];
    return (
        <div className="dropdown">
        <div className="dropdown-btn form-control" onClick={(e) => setIsActive(!isActive)}>
            {selected}
            <span><img src={dropdown} alt="drop-down icon"  className='size-icon'/></span>
        </div>
        {isActive && (
            <div className="dropdown-content">
            {options.map((option) => (
                <div
                onClick={(e) => {
                    setSelected(option);
                    setIsActive(false);
                }}
                className="dropdown-item"
                >
                {option}
                </div>
            ))}
            </div>
        )}
        </div>
    );
}

export default TargetLanguageDropdown;
