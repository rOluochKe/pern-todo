import React from 'react'

export const Task = ({ task }) => {
  return (
    <div className='task'>
      <div className='task__left'>
        <p className='user_image'>
          <span className='status_icon'>{task.status}</span>{' '}
          <span className='online_user_icon'>{task.userImage}</span>
        </p>
        <div className='user__stats'>
          <p className='assigned_date'>Assigned on {task.assigneddate}</p>
          <h4 className='user__name'>{task.username}</h4>
          <p className='start__date'>Cycle starts {task.cycleStart}</p>
        </div>
      </div>

      <div className='task__right'>
        <div className='task__container'>
          <p className='vital__status'>Vital Status</p>
          <div className='task__icons'>
            <span className='task__icon_one'>{task.vitalStatus.iconOne}</span>
            <span className='task__icon_two'>{task.vitalStatus.iconTwo}</span>
            <span className='task__icon_three'>
              {task.vitalStatus.iconThree}
            </span>
            <span className='task__icon_four'>{task.vitalStatus.iconFour}</span>
            <span className='task__icon_five'>{task.vitalStatus.iconFive}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
