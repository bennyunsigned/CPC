import React from 'react'
import { NavLink } from 'react-router-dom'

export default function TermsAndConditions(props) {
    return (
        <div>
            {
                props.headshow === 'true' ?
                    <div className="container-fluid page-header py-5 mb-5">
                        <div className="container py-5">
                            <h1 className="display-3 text-white mb-3 animated slideInDown">Terms and Conditions</h1>
                            <nav aria-label="breadcrumb animated slideInDown">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><NavLink className="text-white" to="/">Home</NavLink></li>
                                    <li className="breadcrumb-item text-white active" aria-current="page">Terms and Conditions</li>
                                </ol>
                            </nav>
                        </div>
                    </div> : null
            }

            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-12 wow fadeIn" data-wow-delay="0.1s">
                            <h1 className="text-primary mb-4">Terms and Conditions</h1>
                            <p className="mb-4">
                                Welcome to Cellera Eco Solution. By accessing our website or engaging with our solar energy services, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.
                            </p>

                            <h5 className="mb-3">1. Services Provided</h5>
                            <p>Cellera Eco Solution specializes in providing solar energy consultation, installation, and maintenance services. The scope of each project is determined by the individualized quotation or agreement provided prior to commencement.</p>

                            <h5 className="mb-3">2. Quotations and Pricing</h5>
                            <p>All pricing provided in quotations is subject to a site inspection and may vary based on structural, electrical, or regulatory findings. Quotations are valid for 30 days from the date of issue unless stated otherwise.</p>

                            <h5 className="mb-3">3. Payment Terms</h5>
                            <p>Payment schedules will be outlined in the formal agreement. Typically, an initial deposit is required before ordering materials or scheduling installation, with the remaining balance due upon completion and commissioning of the solar system.</p>

                            <h5 className="mb-3">4. Installation and Access</h5>
                            <p>You agree to provide our installation teams and authorized contractors with safe and reasonable access to your property for the purpose of site assessment, installation, and maintenance of the solar equipment.</p>

                            <h5 className="mb-3">5. Permits and Approvals</h5>
                            <p>While we assist in processing applications for net metering, grid connection, and government subsidies, the final approval is subject to the relevant utility companies and government authorities. We are not liable for delays caused by third-party processing.</p>

                            <h5 className="mb-3">6. Warranties and Maintenance</h5>
                            <p>Solar panels, inverters, and batteries come with manufacturer warranties, which will be handed over to you upon project completion. Cellera Eco Solution also provides a standard workmanship warranty as specified in your contract. Routine maintenance is the responsibility of the system owner unless a maintenance contract is signed with us.</p>

                            <h5 className="mb-3">7. Limitation of Liability</h5>
                            <p>Cellera Eco Solution shall not be liable for any indirect, incidental, or consequential damages arising from the use or inability to use our installed systems, nor for any damage to property that occurs due to pre-existing structural issues not identifiable during the initial site assessment.</p>

                            <h5 className="mb-3">8. Changes to Terms</h5>
                            <p>We reserve the right to update or modify these Terms and Conditions at any time. Any changes will be posted on this page, and your continued use of our services constitutes acceptance of the modified terms.</p>

                            <h5 className="mb-3">9. Contact Information</h5>
                            <p>If you have any questions or require further clarification regarding these Terms and Conditions, please reach out to us at:</p>
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
