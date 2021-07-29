import React from 'react'
import './PersonalDetails.css'
import profile from '../../../assets/images/man.jpg'
import { CameraAlt } from '@material-ui/icons'
import Bk from '../../../assets/images/bk.jpg'

function PersonalDetail() {
    return (
        <div className='personal__details'>
            <div className="personla__profile">
                <h1 className='personal'>Personal Details</h1>
                <div className="user__image">
                    <img className='prof__img' src={profile} alt="" />
                </div>
            </div>

            <div className="user__profile__wrapper">
                <div className="profile__left">
                    <div className="column">
                        <h1 className='left__title'>My profile</h1>
                    <div className="profile__top">
                    <div className="user__prof">
                        <img src={profile} alt="" />
                        <span><CameraAlt/></span>
                    </div>
                    <div className="profiles__texts">
                        <div className="user__name">
                            <h1>Names</h1>
                            <p>Kamali Aimable</p>
                        </div>
                        <div className="user__name">
                            <h1>Phone</h1>
                            <p>+250788 888 888</p>
                        </div>
                        <div className="user__name">
                            <h1>Id</h1>
                            <p>#2309084394</p>
                        </div>
                        <button className='edit__profileBtn'>Edit Profile</button>
                    </div>
                    </div>
                    </div>
                    <div className="bank__details">
                        <div className="bank__images">
                            <img src={Bk} alt="" />
                            <h3>My Bank Details</h3>
                        </div>
                        <div className="all__bankDetails">
                            <div className="bank__name">
                                <h2>Bank Name</h2>
                                <p>Bank Of Kigali</p>
                            </div>
                            <div className="bank__name">
                                <h2>Bank Name</h2>
                                <p>0004-3342-454-5342</p>
                            </div>
                            <div className="bank__name">
                                <h2>Salary due date</h2>
                                <p>Salary comes on 25th </p>
                            </div>
                            <div className="bank__name">
                                <h2>Monthly Deductation</h2>
                                <p>S25,000 deducted on my salary </p>
                            </div>
                        <button className='edit__bank__account'>Edit bank detail</button>
                        </div>
                    </div>
                </div>

                {/* This is the right part */}
                <div className="profile__right">
                    <h1>Other Details</h1>

                    <div className="user__title">
                        <h2>Job Title</h2>
                        <p>Markerting Manager</p>
                    </div>
                    <div className="user__title">
                        <h2>Job Title</h2>
                        <p>Markerting Manager</p>
                    </div>
                    <div className="user__title">
                        <h2>Job Title</h2>
                        <p>Markerting Manager</p>
                    </div>
                    <div className="user__title">
                        <h2>Job Title</h2>
                        <p>Markerting Manager</p>
                    </div>
                    <div className="user__title">
                        <h2>Job Title</h2>
                        <p>Markerting Manager</p>
                    </div>
                    <div className="user__title">
                        <h2>Job Title</h2>
                        <p>Markerting Manager</p>
                    </div>
                    <div className="user__title">
                        <h2>Job Title</h2>
                        <p>Markerting Manager</p>
                    </div>
                    <div className="user__title">
                        <h2>Job Title</h2>
                        <p>Markerting Manager</p>
                    </div>
                    <div className="user__title">
                        <h2>Job Title</h2>
                        <p>Markerting Manager</p>
                    </div>
                    <button className='otherdetail__btn'>Edit Details</button>
                </div>
            </div>

        </div>
    )
}

export default PersonalDetail
