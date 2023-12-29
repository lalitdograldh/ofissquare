import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
const Footer = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://ofis-zc1.maillist-manage.in/js/optin.min.js';
        script.onload = () => {
            // Execute setupSF after the script is loaded
            window.setupSF('sf3z97788d6668553563b1dad28f528d1ac729dfce8dee47cfeaf2b6aeac944d2817', 'ZCFORMVIEW', false, 'light', false, '0');
        };

        document.head.appendChild(script);
    }, []);
    return (
        <>
            <footer>
                <section className="ftop fbdr">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-6 text-center">
                                <div id="sf3z97788d6668553563b1dad28f528d1ac729dfce8dee47cfeaf2b6aeac944d2817" data-type="signupform" style="opacity: 1;">
                                    <div id="customForm">
                                        <div class="quick_form_9_css" style="background-color: rgb(255, 255, 255); width: 350px; z-index: 2; font-family: &quot;Arial&quot;; border-width: 1px; border-style: solid; border-color: rgb(235, 235, 235); overflow: hidden" name="SIGNUP_BODY">
                                            <div>
                                                <span style="font-size: 14px; font-family: &quot;Arial&quot;; font-weight: bold; color: rgb(136, 136, 136); text-align: left; padding: 10px 15px 5px; width: 100%; display: block" id="SIGNUP_HEADING">Join Our Newsletter</span>
                                                <div style="position:relative;">
                                                    <div id="Zc_SignupSuccess" style="display:none;position:absolute;margin-left:4%;width:90%;background-color: white; padding: 3px; border: 3px solid rgb(194, 225, 154);  margin-top: 10px;margin-bottom:10px;word-break:break-all">
                                                        <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                                            <tbody>
                                                                <tr>
                                                                    <td width="10%">
                                                                        <img class="successicon" src="https://ofis-zc1.maillist-manage.in/images/challangeiconenable.jpg" align="absmiddle" />
                                                                    </td>
                                                                    <td>
                                                                        <span id="signupSuccessMsg" style="color: rgb(73, 140, 132); font-family: sans-serif; font-size: 14px;word-break:break-word">&nbsp;&nbsp;Thank you for Signing Up</span>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                                <form method="POST" id="zcampaignOptinForm" style="margin: 0px; width: 100%; padding: 0px 15px" action="https://ofis-zc1.maillist-manage.in/weboptin.zc" target="_zcSignup">
                                                    <div style="background-color: rgb(255, 235, 232); padding: 10px; color: rgb(210, 0, 0); font-size: 11px; margin: 20px 10px 0px; border: 1px solid rgb(255, 217, 211); opacity: 1; display: none" id="errorMsgDiv">Please correct the marked field(s) below.</div>
                                                    <div style="position: relative; margin: 10px 0 15px; width: 230px; height: 30px; display: inline-block">
                                                        <div id="Zc_SignupSuccess" style="position: absolute; width: 87%; background-color: white; padding: 3px; border: 3px solid rgb(194, 225, 154); margin-bottom: 10px; word-break: break-all; opacity: 1; display: none">
                                                            <div style="width: 20px; padding: 5px; display: table-cell">
                                                                <img class="successicon" src="https://campaigns.zoho.com/images/challangeiconenable.jpg" style="width: 20px" />
                                                            </div>
                                                            <div style="display: table-cell">
                                                                <span id="signupSuccessMsg" style="color: rgb(73, 140, 132); font-family: sans-serif; font-size: 14px; line-height: 30px; display: block"></span>
                                                            </div>
                                                        </div>
                                                        <input type="text" style="font-size: 14px; border: 1px solid rgb(235, 235, 235); border-radius: 0; width: 100%; height: 100%; z-index: 4; outline: none; padding: 5px 10px; color: rgb(136, 136, 136); text-align: left; font-family: &quot;Arial&quot;; background-color: transparent; background-color: rgb(255, 255, 255); box-sizing: border-box" placeholder="Email" changeitem="SIGNUP_FORM_FIELD" name="CONTACT_EMAIL" id="EMBED_FORM_EMAIL_LABEL" />
                                                    </div>
                                                    <div style="position: relative; width: 90px; height: 30px; text-align: left; display: inline-block; margin: 0px 0px 10px">
                                                        <input type="button" style="text-align: center; width: 100%; height: 100%; z-index: 5; border: 0; color: rgb(255, 255, 255); cursor: pointer; outline: none; font-size: 14px; background-color: rgb(255, 121, 68); margin: 0; margin-left: -5px; border-radius: 0 3px 3px 0" name="SIGNUP_SUBMIT_BUTTON" id="zcWebOptin" value="Join Now" />
                                                    </div>
                                                    <input type="hidden" id="fieldBorder" value="" />
                                                    <input type="hidden" id="submitType" name="submitType" value="optinCustomView" />
                                                    <input type="hidden" id="emailReportId" name="emailReportId" value="" />
                                                    <input type="hidden" id="formType" name="formType" value="QuickForm" />
                                                    <input type="hidden" name="zx" id="cmpZuid" value="1df9653ea4" />
                                                    <input type="hidden" name="zcvers" value="2.0" />
                                                    <input type="hidden" name="oldListIds" id="allCheckedListIds" value="" />
                                                    <input type="hidden" id="mode" name="mode" value="OptinCreateView" />
                                                    <input type="hidden" id="zcld" name="zcld" value="11a3db2ca2f2ec3d" />
                                                    <input type="hidden" id="zctd" name="zctd" value="" />
                                                    <input type="hidden" id="document_domain" value="" />
                                                    <input type="hidden" id="zc_Url" value="ofis-zc1.maillist-manage.in" />
                                                    <input type="hidden" id="new_optin_response_in" value="0" />
                                                    <input type="hidden" id="duplicate_optin_response_in" value="0" />
                                                    <input type="hidden" name="zc_trackCode" id="zc_trackCode" value="ZCFORMVIEW" />
                                                    <input type="hidden" id="zc_formIx" name="zc_formIx" value="3z97788d6668553563b1dad28f528d1ac729dfce8dee47cfeaf2b6aeac944d2817" />
                                                    <input type="hidden" id="viewFrom" value="URL_ACTION" />
                                                    <span style="display: none" id="dt_CONTACT_EMAIL">1,true,6,Contact Email,2</span>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <img src="https://ofis-zc1.maillist-manage.in/images/spacer.gif" id="refImage" onload="referenceSetter(this)" style="display:none;" />
                                </div>
                                <input type="hidden" id="signupFormType" value="QuickForm_Horizontal" />
                                <div id="zcOptinOverLay" oncontextmenu="return false" style="display:none;text-align: center; background-color: rgb(0, 0, 0); opacity: 0.5; z-index: 100; position: fixed; width: 100%; top: 0px; left: 0px; height: 988px;">

                                </div>
                                <div id="zcOptinSuccessPopup" style="display:none;z-index: 9999;width: 800px; height: 40%;top: 84px;position: fixed; left: 26%;background-color: #FFFFFF;border-color: #E6E6E6; border-style: solid; border-width: 1px;  box-shadow: 0 1px 10px #424242;padding: 35px;">
                                    <span style="position: absolute;top: -16px;right:-14px;z-index:99999;cursor: pointer;" id="closeSuccess">
                                        <img src="https://ofis-zc1.maillist-manage.in/images/videoclose.png" />
                                    </span>
                                    <div id="zcOptinSuccessPanel"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="fbottom fbdr">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <h5 className="white">Coworking Spaces</h5>
                                <Link to="#">Coworking Space In Sector-62 Noida</Link>
                                <Link to="#">Coworking Space In Sona-Road Gurugram</Link>
                                <Link to="/Coworkingspaces">Coworking Space In MG-Road Gurugram</Link>
                                <Link to="/Aerocity">Coworking Space In Aerocity</Link>
                            </div>
                            <div className="col-md-3">
                                <h5 className="white">Locations</h5>
                                <a href="#">Noida</a>
                                <a href="#">Delhi</a>
                                <a href="#">Gurugram</a>
                                <a href="#">Mumbai</a>
                                <a href="#">Pune</a>
                                <a href="#">Bengaluru</a>
                                <a href="#">Ahmedabad</a>
                            </div>
                            <div className="col-md-3">
                                <h5 className="white">Useful Links</h5>
                                <a href="#">About Us</a>
                                <a href="#">Contact Us</a>
                                <a href="#">Blogs</a>
                                <a href="#">Careers</a>
                                <a href="#">FAQs</a>
                            </div>
                            <div className="col-md-3">
                                <h5 className="white">Follow us</h5>
                                <ul>
                                    <li><a href="#"><img src="images/tweeter.svg" /></a></li>
                                    <li><a href="#"><img src="images/facebook.svg" /></a></li>
                                    <li><a href="#"><img src="images/intagram.svg" /></a></li>
                                    <li><a href="#"><img src="images/social.svg" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <p className="white text-center copy">Copyright © 2023 ofissquare. All rights reserved.</p>
            </footer>
        </>
    )
}
export default Footer