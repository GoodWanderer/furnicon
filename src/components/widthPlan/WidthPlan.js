import { useMemo } from 'react';

import { useSelector } from 'react-redux';

import useCalc from './../../service/Calc';

import { arrow } from '../../resources/img/configurationLayout';

const WidthPlan = () => {
  const { width } = useSelector(state => state);
  
  const { calcWidthPercent } = useCalc();

  const sizeWidth = useMemo(() => calcWidthPercent(width), [width]);

  return (
    <div
      style={{width: `calc(${sizeWidth}% + 12px`}}
      className="configuration-layout-plan__width-line">
      <span className="configuration-layout-plan__width-line-num">{width} мм</span>
      <span className="configuration-layout-plan__width-line-line">
        <span><img src={arrow} alt="<-" /></span>
        <span></span>
        <span><img src={arrow} alt="->" /></span>
      </span>
    </div>
  );
};

export default WidthPlan;