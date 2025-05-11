import React from 'react'
import "../assets/css/notFound.css"
import { Link} from 'react-router'
import NotFoundImage from "../assets/download.png"
export default function NotFound() {
  return (
    <div className='container mt-5 notFCon'>
      <div className="head text-center">
        <Link className='btn btn-dark' to={"/"}>Back to home</Link>
      </div>
      <div className="image mt-5">
        <img src={NotFoundImage} alt="" />
      </div>
    </div>
  )
}
