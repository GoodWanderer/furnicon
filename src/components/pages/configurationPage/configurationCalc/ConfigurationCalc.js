import { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';

import { v4 as uuidv4 } from 'uuid';

import {detailsSvg, cuttingSvg} from './../../../../resources/img/configurationCalc/index';

import eichesilPng from './eichesil.png';
import cherryPng from './cherry.png';

import rectangle from './rectangle.png';

import './configurationCalc.scss';

const ConfigurationCalc = () => {
  const {modulesSelectedDown} = useSelector(state => state);

  const [sidewall, setSidewall] = useState([]);
  const [shelves, setShelves] = useState([]);
  const [desk, setDesk] = useState([]);
  const [backWall, setBackWall] = useState([]);
  const [frontWall, setFrontWall] = useState([]);
  const [Cap, setCap] = useState([]);
  const [bottom, setBottom] = useState([]);
  const [ties, setTies] = useState([]);

  const [pt, setPt] = useState([]);
  const [bt, setBt] = useState([]);
  const [dt, setDt] = useState([]);

  const materialImg = {
    'Eichesil': eichesilPng,
    'Cherry': cherryPng
  }

  useEffect(() => {
    calcDetails();
  }, [])

  const checkF = (item, jtem) => {
    const startW = item;
    const startH = item;
    const startMaterial = item.material;
    const startEdge = item.edge
    const x = jtem.x;
    const material = jtem.material;
    const edge = jtem.edge
    if (
        startH-startW-16-28===x && 
        startMaterial === material && 
        startEdge === edge
      ) 
      return true
    return false 
  }

  const pushListItem = (arr, name, material, x, y, quantity, edge) => {
    arr.push({id: uuidv4(), name, material, x, y, quantity, edge});
  }

  const updateQuantity = (arr, jtem, quantity) => {
    return arr.map(el => {
      if (el.id === jtem.id)
        return {...jtem, quantity: jtem.quantity + quantity,}
      else {
        return el
      }
    })
  }

  const calcDetails = () => {
    let check;
    let sidewallArr = [];
    let shelvesArr = [];
    let backWallArr = [];
    let bottomArr = [];
    let frontWallArr = [];
    let tiesArr = [];

    let ptArr = [];
    let btArr = [];
    let dtArr = [];

    modulesSelectedDown.forEach(item => {
      if (item?.modeles?.down?.id) {
        check = 0;
        sidewallArr.forEach(jtem => {
          if (jtem.x === item.depth-16 && jtem.y === item.height-32 && jtem.material === item.material && jtem.edge === item.edge) {
            check = 1;
            sidewallArr = updateQuantity(sidewallArr, jtem, 2);
          }
        }); 
        if (check === 0) 
          pushListItem(sidewallArr, 'Боковые стенки', item.material, item.depth-16, item.height-32, 2, item.edge);
        setSidewall([...sidewallArr]);

        check = 0;
        let minus = 32;
        if (item.removableShelves)
          minus = 34;
        shelvesArr.forEach(jtem => {
          if (jtem.x === item.width-minus && jtem.y === item.depth && jtem.material === item.material && item.shelves !== 0 && jtem.edge === item.edge) {
            check = 1;
            shelvesArr = updateQuantity(shelvesArr, jtem, item.shelves);
          } 
        }); 
        if (check === 0 && item.shelves != 0) 
          pushListItem(shelvesArr, 'Полка', item.material, item.width - minus, item.depth, item.shelves, item.edge);
        setShelves([...shelvesArr]);

        check = 0;
        backWallArr.forEach(jtem => {
          if (item?.modeles?.down?.id !== 8 && jtem.x === item.width - 1.5 && jtem.y === item.height - 1.5 && jtem.material === item.backWall && jtem.edge === item.edge) {
            check = 1;
            updateQuantity(backWallArr, jtem, 1);
          } else if (item?.modeles?.down?.id === 8 && jtem.x === item.height - item.width - 16 - 28 && jtem.y === item.width - 90 && jtem.material === item.backWall && jtem.edge === item.edge) {
            check = 1;
            updateQuantity(backWallArr, jtem, 1);
          }
        }); 
        if (check === 0 && item?.modeles?.down?.id !== 8 && item?.modeles?.down?.id !== 7)
          pushListItem(backWallArr, 'Задняя стенка', item.backWall, item.width-1.5, item.height-1.5, 1, item.edge);
        else if (check === 0 && item?.modeles?.down?.id !== 8)
          pushListItem(backWallArr, 'Задняя стенка', item.backWall, item.height-item.width-16-28, item.width-90, 1, item.edge);
        setBackWall([...backWallArr]);

        check = 0;
        frontWallArr.forEach(jtem => {
          if (item?.modeles?.down?.id !== 7 && jtem.x === item.width - 1.5 && jtem.y === item.height - 1.5 && jtem.material === item.front && jtem.edge === item.edge) {
            check = 1;
            updateQuantity(frontWallArr, jtem, item.width<600?1:2);
          } 
        }); 
        if (check === 0 && item?.modeles?.down?.id !== 7 && item.width < 600)
          pushListItem(frontWallArr, 'Фасад', item.front, item.width - 1.5, item.height - 1.5, 1, item.edge);
        else if (check === 0 && item?.modeles?.down?.id !== 7)
          pushListItem(frontWallArr, 'Фасад', item.front, item.width - 1.5, item.height / 2 - 1.5, 2, item.edge);
        setFrontWall([...frontWallArr]);

        check = 0;
        bottomArr.forEach(jtem => {
          if (item?.modeles?.down?.id !== 7 && jtem.x === item.width && jtem.y === item.depth && jtem.material === item.material && jtem.edge === item.edge) {
            check = 1;
            updateQuantity(bottomArr, jtem, 1);
          } else if (jtem.x === item.width - item.edge && jtem.y === item.depth && jtem.material === item.material && jtem.edge === item.edge) {
            check = 1;
            updateQuantity(bottomArr, jtem, 1);
          }
        }); 
        if (check === 0)
          pushListItem(bottomArr, 'Дно', item.material, item.width - item.edge, item.depth, 1, item.edge);
        setBottom([...bottomArr]);

        check = 0;
        tiesArr.forEach(jtem => {
          if (item?.modeles?.down?.id !== 8 && jtem.x === item.width - 32 && jtem.y === item.ties && jtem.material === item.material && jtem.edge === item.edge) {
            check = 1;
            updateQuantity(tiesArr, jtem, 2);
          } 
        }); 
        if (check === 0 && item?.modeles?.down?.id !== 7)
          pushListItem(tiesArr, 'Стяжки', item.material, item.width - 32, item.ties, 2, item.edge);
        setTies([...tiesArr]);

        if (item?.modeles?.down?.id === 7) {
          check = 0;
          ptArr.forEach(jtem => {
            if (checkF(item, jtem)) {
              check = 1;
              ptArr = [...ptArr.map((el) => {
                if (el.id === jtem.id)
                  return {...jtem, 
                          quantity: jtem.quantity + 1,
                          }
                else {
                  return el
                }
              })]
            } 
          }); 
          if (check === 0) {
            ptArr.push({
              id: uuidv4(),
              name: 'Передняя стенка ящика',
              material: item.material,
              x: item.height-item.width-16-28,
              y: 600 - 90,
              quantity: 1,
              edge: item.edge
            });
          }
          setPt(pt => [...ptArr]);

          check = 0;
          btArr.forEach(jtem => {
            if (checkF(item, jtem) && item.depth === jtem.depth) {
              check = 1;
              btArr = [...btArr.map((el) => {
                if (el.id === jtem.id)
                  return {...jtem, 
                          quantity: jtem.quantity + 2,
                          }
                else {
                  return el
                }
              })]
            } 
          }); 
          if (check === 0) {
            btArr.push({
              id: uuidv4(),
              name: 'Бочины',
              material: item.material,
              x: item.height-item.width-16-28,
              y: item.depth,
              quantity: 2,
              edge: item.edge
            });
          }
          setBt(bt => [...btArr]);

          check = 0;
          dtArr.forEach(jtem => {
            if (item.width-58-35 === jtem.x && item.depth - 3 === jtem.depth) {
              check = 1;
              btArr = [...dtArr.map((el) => {
                if (el.id === jtem.id)
                  return {...jtem, 
                          quantity: jtem.quantity + 1,
                          }
                else {
                  return el
                }
              })]
            } 
          }); 
          if (check === 0) {
            dtArr.push({
              id: uuidv4(),
              name: 'Дно ящика',
              material: item.material,
              x: item.width-58-35,
              y: item.depth - 3,
              quantity: 1,
              edge: item.edge
            });
          }
          setDt(dt => [...dtArr]);

        }
      }
    });
  } 

  const renderList = (prevK, arr) => {
    if (arr.length === 0)
      return;
    prevK[0]++;
    let k = prevK[0];
    return arr.map((item, i) => {
      return (
        <ul className="configuration-calc-table-detail__row">
          <li className="configuration-calc-table-detail__item num">{i===0?k:''}</li>
          <li className="configuration-calc-table-detail__item view">{i===0?item.name:''}</li>
          <li className="configuration-calc-table-detail__item material">
            <img src={materialImg[item.material]} alt="Не выбран" />
            <span>{item.material}</span>
          </li>
          <li className="configuration-calc-table-detail__item x">{item.x}</li>
          <li className="configuration-calc-table-detail__item y">{item.y}</li>
          <li className="configuration-calc-table-detail__item quantity">{item.quantity}</li>
          <li className="configuration-calc-table-detail__item edge">
            <img src={rectangle} alt="Кромка" />
            <span>{item.edge?item.edge:'Не выбрана'}</span>
          </li>
        </ul>
      ) 
    });
  }

  const detailsRender = () => {
    let k = [0];
    const sidewallArr = renderList(k, sidewall);
    const shelvesArr = renderList(k, shelves);
    const backWallArr = renderList(k, backWall);
    const frontWallArr = renderList(k, frontWall);
    const bottomArr = renderList(k, bottom);
    const tiesArr = renderList(k, ties);
    const ptArr = renderList(k, pt);
    const btArr = renderList(k, bt);
    const dtArr = renderList(k, dt);
    return (
      <>
        {sidewallArr}
        {shelvesArr}
        {backWallArr}
        {frontWallArr}
        {bottomArr}
        {tiesArr}
        {ptArr}
        {btArr}
        {dtArr}
      </>
    )
  }

  const detailsView = detailsRender();

  return (
    <>
      <main>
        <section className="configuration-calc">
          <div className="configuration-calc-page">
            <div className="configuration-calc-page__btn active">
              <img src={detailsSvg} alt="Деталировка" />
              <div className="configuration-calc-page__text">Деталировка</div>
            </div>
            <span className="configuration-calc-page__line"></span>
            <div className="configuration-calc-page__btn">
              <img src={cuttingSvg} alt="Раскрой" />
              <div className="configuration-calc-page__text">Карта раскроя</div>
            </div>
          </div>
          <div className="configuration-calc-nav">
            <div className="configuration-calc-nav__content _container">
              <div className="configuration-calc-nav__left">
                <div className="configuration-calc-nav__text">Название проекта</div>
                <div className="configuration-calc-nav__name">Прямая кухня</div>
              </div>
              <div className="configuration-calc-nav__right">
                <div className="configuration-calc-nav__btn btn">Произвести раскрой</div>
              </div>
            </div>
          </div>
          <div className="configuration-calc-table-detail">
            <div className="configuration-calc-table-detail__content _container">
              <div className="configuration-calc-table-detail__name">Таблица деталей</div>
              <div className="configuration-calc-table-detail__block">
                <ul className="configuration-calc-table-detail__row">
                  <li className="configuration-calc-table-detail__item num">№</li>
                  <li className="configuration-calc-table-detail__item view">Вид детали</li>
                  <li className="configuration-calc-table-detail__item material">Материал</li>
                  <li className="configuration-calc-table-detail__item x">X</li>
                  <li className="configuration-calc-table-detail__item y">Y</li>
                  <li className="configuration-calc-table-detail__item quantity">Количество</li>
                  <li className="configuration-calc-table-detail__item edge">Кромка</li>
                </ul>
                {detailsView}
              </div>
            </div>
          </div>
          <div className="configuration-calc-table-detail">
            <div className="configuration-calc-table-detail__content _container">
              <div className="configuration-calc-table-detail__name">Таблица листов</div>
              <div className="configuration-calc-table-detail__block">
                <ul className="configuration-calc-table-detail__row">
                  <li className="configuration-calc-table-detail__item num">№</li>
                  <li className="configuration-calc-table-detail__item material">Материал</li>
                  <li className="configuration-calc-table-detail__item x">X</li>
                  <li className="configuration-calc-table-detail__item y">Y</li>
                  <li className="configuration-calc-table-detail__item quantity">Количество</li>
                  <li className="configuration-calc-table-detail__item edge">Обрез листа</li>
                </ul>
                {/* <ul className="configuration-calc-table-detail__row">
                  <li className="configuration-calc-table-detail__item num">1</li>
                  <li className="configuration-calc-table-detail__item material">
                    <img src={materialPng} alt="Материал" />
                    <span>Eichesil</span>
                  </li>
                  <li className="configuration-calc-table-detail__item x">2000</li>
                  <li className="configuration-calc-table-detail__item y">1700</li>
                  <li className="configuration-calc-table-detail__item quantity">12</li>
                  <li className="configuration-calc-table-detail__item edge">
                    <img src={rectangle} alt="Обрез листа" />
                    <span>0.4</span>
                  </li>
                </ul> */}
              </div>
            </div>
          </div>
          <div className="configuration-calc-btn">
            <div className="configuration-calc-btn__content _container">
              <div className="configuration-calc-btn__btn btn">Произвести раскрой</div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ConfigurationCalc;