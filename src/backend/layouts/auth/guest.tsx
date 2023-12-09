import React, { useEffect } from "react";

import { useParams } from 'react-router-dom';

const GuestLayout: React.FC = ()=>{

                const { action } = useParams();
                let is_login=false;
                let is_register=false;
              
                switch (action) {
                  case "login":
                        is_login=true;
                    break;
                  case "register":
                        is_register=true;
                    break;
                  // Add other cases for additional actions
                  default:
                        is_login=true;
                    break;
                }
                useEffect(() => {
                        // This function will run when the component is mounted
                        const handleLoad = () => {
                          // Find and add the class to the element with the specific class name
                          const preloader = document.querySelector('.preloader');
                          if (preloader) {
                                preloader.classList.add('preloader-deactivate');
                          }
                        };
                
                        // Attach the handleLoad function to the window's load event
                        window.addEventListener('load', handleLoad);
                
                        // Cleanup: Remove the event listener when the component is unmounted
                        return () => {
                          window.removeEventListener('load', handleLoad);
                        };
                  }, []); 
                return (
                  <div>
                        {/* {is_login && (
                                 <div>
                                 <h1>login</h1>     
                         </div>
                        )}
                        {is_register && (
                                <div>
                                <h1>Register</h1>
                        </div>
                        )} */}
                        
                        
		<div className="preloader">
            <div className="content">
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
            </div>
        </div>
	

		
		<div className="main-content-area ps-0">
			<div className="container">
                        {is_login && (
				<div className="login-area">
					<div className="text-center mb-4">
						<a href="index.html">
							<img src="/assets/images/logo.svg" alt="logo"/>
						</a>
					</div> 
					<div className="card rounded-3 border-0 mb-24 mw-560 m-auto">
						<div className="card-body p-30">
							<div className="card-title mb-20 pb-20 border-bottom border-color text-center">
								<h4 className="mb-0 mb-2 fs-20">Login</h4>
								<p className="text-body fs-14">Welcome back Jacob Smith!</p>
							</div>
							<div className="bg-primary-transparent p-3 rounded-3 text-center mb-25">
								<span className="text-dark fs-14 fw-semibold mb-2 d-block">Login Access</span>
								<p className="text-primary fs-14 mb-0"><span className="text-dark">Email:</span> jacobsmith@dass.com</p>
								<p className="text-primary fs-14"><span className="text-dark">Password:</span> jacobsmith123456</p>
							</div>
							<form>
								<div className="form-group mb-4">
									<label className="fw-semibold fs-14 mb-2 text-dark">User Name<span className="text-danger">*</span></label>
									<div className="form-floating">
										<input type="text" className="form-control" id="floatingInput" placeholder="Enter User Name"/>
										<label className="text-body fs-12" >Enter User Name</label>
									</div>
								</div>
								<div className="form-group mb-4">
									<label className="fw-semibold fs-14 mb-2 text-dark">Password <span className="text-danger">*</span></label>
									<div className="form-floating position-relative">
										<input type="password" className="form-control" id="password-field1" placeholder="Enter Password"/>
										<label className="text-body fs-12" >Enter Password</label>
                                                                                {/* style="right: 10px !important; cursor: pointer;" */}
                                                                                {/* toggle="#password-field1 */}
										<span  className="text-body ri-eye-line field-icon toggle-password position-absolute top-50 end-0 fs-20 translate-middle-y" ></span>
									</div>
								</div>
								<div className="form-group d-sm-flex justify-content-between">
									<div className="form-check mb-4">
                                                                                {/* style="position: relative; top: -2px;" */}
										<input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
										<label className="form-check-label fs-14 text-body ms-2" >
											Remember password ? 
										</label>
									</div>
									<div className="mb-4">
										<a href="forgot-password.html" className="fs-14 text-primary text-decoration-none">Forgot your password?</a>
									</div>
								</div>
								<div className="form-group mb-4">
									<a href="index.html" className="btn btn-primary rounded-1 w-100 py-3">Login</a>
								</div>
								<div className="form-group mb-4 text-center">
									<p className="text-body mb-4 fs-14">Don't have an account? <a href="register.html" className="text-primary text-decoration-none">Register</a></p>
									<span className="or d-block"><span className="px-3 bg-white fw-medium">OR</span></span>
								</div>
								<div className="form-group mb-0 text-center">
									<ul className="social-link ps-0 mb-0 list-unstyled">
										<li>
											<a href="https://www.google.com/" target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Google">
												<i data-feather="mail"></i>
											</a>
										</li>
										<li>
											<a href="https://www.facebook.com/" target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Facebook">
												<i data-feather="facebook"></i>
											</a>
										</li>
										<li>
											<a href="https://www.twitter.com/" target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Twitter">
												<i data-feather="twitter"></i>
											</a>
										</li>
										<li>
											<a href="https://www.linkedin.com/" target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Linkedin">
												<i data-feather="linkedin"></i>
											</a>
										</li>
									</ul>
								</div>
							</form>
						</div>
					</div>
				</div>
                        )}
                         {is_register && (
				<h1>Register</h1>
                         )}
			</div>
		</div>
	
                  </div>
                );
}


export default GuestLayout;