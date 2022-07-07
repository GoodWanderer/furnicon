import { useDispatch, useSelector } from 'react-redux';
import { setCurrentModuleSelected } from './../actions/index';

import { v4 as uuidv4 } from 'uuid';

import imgUp from './img02.svg';
import imgUpActive from './img02-active.svg';
import imgMiddle from './img05.svg';
import imgMiddleActive from './img05-active.svg';
import imgDown from './img022.svg';
import imgDownActive from './img022-active.svg';

const error = () => {
  console.log(`Ошибка в пользовательском хуке "ModulesOperation"`);
}

const useModulesOperation = ({arrUp=[], updateArrFunctionUp=error, arrDown=[], updateArrFunctionDown=error, arrMiddle=[], updateArrFunctionMiddle=error}) => {
  const {depth, height} = useSelector(state => state);
  const dispatch = useDispatch();

  const onAddModulesSelectedUp = () => {
    const item = {
      id: uuidv4(), 
      type: 'up', 
      mounted: 'x0',
      width: 600,
      height: 800,
      depth,
      modeles: {
        up1: false,
        up3: {
          startId: 1,
          id: 1,
          img: imgUp,
          activeImg: imgUpActive,
          replaceMax: 3,
          replaceMin: null,
          indent: 0,
          appointment: 'storage',
        }
      }
    }
    dispatch(updateArrFunctionUp([...arrUp, item]));
    dispatch(setCurrentModuleSelected(item));
  }

  const onAddModulesSelectedMiddle =  () => {
    const middle = {
      id: uuidv4(), 
      type: 'middle',
      width: 600,
      height: height,
      depth,
      modeles: {
        middle: {
          startId: 5,
          id: 5,
          img: imgMiddle,
          activeImg: imgMiddleActive,
          replaceMax: null,
          replaceMin: null,
          indent: 0,
          appointment: 'storage', 
        },
      },
      shelves: 0,
      removableShelves: false,
      material: false,
      backWall: false,
    }
    dispatch(updateArrFunctionMiddle([middle, ...arrMiddle]));
    dispatch(setCurrentModuleSelected(middle));
  }

  const onAddModulesSelectedDown = () => {
    const item = {
      id: uuidv4(), 
      type: 'down',
      width: 600,
      height: 800,
      depth,
      modeles: {
        down: {
          startId: 2,
          id: 2,
          img: imgDown,
          activeImg: imgDownActive,
          replaceMax: 3,
          replaceMin: null,
          indent: 0,
          appointment: 'storage', 
        },
      },
      shelves: 0,
      removableShelves: false,
      material: false,
      backWall: false,
      front: false,
      edge: false,
      ties: 80, 
    }
    dispatch(updateArrFunctionDown([...arrDown, item]));
    dispatch(setCurrentModuleSelected(item));
  }

  const onChangeTypeDownToMiddle = (id) => {
    const newArrDown = arrDown.filter(item => {
      if (item.id !== id) return item; 
    });
    dispatch(updateArrFunctionDown(newArrDown));
    dispatch(setCurrentModuleSelected(false));
    onAddModulesSelectedMiddle();
  }

  return {onAddModulesSelectedUp, onAddModulesSelectedMiddle, onAddModulesSelectedDown, onChangeTypeDownToMiddle}
}

export default useModulesOperation;