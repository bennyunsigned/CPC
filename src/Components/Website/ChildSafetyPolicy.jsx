import React from 'react'
import { NavLink } from 'react-router-dom'

export default function ChildSafetyPolicy(props) {
    return (
        <div>
            {
                props.headshow === 'true' ?
                    <div className="container-fluid page-header py-5 mb-5">
                        <div className="container py-5">
                            <h1 className="display-3 text-white mb-3 animated slideInDown">Child Safety Policy</h1>
                            <nav aria-label="breadcrumb animated slideInDown">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><NavLink className="text-white" to="/">Home</NavLink></li>
                                    <li className="breadcrumb-item text-white active" aria-current="page">Child Safety Policy</li>
                                </ol>
                            </nav>
                        </div>
                    </div> : null
            }

            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-12 wow fadeIn" data-wow-delay="0.1s">
                            <h1 className="text-primary mb-4">Child Safety & Data Protection Policy</h1>
                            <p className="mb-4">
                                Cellera Power Care is dedicated to ensuring a safe environment for everyone, especially children. This policy outlines our commitment to child safety and how we handle data related to minors.
                            </p>

                            <h5 className="mb-3">Our Commitment</h5>
                            <p>We believe that all children have the right to be safe and protected from harm. We are committed to fostering a culture of safety and inclusion in all our operations.</p>

                            <h5 className="mb-3">Data Protection for Minors</h5>
                            <p>We do not knowingly collect personal information from children under the age of 18 without parental consent. If we become aware that we have inadvertently collected such information, we will take steps to delete it immediately.</p>

                            <h5 className="mb-3">Safe Practices</h5>
                            <p>Our staff and partners are expected to adhere to the highest standards of conduct when interacting with the public, ensuring that child safety is prioritized at all times.</p>

                            <h5 className="mb-3">Reporting and Response</h5>
                            <p>We have clear procedures in place for reporting any concerns related to child safety. All reports will be handled with the utmost seriousness and confidentiality.</p>

                            <h5 className="mb-3">Contact Information</h5>
                            <p>For any questions regarding our Child Safety Policy or data protection practices, please reach out to us at mycpc@gmail.com.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
