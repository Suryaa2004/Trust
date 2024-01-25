import React, { Component } from 'react'
export default class VolForm extends Component {
    render() {
        return (
            <>

                <div class="container">
                    <div class="row">

                        <div class="col-12">
                            <h2 class="contact-title">Become A Volunteer</h2>
                        </div>
                        <div class="col-lg-8">
                            <div class="contact-form-area">
                                <form class="form-contact contact_form" action="" method="post" id="volunteerForm" novalidate="novalidate">
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <input class="form-control valid" name="volunteer_name" id="volunteer_name" type="text" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your name'" placeholder="Enter your name"/>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <input class="form-control valid" name="dob" id="dob" type="date" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Date of Birth'" placeholder="Enter Date of Birth"/>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <input class="form-control valid" name="hus_name" id="hus_name" type="text" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Fathers/Husband name'" placeholder="Father's/Husband name"/>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <input class="form-control valid" name="address" id="address" type="text" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Address'" placeholder="Address"/>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <input class="form-control valid" name="aadhar" id="aadhar" type="text" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your Aadhar no'" placeholder="Aadhar No"/>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <input class="form-control valid" name="edu_qualification" id="edu_qualification" type="text" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Educational Qualification'" placeholder="Educational Qualification"/>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <input class="form-control valid" name="contact_num" id="contact_num" type="text" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your Contact no'" placeholder="Contact No"/>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <input class="form-control valid" name="job" id="job" type="text" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your Nature of Job'" placeholder="Nature of Job"/>
                                            </div>
                                        </div>
                                    </div>
                                    <input type="hidden" id="woocommerce-volunteer-nonce" name="woocommerce-volunteer-nonce" value="a9e46a8411"/><input type="hidden" name="_wp_http_referer" value="/voluntary/"/><div class="form-group mt-3">
                                        <button type="submit" class="button button-contactForm boxed-btn">Send</button>
                                    </div>
                                    </form>
                                    </div>
                            </div>
                        </div>
                    </div>
            </>
        );
    }
}
