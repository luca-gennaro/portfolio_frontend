import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <a href='https://www.linkedin.com/in/luca-gennaro' target='_blank' rel='noreferrer'>
        <div>
          <BsLinkedin />
        </div>
      </a>
      <a href='https://github.com/luca-gennaro' target='_blank' rel='noreferrer'>
        <div>
          <BsGithub />
        </div>
      </a>
    </div>
  )
}

export default SocialMedia