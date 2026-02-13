import React from 'react'
import { NavLink } from 'react-router-dom'

export default function PrivacyPolicy(props) {
    return (
        <div>
            {
                props.headshow === 'true' ?
                    <div className="container-fluid page-header py-5 mb-5">
                        <div className="container py-5">
                            <h1 className="display-3 text-white mb-3 animated slideInDown">Privacy Policy</h1>
                            <nav aria-label="breadcrumb animated slideInDown">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><NavLink className="text-white" to="/">Home</NavLink></li>
                                    <li className="breadcrumb-item text-white active" aria-current="page">Privacy Policy</li>
                                </ol>
                            </nav>
                        </div>
                    </div> : null
            }

            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-12 wow fadeIn" data-wow-delay="0.1s">
                            <h1 className="text-primary mb-4">Privacy Policy</h1>
                            <p className="mb-4">
                                At Cellera Power Care, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard the data you provide to us through our website and services.
                            </p>

                            <h5 className="mb-3">Information Collection</h5>
                            <p>We may collect personal information such as your name, email address, phone number, and address when you interact with our website, subscribe to our newsletter, or request a quote.</p>

                            <h5 className="mb-3">Use of Information</h5>
                            <p>The information we collect is used to provide and improve our services, communicate with you, process your requests, and send you relevant updates and marketing materials with your consent.</p>

                            <h5 className="mb-3">Data Security</h5>
                            <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.</p>

                            <h5 className="mb-3">Third-Party Disclosure</h5>
                            <p>We do not sell, trade, or otherwise transfer your personal information to outside parties without your consent, except as required by law or to provide our services.</p>

                            <h5 className="mb-3">Your Rights</h5>
                            <p>You have the right to access, correct, or delete your personal information held by us. If you have any questions or concerns regarding your privacy, please contact us at mycpc@gmail.com.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
