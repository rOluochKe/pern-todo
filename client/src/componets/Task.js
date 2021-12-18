import React from 'react'

export const Task = ({ task }) => {
  return (
    <div className='task'>
      <div className='task__left'>
        <p className='user_image'>
          <span>{task.status}</span> {task.userImage}
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
            <span>{task.vitalStatus.iconOne}</span>
            <span>{task.vitalStatus.iconTwo}</span>
            <span>{task.vitalStatus.iconThree}</span>
            <span>{task.vitalStatus.iconFour}</span>
            <span>{task.vitalStatus.iconFive}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
