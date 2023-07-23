import './Button.css';

const Button = ({ btn_txt, handleBtnClick, bgcolor, txtcolor }) => {

    return (
        <div>
            <button className='btn' style={{backgroundColor: bgcolor, color: txtcolor}} onClick={handleBtnClick}>{btn_txt}</button>
        </div>
    );
}

export default Button;