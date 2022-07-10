import style from 'styled-components';

const StyledButton = style.button`
  padding: 6px 12px;
  border-radius: 4px;
  background: #00adb5;

  width: 69px;
  height: 32px;
  font-family: 'Inter';
  font-weight: 700;
  font-size: 14px;
  line-height: 14px;
  color: #fff;
  cursor: pointer;
`

const Button = (props) => {
  return <StyledButton {...props}/>
}

export default Button;