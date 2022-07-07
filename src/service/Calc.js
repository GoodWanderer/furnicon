const useCalc = () => {
  
  const calcWidthPercent = (value) => {

    const conteinter = document.querySelector('._container');
    const widthPercent = value / 400 * 90 / (conteinter.offsetWidth) * 100
    if ( widthPercent < 100 - 215/conteinter.offsetWidth * 100) {
      return widthPercent;
    }
    return 100 - 215/conteinter.offsetWidth * 100;
  }
  
  const calcWidthPercentItem = (value) => {
    const widthPercent = value / 400;
    if (widthPercent < 1)
      return (widthPercent - (1 - widthPercent) * 10 / 80) * 80;
    else if (widthPercent > 1)
      return (widthPercent + (widthPercent - 1) * 10 / 80) * 80;

    return widthPercent * 80;
  }

  const calcWidthAll = (arrModules, arrMiddles) => {
    let width = 0;
    arrMiddles.forEach((item) => {
      if (item.content !== 'body')
        width += item.width;
    });
    arrModules.forEach((item) => {
      width += item.width;
    });
    return width;
  } 

  return {calcWidthPercent, calcWidthPercentItem, calcWidthAll}
}

export default useCalc;