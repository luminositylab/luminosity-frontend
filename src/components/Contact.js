import React from 'react';
import { HomeRounded, PhoneRounded, MailRounded } from '@material-ui/icons';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import ked from '../assets/images/ked.png';
import innov from '../assets/images/innov.png';

const Contact = props => (
<section id="block-rtdfooter" class="block block-rtd-footer clearfix">
    <div id="mega-footer">
        <div class="container">
            <div class="grid-wrapper">
                <div class="col-4" style={{marginLeft: 20}}>
                 
                        <img alt="Office of Knowledge Enterprise Development" src={ked} height="100"/>
                
                    <div id="address-footer" style={{marginLeft: 20}}>
                        <p>
                            The Luminosity Lab<br />
                            300 E University Drive<br />
                            Suite 110<br />
                            Tempe, AZ 85287-7205
                        </p>
                        <p>Phone: (480) 965-1225 | Fax: (480) 965-8293</p>
                    </div>
                    <ul class="social-media"></ul>
                </div>
                <div class="numOne col-8" style={{marginLeft: 330, marginTop: 100}}>
                <img src={innov} height="100"/>
                    <div class="footer-wrap">
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
);

export default Contact;
