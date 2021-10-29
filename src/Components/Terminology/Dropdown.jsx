import { useState } from "react";
import dropdown from '../../images/drop-down.png'


function Dropdown({ selected, setSelected }) {
    const [isActive, setIsActive] = useState(false);
    const options = ["All domain", "domain", "Angular"];
    return (
        <div className="dropdown">
        <div className="dropdown-btn form-control" onClick={(e) => setIsActive(!isActive)}>
            {selected}
            <span className="fas fa-caret-down"><img src={dropdown} alt=""  className='size-icon' /></span>
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

export default Dropdown;
