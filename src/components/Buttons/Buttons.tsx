import style from './Buttons.module.scss'


interface Props {
   text: string
   onClick: () => void
}

export function BtnLine(props: Props) {

   const { text, onClick } = props

   return (
      <div onClick={onClick} className={style.btnLine}>
         <p>{text}</p>
         <img src='./assets/images/arrowUp.svg' />
      </div>
   )
}


export function BtnGlow(props: Props) {

   const { text, onClick } = props

   return (
      <div onClick={onClick} className={style.btnGlow}>
         <p>{text}</p>
       
      </div>
   )
}