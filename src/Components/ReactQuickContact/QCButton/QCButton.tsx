import React, { ReactNode } from 'react'
import "./QCButton.css"

interface OCBProps {
  name: string,
  icon: ReactNode,
  bgColor: string,
  color: string,
  href: string

}
const QCButton = (props: OCBProps) => {
  const [isHover, setIsHover] = React.useState(false);
  const btn_wrapper = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    backgroundColor: isHover ? props.color: props.bgColor,
    color: isHover ? '#ffffff' : props.color,
    fontWeight: 'bold',
    padding: '10px 0',
    borderRadius: '20px',
    transiton: 'all .2s ease-in-out'
  }
  const handleHover = () => setIsHover(!isHover);
  return (<a href={props.href} style={btn_wrapper} onMouseEnter={handleHover} onMouseLeave={handleHover}>
   {props.icon &&   <span className="c2c_btn_icon">{props.icon}</span>}
      <span> {props.name}</span>
    </a>
  )
}

export default QCButton