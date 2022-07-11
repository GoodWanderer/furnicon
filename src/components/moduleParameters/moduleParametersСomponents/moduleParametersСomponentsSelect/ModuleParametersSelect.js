import { useState } from 'react';

import { useDispatch } from 'react-redux';

import styled from "styled-components";

import { selectSvg } from "../../../../resources/img/moduleParameters";

const StyledSelect = styled.div`
  margin-top: ${props => props.margin || '16px'};
`
const StyledSelectTitle = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #8F97A3;
`
const StyledSelectCurrent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  width: 100%;
  background: #F1F2F4;
  border-radius: 4px;
  margin-top: ${props => props.margin || '6px'};
  cursor: pointer;
`
const StyledSelectText = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #393E46;
  opacity: 0.9;
`
const StyledSelectImg = styled.div`
  width: 13px;
  height: 9px;
  img {
    width: 100%;
    height: 100%;
  }
`
const StyledSekectList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  z-index: 99999;
`
const StyledSelectItem = styled.li`
  width: 100%;
  background: #F1F2F4;
  padding: 8px 12px;
`

const ModuleParametersSelect = ({name, current, funcSelection, list, ...props}) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false)

  const renderList = () => {
    const arr = list.map(item => {
      if (item !== current)
        return (
          <StyledSelectItem 
            key={item}
            onClick={() => dispatch(funcSelection(item))}>
            <StyledSelectText>{item}</StyledSelectText>
          </StyledSelectItem>
        )
    });
    return (<StyledSekectList>{arr}</StyledSekectList>)
  }

  const listView = open ? renderList() : null; 

  return (
    <StyledSelect margin={props.blockMarginTop}>
      <StyledSelectTitle>{name}</StyledSelectTitle>
      <StyledSelectCurrent 
        onClick={() => setOpen(open => !open)}
        margin={props.CurrentMarginTop}>
        <StyledSelectText>{current}</StyledSelectText>
        <StyledSelectImg><img src={selectSvg} alt="Выбрать" /></StyledSelectImg>
        {listView}
      </StyledSelectCurrent>
    </StyledSelect>
  );
};

export default ModuleParametersSelect;