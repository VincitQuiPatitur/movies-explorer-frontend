import React from "react";
import popupImage from "../../images/information-popup-success.svg"

/*
Попап пока что появляется просто при переходе на страницу регистрации, сделать его открывающимся только после отправки данных формы и сделать вариативность изображения и надписии в зависимости от успеха регистрации/авторизации */
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
                <img src={popupImage} alt="Чёрный круг с галочкой" className="popup__icon"/>
                <p className="popup__info">Вы успешно зарегистрировались!</p>
            </div>
        </div>
    );
}

export default InfoTooltip;