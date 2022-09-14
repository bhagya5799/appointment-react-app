// Write your code here
import React, {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import './index.css'

import {format} from 'date-fns'

import AppointmentItem from '../AppointmentItem/index'

class Appointments extends Component {
  state = {
    Title: '',
    date: '',
    stringDate: '',
    appointmentList: [],
    starred: false,
  }

  onClickAddButton = event => {
    event.preventDefault()
    const {Title, date, appointmentList} = this.state
    const newAppointment = {
      id: uuidv4(),
      Title,
      date,
      isLiked: false,
    }
    this.setState({
      appointmentList: [...appointmentList, newAppointment],
      Title: '',
      date: '',
      stringDate: '',
    })
    console.log(appointmentList)
  }

  ClickStarButton = id => {
    const {appointmentList} = this.state
    this.setState(prevState => ({
      appointmentList: prevState.appointmentList.map(each => {
        if (id === each.id) {
          return {...each, isLiked: !each.isLiked}
        }
        return each
      }),
    }))
  }

  startButton = () => {
    const {starred} = this.state
    this.setState({starred: !starred})
  }

  render() {
    const {Title, date, appointmentList, id, stringDate, starred} = this.state
    console.log(Title, date)
    return (
      <div className="app-container">
        <div className="appointment-container">
          <h1>Add Appointment</h1>
          <div>
            <form onSubmit={this.onClickAddButton}>
              <label htmlFor="id">Title</label> <br />
              <input
                onChange={event => this.setState({Title: event.target.value})}
                type="text"
                id="id"
                placeholder="Title"
                value={Title}
              />
              <br />
              <label htmlFor="date" className="date-label">
                Date
              </label>
              <br />
              <input
                onChange={event => {
                  const dateString = format(
                    new Date(event.target.value),
                    'dd MMMM yyyy, EEEE',
                  )
                  this.setState({date: dateString})
                  this.setState({stringDate: event.target.value})
                }}
                type="date"
                id="date"
                placeholder="Title"
                className="date-e"
                value={stringDate}
              />
              <br />
              <button testid="star"> Add </button>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
            alt="appointments"
          />
          <hr />
          <div className="appointmentItem">
            <div className="appointmentItem-container">
              <h3>Appointments</h3>
              <button className="started" onClick={this.startButton}>
                Starred
              </button>
            </div>
            <ul>
              {appointmentList.map(eachItem => {
                if (starred) {
                  if (eachItem.isLiked === true) {
                    return (
                      <AppointmentItem
                        details={eachItem}
                        key={eachItem.id}
                        ClickStarButton={this.ClickStarButton}
                      />
                    )
                  }
                } else {
                  return (
                    <AppointmentItem
                      details={eachItem}
                      key={eachItem.id}
                      ClickStarButton={this.ClickStarButton}
                    />
                  )
                }
                return null
              })}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments
