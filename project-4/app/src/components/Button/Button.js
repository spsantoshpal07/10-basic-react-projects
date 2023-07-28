import './Button.css';

const Button = ({ btnText, handleTagSearch }) => {
  return (
    <button type='button' className='btn' onClick={() => handleTagSearch(btnText)}>{btnText}</button>
  )
}

export default Button;