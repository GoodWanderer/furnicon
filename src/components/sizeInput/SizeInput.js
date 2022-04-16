import { useSelector, useDispatch } from 'react-redux';
import { setLength, setWidth, setDepth, setHeight, setSizeError} from '../../actions';

const SizeInput = () => {
  const { length, width, depth, height, sizeError} = useSelector(state => state);
  const dispatch = useDispatch();

  const onChangeState = (func, value) => {
    if (value === '')
      dispatch(func(value))
    else if (value > 0) 
      dispatch(func(value))
    if (length !== '' && width !== '' && depth !== '' && height !== '')
      dispatch(setSizeError(false));
  }

  return (
    <>
      <h2 className="configuration-start__title">Введите размеры кухни</h2>
      <div className="configuration-start__size">
        <div 
          className={`configuration-start__input ${sizeError&&length === ''?'size-error':''}`}>
          <input 
            type="number"
            required
            placeholder="Длина в мм"
            value={length} 
            onChange={e => onChangeState(setLength, e.target.value)}
            />
        </div>
        <div 
          className={`configuration-start__input ${sizeError&&width === ''?'size-error':''}`}>
          <input 
            type="number"
            required
            placeholder="Ширина в мм"
            value={width} 
            onChange={e => onChangeState(setWidth, e.target.value)}
            />
        </div>
        <div 
          className={`configuration-start__input ${sizeError&&depth === ''?'size-error':''}`}>
          <input 
            type="number"
            required 
            placeholder="Глубина в мм"
            value={depth}
            onChange={e => onChangeState(setDepth, e.target.value)}
            />
        </div>
        <div 
          className={`configuration-start__input ${sizeError&&height === ''?'size-error':''}`}>
          <input 
            type="number" 
            required
            placeholder="Высота в мм" 
            value={height}
            onChange={e => onChangeState(setHeight, e.target.value)}
            />
        </div>
      </div>
    </>
  );
};

export default SizeInput;