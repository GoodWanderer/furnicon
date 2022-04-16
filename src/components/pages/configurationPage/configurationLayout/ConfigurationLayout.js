import { useMemo } from 'react';

import { useSelector } from 'react-redux';

import NavLayout from './../../../nav/navLayout/NavLayout';
import ButtonMode from './../../../button/buttonMode/ButtonMode';

import SizePlan from './../../../sizePlan/SizePlan';

import ButtonFilterType from './../../../button/buttonFilter/buttonFilterType/ButtonFilterType';
import ButtonFilterFeatures from './../../../button/buttonFilter/buttonFilterFeatures/ButtonFilterFeatures';

import ListModulesCommon from './../../../listModules/listModulesCommon/ListModulesCommon';


import './configurationLayout.scss';
import ListModulesSelected from './../../../listModules/listModulesSelected/ListModulesSelected';

const ConfigurationLayout = ({setPage}) => {
  const { modulesQuanity } = useSelector(state => state);
  // const [productsSelecteed, setProductsSelecteed] = useState([])
  // const [templateProducts, setTemplateProducts] = useState([
  //   {
  //     'id': 1,
  //     'uid': false,
  //   },
  //   {
  //     'id': 2,
  //     'uid': false,
  //   }, 
  // ])

  // const [uidActiveProduct, setUidActiveProduct] = useState(false)
  // const [selectedProduct, setSelectedProduct] = useState(false);

  // const onChangeTemplates = (id) => {
  //   if (uidActiveProduct !== false) {
  //     const item1 = templateProducts.find(function(item) {
  //       if (item.id === id) return true;
  //     });
  //     const item2 = productsSelecteed.find(function(item) {
  //       if (item.uid === uidActiveProduct) return true;
  //     });
  //     setTemplateProducts(templateProducts => [
  //       ...templateProducts.filter(item => { if (item.id < id) return item}),
  //       {...item1, uid: item2.uid, img: item2.img},
  //       ...templateProducts.filter(item => { if (item.id > id) return item}),
  //     ])
  //     setProductsSelecteed(productsSelecteed => [
  //       ...productsSelecteed.filter(item => { if (item.uid !== item2.uid) return item}),
  //     ])
  //     setUidActiveProduct(false)
  //   }
  // }

  // const renderItemsSelected = (itmes) => {
  //   return itmes.map(item => {
  //     return (
  //       <div
  //         key={item.uid} 
  //         onClick={() => setUidActiveProduct(item.uid)}
  //         className="configuration-layout-plan-selected__item">
  //         <div className={`configuration-layout-plan-selected__img ${item.uid === uidActiveProduct ? 'active' : ''}`}>
  //           <img src={item.uid === uidActiveProduct ? item.activeImg : item.img} alt="Товар" />
  //         </div>
  //       </div>
  //     )
  //   });
  // }

  // const renderItemsTemplate = (items, itemsSelecteed) => {
  //   const yes = items.find(function(item) {
  //     if (item.uid) return true;
  //   });
  //   return items.map(item => {
  //     if (yes && item.uid) {
  //       return (
  //         <div 
  //           key={item.id}
  //           className="configuration-layout-plan-template__wrapper-item used">
  //           <div className={`configuration-layout-plan-selected__img`}>
  //             <img src={item.img} alt="Товар" />
  //           </div>
  //         </div>
  //       )
  //     } else {
  //       return (
  //         <div 
  //           key={item.id}
  //           onClick={() => onChangeTemplates(item.id)}
  //           className="configuration-layout-plan-template__wrapper-item">
  //         </div>
  //       ) 
  //     }
  //   })
  // }

  // // const selectedItems = selectedProduct ? filterSelectedItem(products) : products;

  // const selected = renderItemsSelected(productsSelecteed);

  // const template = renderItemsTemplate(templateProducts, productsSelecteed);

  // // * 

  // // *
  // const [activeChangeWidth, setActiveChangeWidth] = useState(false);
  // const [width, setWidth] = useState(165);
  // const [kWidth, setKWidth] = useState(1000);

  const renderQuanityMessage = (q) => {
    if (q === 1)
      return '1 модуль';
    else if (q > 1 && q < 5) 
      return `${q} модулья`;
    else
      return `${q} модулей`;
  }

  const modulesQuanityMessage = useMemo(() => renderQuanityMessage(modulesQuanity), [modulesQuanity]);

  const onSetPage = () => {                  
    setPage(3)
  }

  return (
    <>
      <NavLayout onSetPage={onSetPage}/>
      <main>
        <section className="configuration-layout">
          <ButtonMode />

          <div
            // onMouseUp={() => setActiveChangeWidth(false)} 
            className="configuration-layout-plan">
            <div 
              // onMouseMove={(e) => onChageSize(e)}
              // onMouseMove={(e) => onChageSize(e)} 
              // onMouseUp={() => setActiveChangeWidth(false)}
              className="configuration-layout-plan__content _container">

              <SizePlan />

              <div className="configuration-layout-plan__template configuration-layout-plan-template">
                {/* <div className={`configuration-layout-plan-template__wrapper config-1 active ${uidActiveProduct?'selected':''}`}>
                  <div className="configuration-layout-plan-template__wrapper-1">
                    {template}
                  </div>
                  <div className="configuration-layout-plan-template__wrapper-2"></div>
                </div>
                <div className="configuration-layout-plan-template__wrapper config-2">
                  <div className="configuration-layout-plan-template__wrapper-1">
                    <div className="configuration-layout-plan-template__wrapper-item"></div>
                    <div className="configuration-layout-plan-template__wrapper-item"></div>
                  </div>
                  <div className="configuration-layout-plan-template__wrapper-2">
                    <div className="configuration-layout-plan-template__wrapper-item"></div>
                    <div className="configuration-layout-plan-template__wrapper-item"></div>
                  </div>
                </div>
                <div className="configuration-layout-plan-template__wrapper config-3">
                  <div className="configuration-layout-plan-template__wrapper-1">
                    <div className="configuration-layout-plan-template__wrapper-item"></div>
                    <div className="configuration-layout-plan-template__wrapper-item"></div>
                  </div>
                  <div className="configuration-layout-plan-template__wrapper-2">
                    <div className="configuration-layout-plan-template__wrapper-item"></div>
                    <div className="configuration-layout-plan-template__wrapper-item"></div>
                  </div>
                </div>
                <div className="configuration-layout-plan-template__wrapper config-4">
                  <div className="configuration-layout-plan-template__wrapper-1">
                    <div className="configuration-layout-plan-template__wrapper-item"></div>
                    <div className="configuration-layout-plan-template__wrapper-item"></div>
                  </div>
                  <div className="configuration-layout-plan-template__wrapper-2"></div>
                </div> */}
              </div>
              {/* <div className="configuration-layout-plan__selected configuration-layout-plan-selected">
                {selected}
              </div> */}
              <ListModulesSelected />
            </div>
          </div>
        </section>
        <section className="configuration-filter">
          <div className="configuration-filter__content _container">
            <ButtonFilterType />
            <div className="configuration-filter__filters configuration-filter-filters">
              <ButtonFilterFeatures />
              <div className="configuration-filter-filters__quanity">{modulesQuanityMessage}</div>
            </div>
            <ListModulesCommon />
          </div>
        </section>
      </main>
    </>
  );
};

export default ConfigurationLayout;