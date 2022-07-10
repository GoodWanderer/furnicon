import styled, {css} from 'styled-components';

const StyledBtn = styled.button`
  font-family: 'Inter';
  cursor: pointer;
  ${props => props.next && css`
    padding: 6px 12px;
    border-radius: 4px;
    background: ${props.theme.background.blue};
    width: 69px;
    height: 32px;

    font-weight: 700;
    font-size: 14px;
    line-height: 14px;
    color: #fff;
  `}
  ${props => props.cutting && css`
    padding: 8px 20px;
    border-radius: 5px;
    background: ${props.theme.background.grey};
    width: 186px;
    height: 33px;

    font-weight: 600;
    font-size: 14px;
    color: #1f1f1f;
  `}
`

const StyledButton = (props) => {
  return <StyledBtn {...props}/>
}

export default StyledButton;