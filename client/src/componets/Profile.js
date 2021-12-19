import React from 'react'
import {
  AiFillClockCircle,
  AiFillExclamationCircle,
  AiOutlineSetting,
  AiTwotoneHeart,
} from 'react-icons/ai'
import { FaUserNurse, FaWeightHanging } from 'react-icons/fa'
import {
  BsFillChatTextFill,
  BsCameraVideoFill,
  BsDropletFill,
} from 'react-icons/bs'
import { RiUserHeartLine } from 'react-icons/ri'
import { MdArrowDropUp, MdArrowDropDown } from 'react-icons/md'

export const Profile = () => {
  return (
    <div className='profile'>
      <div className='profile__row'>
        <div className='user__image'>
          <p className='user__icon'>
            <FaUserNurse />
          </p>
          <div className='user__icons'>
            <p className='time__spent'>
              <span>
                <AiFillClockCircle />
              </span>{' '}
              02.32 hours spent{' '}
              <a className='see_logs' href='/'>
                See Time Logs
              </a>
            </p>
            <p className='username_title'>
              Erica Rodrigues{' '}
              <span>
                <AiFillExclamationCircle />
              </span>
            </p>
            <p className='years'>23 Years | Female</p>
          </div>
        </div>

        <div className='right__section_icons'>
          <div className='icons'>
            <span className='chat_icon'>
              <BsFillChatTextFill className='align_icon' />
            </span>
            <span className='comera_icon'>
              <BsCameraVideoFill className='align_icon' />
            </span>
            <span className='vital_logs'>Vital Logs</span>
            <span className='assign_text'>
              Assign <AiOutlineSetting className='align_icon' />
            </span>
          </div>
          <p className='assigned_date user_date'>Assigned on Nov 23, 19</p>
        </div>
      </div>

      <div className='user__data_stat'>
        <div className='blood__pressure'>
          <p className='blood_pressure_text'>
            <span>
              <AiTwotoneHeart />
            </span>{' '}
            Blood Pressure
          </p>
          <p className='date_assigned'>Assigned 7 days ago</p>
          <p className='numeric_data blood_color'>
            120/80{' '}
            <span>
              <MdArrowDropUp className='user_data_icon' />
            </span>
          </p>
          <p className='time_past'>3 hours ago</p>
          <p className='current__time'>May 23 09.00 AM</p>
        </div>
        <div className='heart__beat'>
          <p className='blood_pressure_text'>
            <span>
              <RiUserHeartLine />
            </span>{' '}
            Heart Beat
          </p>
          <p className='date_assigned'>Assigned 7 days ago</p>
          <p className='numeric_data green_color'>
            76{' '}
            <span>
              <MdArrowDropDown className='user_data_icon' />
            </span>
          </p>
          <p className='time_past'>3 hours ago</p>
        </div>
        <div className='weight'>
          <p className='blood_pressure_text'>
            <span>
              <FaWeightHanging />
            </span>{' '}
            Weight
          </p>
          <p className='time_past'>Assigned 12 days ago</p>
          <p className='waiting'>Waiting...</p>
        </div>
        <div className='blood__glucose'>
          <p className='blood_pressure_text'>
            <span>
              <BsDropletFill />
            </span>{' '}
            Blood Glucose
          </p>
          <p className='time_past'>Assigned 2 days ago</p>
          <p className='waiting'>Waiting...</p>
        </div>
      </div>
    </div>
  )
}
