import React from 'react';
import Header from './Header';
import "./../css/contac.css";

const Contact = () => {
  return (
    <div>
      <Header />
      <div className = 'axil-contact-page-area axil-section-gap' >
        <div className='container'>
            <div className='axil-contact-page'>
                <div className='row row--30'>
                    <div className='col-lg-8'>
                        <div className='contact-form'>
                            <h3 className='title mb--10'>
                                We would love to hear from you.
                            </h3>
                            <p>
                                If you’ ve got great products your making or looking to work with us then drop us a line.
                            </p>
                            <form className = 'axil-contact-form' >
                                <div className='row row--10'>
                                    <div className='col-lg-4'>
                                        <div className='form-group'>
                                            <label>Name <span>*</span></label>
                                            <input type="text" />
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='form-group'>
                                            <label>Name <span>*</span></label>
                                            <input type="text" />
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='form-group'>
                                            <label>Name <span>*</span></label>
                                            <input type="text" />
                                        </div>
                                    </div>
                                    
                                    <div className='col-lg-12'>
                                        <div className='form-group'>
                                            <label>Your Message</label>
                                            <textarea name="contact-message" id="contact-message" cols="1" rows="2"></textarea>
                                        </div>
                                    </div>
                                    <div className='col-lg-12'></div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className="contact-location mb--40">
                            <h4 className="title mb--20">Our Store</h4>
                            <span className="address mb--20">8212 E. Glen Creek Street Orchard Park, NY 14127, United States of America</span>
                            <span className="phone">Phone: +123 456 7890</span>
                            <span className="email">Email: Hello@etrade.com</span>
                        </div>
                        <div className="contact-career mb--40">
                            <h4 className="title mb--20">Careers</h4>
                            <p>Instead of buying six things, one that you really like.</p>
                        </div>
                        <div className="opening-hour">
                            <h4 className="title mb--20">Opening Hours:</h4>
                            <p>Monday to Saturday: 9am - 10pm
                                <br /> Sundays: 10am - 6pm 
                            </p>
                        </div>
                    </div>
                </div>
                <div className="axil-google-map-wrap axil-section-gap pb--0">
                    <div className="mapouter">
                        <div className="gmap_canvas">
                            <iframe width="1080" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=melbourne&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
