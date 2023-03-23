import React from 'react'
import { BtnGlow } from '../Buttons/Buttons'
import Menu from '../menu/menu'
import style from './mainInfo.module.scss'


interface Props { }

function MainInfo(props: Props) {
   const { } = props

   const check = () => {

   }


   return (
      <div className={style.maininfo}>
         <div className={style.maininfo__background}>
            <Menu />

            <div className={style.maininfo__banner}>

               <div className={style.maininfo__content}>
                  <p className={style.maininfo__title}>Поступи легко и учись интересно в ИРИТ-РТФ УрФУ!</p>
                  <p className={style.maininfo__subtitle}>Здесь ты найдёшь самую важную и актуальную информацию о программах подготовки и поступлении</p>
                  <BtnGlow onClick={check} text={'Найти программу обучения'} />
               </div>
               <img src='./assets/images/girl.svg' />
            </div>

         </div>


         <div className={style.maininfo__numbers}>
            <div className={style.maininfo__numbers_item}>
               <div className={style.maininfo__numbers_itemNum}>5 678</div>
               <div className={style.maininfo__numbers_itemText}>Количество бюджетных мест в 2023 году</div>
            </div>
            <div className={style.maininfo__numbers_item}>
               <div className={style.maininfo__numbers_itemNum}>100 000 р.</div>
               <div className={style.maininfo__numbers_itemText}>Средняя зарплата выпускников после обучения</div>
            </div>
            <div className={style.maininfo__numbers_item}>
               <div className={style.maininfo__numbers_itemNum}>+ <img src='./assets/images/infiniti.svg' /> </div>
               <div className={style.maininfo__numbers_itemText}>Количество бюджетных мест в 2023 году</div>
            </div>
         </div>
      </div>
   )
}

export default MainInfo
