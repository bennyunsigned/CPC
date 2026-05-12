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
                                Cellera Eco Solution (“we,” “our,” or “us”) is a recognized solar power installation company committed to protecting the privacy and personal information of our customers, partners, and website visitors. This Privacy Policy explains how we collect, use, disclose, and safeguard information when you interact with our services, website, or communications.
                            </p>

                            <h5 className="mb-3">1. Information We Collect</h5>
                            <p>We may collect personal and non-personal information, including but not limited to:</p>
                            <ul>
                                <li>Full name, contact number, email address, and postal address</li>
                                <li>Property details required for solar assessment and installation</li>
                                <li>Identification or documentation provided for government subsidies or approvals</li>
                                <li>Billing and payment-related information</li>
                                <li>Website usage data such as IP address, browser type, pages visited, and interaction logs</li>
                                <li>Precise location data from mobile devices to track field staff during solar installations and calculate fuel reimbursement</li>
                            </ul>

                            <h5 className="mb-3">2. How We Use Your Information</h5>
                            <p>The information we collect is used to:</p>
                            <ul>
                                <li>Provide solar consultation, installation, and maintenance services</li>
                                <li>Conduct site surveys, system design, and performance analysis</li>
                                <li>Track field staff locations for operational efficiency and accurate fuel reimbursement processing</li>
                                <li>Process payments, invoices, and service requests</li>
                                <li>Communicate updates, quotations, offers, and service notifications</li>
                                <li>Improve our services, website functionality, and customer experience</li>
                                <li>Comply with legal, regulatory, and contractual obligations</li>
                            </ul>

                            <h5 className="mb-3">3. Sharing and Disclosure of Information</h5>
                            <p>Cellera Eco Solution does not sell or rent personal information. We may share data only with:</p>
                            <ul>
                                <li>Authorized employees and technicians involved in service delivery</li>
                                <li>Government authorities or utility providers for permits, net metering, or subsidies</li>
                                <li>Trusted third-party vendors assisting in operations, under strict confidentiality</li>
                                <li>Legal or regulatory bodies when required by law</li>
                            </ul>

                            <h5 className="mb-3">4. Data Security</h5>
                            <p>We implement appropriate administrative, technical, and physical safeguards to protect personal information against unauthorized access, alteration, disclosure, or destruction. While we strive to use commercially acceptable means to protect data, no method of transmission over the internet is 100% secure.</p>

                            <h5 className="mb-3">5. Data Retention</h5>
                            <p>We retain personal information only for as long as necessary to fulfill the purposes outlined in this policy or as required by applicable laws and regulations.</p>

                            <h5 className="mb-3">6. Cookies and Tracking Technologies</h5>
                            <p>Our website may use cookies and similar technologies to enhance user experience, analyze traffic, and improve performance. Users may choose to disable cookies through browser settings.</p>

                            <h5 className="mb-3">7. Your Rights</h5>
                            <p>You have the right to:</p>
                            <ul>
                                <li>Access, update, or correct your personal information</li>
                                <li>Request deletion of your data, subject to legal obligations</li>
                                <li>Opt out of promotional communications</li>
                            </ul>

                            <h5 className="mb-3">8. Third-Party Links</h5>
                            <p>Our website may contain links to external websites. We are not responsible for the privacy practices or content of those third parties.</p>

                            <h5 className="mb-3">9. Policy Updates</h5>
                            <p>Cellera Eco Solution reserves the right to update this Privacy Policy at any time. Changes will be posted on our website with an updated effective date.</p>

                            <h5 className="mb-3">10. Contact Us</h5>
                            <p>For any questions or concerns regarding this Privacy Policy, please contact:</p>
                            <p>Cellera Eco Solution<br />
                                Email: info@mycpc.in<br />
                                Phone: 9090033366
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
