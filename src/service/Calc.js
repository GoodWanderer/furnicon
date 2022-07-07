const useCalc = () => {
  
  const calcWidthPercent = (value) => {

    const conteinter = document.querySelector('._container');

    // const widthPercent = value / 400 * 80 / (conteinter.offsetWidth) * 100
    const widthPercent = value / 400 * 90 / (conteinter.offsetWidth) * 100

    // console.log(1, value / 5);
    // console.log(2, value / 400 * 80);

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

  const calcWidthAll = (arr) => {
    let width = 0;
    arr.forEach((item) => {
      width += item.width;
    });
    return width;
  } 

  return {calcWidthPercent, calcWidthPercentItem, calcWidthAll}
}

export default useCalc;