import React from 'react'
import {
  BsCircleFill,
  BsFillShareFill,
  BsFillHeartFill,
  BsDropletFill,
} from 'react-icons/bs'
import { MdOutlineFilterList } from 'react-icons/md'
import { FaUserCircle } from 'react-icons/fa'
import { FiSettings } from 'react-icons/fi'
import { RiStethoscopeLine } from 'react-icons/ri'
import { GrHost } from 'react-icons/gr'

import { Task, BloodPressure, HeartBeat, Profile } from '../componets'

export const Patients = () => {
  const tasks = [
    {
      status: <BsCircleFill />,
      userImage: <FaUserCircle />,
      assigneddate: 'Nov 23, 19',
      username: 'Erica Rodrigues',
      cycleStart: '31st',
      vitalStatus: {
        iconOne: <RiStethoscopeLine />,
        iconTwo: <BsDropletFill />,
        iconThree: <GrHost />,
        iconFour: <BsFillHeartFill />,
        iconFive: <FiSettings />,
      },
    },
    {
      status: <BsCircleFill />,
      userImage: <FaUserCircle />,
      assigneddate: 'Nov 23, 19',
      username: 'Erica Rodrigues',
      cycleStart: '31st',
      vitalStatus: {
        iconOne: <RiStethoscopeLine />,
        iconTwo: <BsDropletFill />,
        iconThree: <GrHost />,
        iconFour: <BsFillHeartFill />,
        iconFive: <FiSettings />,
      },
    },
    {
      status: <BsCircleFill />,
      userImage: <FaUserCircle />,
      assigneddate: 'Nov 23, 19',
      username: 'Erica Rodrigues',
      cycleStart: '31st',
      vitalStatus: {
        iconOne: <RiStethoscopeLine />,
        iconTwo: <BsDropletFill />,
        iconThree: <GrHost />,
        iconFour: <BsFillHeartFill />,
        iconFive: <FiSettings />,
      },
    },
  ]

  return (
    <div className='patient'>
      <div className='left__section'>
        <div className='heading__container'>
          <h4 className='heading'>Patients</h4>

          <div className='heading__filters'>
            <div className='filters_container'>
              <div className='head__pill'>
                <span>
                  <BsCircleFill />
                </span>{' '}
                In Range
              </div>
              <div className='head__pill'>
                <span>
                  <BsCircleFill />
                </span>{' '}
                Out of Range
              </div>
              <div className='head__pill'>
                Filter{' '}
                <span>
                  <MdOutlineFilterList />
                </span>
              </div>
              <div className='head__pill'>
                Export{' '}
                <span>
                  <BsFillShareFill />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className='tasks_list'>
          {tasks.map((task, index) => {
            return <Task key={index} task={task} />
          })}

          <h4>Yesterday</h4>

          {tasks.map((task, index) => {
            return <Task key={index} task={task} />
          })}
        </div>
      </div>

      <div className='right__section'>
        <div className='user__profile'>
          <Profile />
        </div>
        <div className='blood_pressure_chart'>
          <BloodPressure />
        </div>
        <div className='heart__beat_chart'>
          <HeartBeat />
        </div>
      </div>
    </div>
  )
}
