import React from "react";
import success from "../../images/information-popup-success.svg";
import fail from "../../images/information-popup-fail.svg";

function InfoTooltip(props) {
    return (
        <div className={`popup ${props.isOpen ? `popup_opened` : null}`}>
            <div className='popup__container'>
                <button
                    className='popup__close-button'
                    type="button"
                    onClick={props.onClose}
                    aria-label="Кнопка закрытия окна">
                </button>
                <img
                    src={props.isSuccess ? success : fail}
                    alt={props.isSuccess ? "Белый круг с галочкой" : "Красный круг с крестиком"}
                    className="popup__icon"
                />
                <p className="popup__info">{props.message}</p>
            </div>
        </div>
    );
}

export default InfoTooltip;