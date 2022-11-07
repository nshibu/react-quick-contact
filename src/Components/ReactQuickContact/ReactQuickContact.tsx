import React from 'react'
import "./ReactQuickContact.css"
import { ReactQuickContactProps } from './types'



const ReactQuickContact = (props: ReactQuickContactProps) => {
  const [showPopover, setShowPopover] = React.useState(true);

  const handleContactButtonClick = () => {
    setShowPopover(!showPopover);
  }

  return (
    <div className={`c2c_wrapper ${props.alignment === 'right' ? 'c2c_right' : 'c2c_left'}`}  >
      {showPopover && <div className="c2c_popover">
        <img className="c2c_profile" src={props.profileImageUrl} alt="Profile" />
        {props.name &&  <div className="c2c_name">{ props.name}</div>}
        {props.designation &&  <div className="c2c_designation">{props.designation}</div>}
      {props.message &&  <div>{props.message}</div>}
          {
          props.buttons && props.buttons.map((e, i) => <div key={i} className="c2c_btn"> <>{e}</></div>)
          }
       
      </div>}
      <div className="c2c_container" onClick={handleContactButtonClick}>
        <>
          {props.buttonIcon}
          {props.buttonLabel}
        </>
      </div>
    </div>
  )
}

export default ReactQuickContact