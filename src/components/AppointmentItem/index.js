// Write your code here
import './index.css'

import React from 'react'

const AppointmentItem = props => {
  const {details, ClickStarButton} = props
  const {Title, date, id, isLiked} = details

  const isLike = !isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'

  const onClickStarButton = () => {
    ClickStarButton(id)
  }
  return (
    <li className="">
      <div className="title-star-container">
        <p className="name">{Title}</p>
        <button type="butttn">
          <img onClick={onClickStarButton} src={isLike} alt="star" />
        </button>
      </div>
      <p className="date">Date: {date}</p>
    </li>
  )
}

export default AppointmentItem
