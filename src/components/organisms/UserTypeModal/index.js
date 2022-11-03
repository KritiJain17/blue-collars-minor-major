import React from 'react'
import Modal from '../../molecules/Modal'

const UserTypeModal = ({setUserType = () => void 0}) => {

    const RECRUITER = "Recruiter"
    const SEEKER = "Seeker"
    const MODAL_HEADER = "Who are you?"

    const userTypes = [
        {
          header: RECRUITER,
          clickFunction: () => {
            setUserType(RECRUITER) 
            console.log(RECRUITER)},
        },
        {
          header: SEEKER,
          clickFunction: () => {
            setUserType(SEEKER)
          console.log(SEEKER)},
        },
      ];
      
      return (
      <Modal header = {MODAL_HEADER} children= {userTypes} />
      )
}

export default UserTypeModal
