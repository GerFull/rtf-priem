import React from 'react'
import { Link } from 'react-router-dom';
import { BtnLine } from '../Buttons/Buttons';
import style from "./menu.module.scss";

interface Props { }

function Menu(props: Props) {
   const { } = props

   const submit=()=>{
      console.log('submit')
   }

   return (
      <div className={style.menu}>
         <Link to='/'>  <img src='./assets/images/Logo.svg' /></Link>
         <div className={style.menu__links}>
            <p className={style.menu__links_item}><Link to={'/baccalaureate'}>Бакалавриат</Link></p>
            <p className={style.menu__links_item}><Link to={'/baccalaureate'}>Магистратура</Link></p>
            <p className={style.menu__links_item}><Link to={'/baccalaureate'}>аспирантура</Link></p>
            <p className={style.menu__links_item}><Link to={'/baccalaureate'}>контакты</Link></p>
            <BtnLine onClick={submit} text='подать документы'/>
         </div>
      </div>
   )
}

export default Menu
