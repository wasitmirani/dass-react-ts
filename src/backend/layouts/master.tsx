import React, { useState } from 'react';

const Master : React.FC=()=>{
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const handleDropdownToggle = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};

    return (
      <>
      
      {/* <!--=== Start Preloader Section ===--> */}
		{/* <div className="preloader">
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
        </div> */}
		{/* <!--=== End Preloader Section ===--> */}
		
		{/* <!--=== Start Sidebar Menu Area ===--> */}
		<div className="sidebar-menu-area" id="metismenu" data-simplebar>
			<div className="d-flex justify-content-between align-items-center border-bottom border-color bg-white position-sticky top-0 z-1 main-logo-wrap">
				<a href="index.html" className="main-logo d-flex align-items-center text-decoration-none">
					<img className="logo" src="assets/images/logo.png" alt="logo"/>
					<span className="ms-3 logo-text">Dass</span>
				</a>
				<div className="responsive-burger-menu d-block d-xl-none">
					<span className="top-bar"></span>
					<span className="middle-bar"></span>
					<span className="bottom-bar"></span>
				</div>
			</div>
			<ul className="sidebar-menu o-sortable">
				<li><span className="cat">HOME</span></li>
				<li className="mm-active">
					<a href="#" className="has-arrow menu-title" aria-expanded="true">
						<span className="icon"><i data-feather="home"></i></span>
						<span className="title">Dashboard</span>
						<span className="count">5</span>
					</a>
					<ul className="sidemenu-second-level">
						<li><a href="ecommerce.html">eCommerce</a></li>
						<li><a href="analytics.html" className="active">Analytics</a></li>
						<li><a href="lms-courses.html">LMS Courses</a></li>
						<li><a href="project-management.html">Project Management</a></li>
						<li><a href="hr-management.html">HR Management</a></li>
					</ul>
				</li>
				<li><span className="cat">APPS</span></li>
				<li>
					<a href="calendar.html" className="menu-title">
						<span className="icon"><i data-feather="calendar"></i></span>
						<span className="title">Calendar</span>
					</a>
				</li>
				<li>
					<a href="chat.html" className="menu-title">
						<span className="icon"><i data-feather="message-square"></i></span>
						<span className="title">Chat</span>
					</a>
				</li>
				<li>
					<a href="#" className="has-arrow menu-title" aria-expanded="true">
						<span className="icon"><i data-feather="mail"></i></span>
						<span className="title">Email</span>
					</a>
					<ul className="sidemenu-second-level">
						<li><a href="inbox.html">Inbox</a></li>
						<li><a href="compose.html">Compose</a></li>
						<li><a href="read-email.html">Read Email</a></li>
						<li><a href="starred.html">Starred</a></li>
						<li><a href="drafts.html">Drafts</a></li>
						<li><a href="important.html">Important</a></li>
						<li><a href="trash.html">Trash</a></li>
					</ul>
				</li>
				<li>
					<a href="notes.html" className="menu-title">
						<span className="icon"><i data-feather="file-text"></i></span>
						<span className="title">Notes</span>
					</a>
				</li>
				<li>
					<a href="to-do-list.html" className="menu-title">
						<span className="icon"><i data-feather="clipboard"></i></span>
						<span className="title">To Do List</span>
					</a>
				</li>
				<li>
					<a href="invoice.html" className="menu-title">
						<span className="icon"><i data-feather="printer"></i></span>
						<span className="title">Invoice</span>
					</a>
				</li>
				<li>
					<a href="user-profile.html" className="menu-title">
						<span className="icon"><i data-feather="user"></i></span>
						<span className="title">User Profile</span>
					</a>
				</li>
				<li>
					<a href="#" className="has-arrow menu-title" aria-expanded="true">
						<span className="icon"><i data-feather="folder"></i></span>
						<span className="title">File Manager</span>
					</a>
					<ul className="sidemenu-second-level">
						<li><a href="my-drive.html">My Drive</a></li>
						<li><a href="recent.html">Recent</a></li>
						<li><a href="deleted-files.html">Deleted Files</a></li>
						<li><a href="image-file.html">Image Files</a></li>
						<li><a href="video-file.html">Video Files</a></li>
						<li><a href="documents.html">Documents</a></li>
						<li><a href="audio.html">Audio</a></li>
					</ul>
				</li>
				<li>
					<a href="contact.html" className="menu-title">
						<span className="icon"><i data-feather="user"></i></span>
						<span className="title">Contact</span>
					</a>
				</li>
				<li><span className="cat">PAGES</span></li>
				<li>
					<a href="#" className="has-arrow menu-title" aria-expanded="true">
						<span className="icon"><i data-feather="phone-call"></i></span>
						<span className="title">Contact List</span>
					</a>
					<ul className="sidemenu-second-level">
						<li><a href="members-list.html">Members List</a></li>
						<li><a href="members-grid.html">Members Grid</a></li>
						<li><a href="member-profile.html">Member Profile</a></li>
					</ul>
				</li>
				<li>
					<a href="#" className="has-arrow menu-title" aria-expanded="true">
						<span className="icon"><i data-feather="shopping-cart"></i></span>
						<span className="title">eCommerce</span>
					</a>
					<ul className="sidemenu-second-level">
						<li><a href="products.html">Products</a></li>
						<li><a href="create-product.html">Create Product</a></li>
						<li><a href="product-details.html">Product Details</a></li>
						<li><a href="orders.html">Orders</a></li>
						<li><a href="order-details.html">Order Details</a></li>
						<li><a href="sellers.html">Sellers</a></li>
						<li><a href="customers.html">Customers</a></li>
						<li><a href="cart.html">Cart</a></li>
						<li><a href="checkout.html">Checkout</a></li>
						<li><a href="wishlist.html">Wishlist</a></li>
					</ul>
				</li>
				<li>
					<a href="#" className="has-arrow menu-title" aria-expanded="true">
						<span className="icon"><i data-feather="award"></i></span>
						<span className="title">Courses</span>
					</a>
					<ul className="sidemenu-second-level">
						<li><a href="courses.html">Courses</a></li>
						<li><a href="courses-video.html">Courses Video</a></li>
						<li><a href="course-details.html">Course Details</a></li>
						<li><a href="instructors.html">Instructor</a></li>
						<li><a href="courses-member-profile.html">Member Profile</a></li>
					</ul>
				</li>
				<li>
					<a href="#" className="has-arrow menu-title" aria-expanded="true">
						<span className="icon"><i data-feather="file-plus"></i></span>
						<span className="title">Projects</span>
					</a>
					<ul className="sidemenu-second-level">
						<li><a href="projects.html">Projects</a></li>
						<li><a href="project-create.html">Project Create</a></li>
						<li><a href="tasks.html">Tasks</a></li>
						<li><a href="client-list.html">Client List</a></li>
						<li><a href="client-grid.html">Client Grid</a></li>
						<li><a href="team.html">Team</a></li>
						<li><a href="kanban-board.html">Kanban Board</a></li>
						<li><a href="user.html">User</a></li>
					</ul>
				</li>
				<li>
					<a href="#" className="has-arrow menu-title" aria-expanded="true">
						<span className="icon"><i data-feather="command"></i></span>
						<span className="title">Management</span>
					</a>
					<ul className="sidemenu-second-level">
						<li><a href="bills-summary.html">Bills Summary</a></li>
						<li><a href="notice-board.html">Notice Board</a></li>
					</ul>
				</li>
				<li>
					<a href="#" className="has-arrow menu-title" aria-expanded="true">
						<span className="icon"><i data-feather="pocket"></i></span>
						<span className="title">Analytics</span>
					</a>
					<ul className="sidemenu-second-level">
						<li><a href="visitors-by-channel.html">Visitors By Channel</a></li>
						<li><a href="visitor-reports.html">Visitor Reports</a></li>
					</ul>
				</li>
				<li>
					<a href="#" className="has-arrow menu-title" aria-expanded="true">
						<span className="icon"><i data-feather="lock"></i></span>
						<span className="title">Authentication</span>
					</a>
					<ul className="sidemenu-second-level">
						<li><a href="login.html">Login</a></li>
						<li><a href="register.html">Register</a></li>
						<li><a href="forgot-password.html">Forgot Password</a></li>
						<li><a href="reset-password.html">Reset Password</a></li>
						<li><a href="confirm-mail.html">Confirm Mail</a></li>
						<li><a href="lock-screen.html">Lock Screen</a></li>
					</ul>
				</li>
				<li>
					<a href="#" className="has-arrow menu-title" aria-expanded="true">
						<span className="icon"><i data-feather="grid"></i></span>
						<span className="title">UI Elements</span>
					</a>
					<ul className="sidemenu-second-level">
						<li><a href="alerts.html">Alerts</a></li>
						<li><a href="avatars.html">Avatars</a></li>
						<li><a href="accordion.html">Accordion</a></li>
						<li><a href="drop-downs.html">Drop Downs</a></li>
						<li><a href="badges.html">Badges</a></li>
						<li><a href="breadcrumb.html">Breadcrumb</a></li>
						<li><a href="collapse.html">Collapse</a></li>
						<li><a href="buttons.html">Buttons</a></li>
						<li><a href="button-group.html">Button Group</a></li>
						<li><a href="cards.html">Cards</a></li>
						<li><a href="checks-radios.html">Checks & Radios</a></li>
						<li><a href="carousels.html">Carousels</a></li>
						<li><a href="color-picker.html">Color Picker</a></li>
						<li><a href="date-time-picker.html">Date & Time Picker</a></li>
						<li><a href="colors.html">Colors</a></li>
						<li><a href="drag-drop.html">Drag & Drop</a></li>
						<li><a href="borders.html">Borders</a></li>
						<li><a href="form-overview.html">Form Overview</a></li>
						<li><a href="form-control.html">Form Control</a></li>
						<li><a href="form-layout.html">Form Layout</a></li>
						<li><a href="form-validation.html">Form Validation</a></li>
						<li><a href="select.html">Select</a></li>
						<li><a href="range-slider.html">Range Slider</a></li>
						<li><a href="input-group.html">Input Group</a></li>
						<li><a href="floating-labels.html">Floating Labels</a></li>
						<li><a href="grid.html">Grid</a></li>
						<li><a href="images.html">Images</a></li>
						<li><a href="list-group.html">List Group</a></li>
						<li><a href="pagination.html">Pagination</a></li>
						<li><a href="placeholders.html">Placeholders</a></li>
						<li><a href="spinners.html">Spinners</a></li>
						<li><a href="toasts.html">Toasts</a></li>
						<li><a href="progress-bar.html">Progress Bar</a></li>
						<li><a href="navbar.html">Navbar</a></li>
						<li><a href="media-object.html">Media Object</a></li>
						<li><a href="navs-tabs.html">Navs & Tabs</a></li>
						<li><a href="modal.html">Modal</a></li>
						<li><a href="popovers.html">Popovers</a></li>
						<li><a href="position-stepper.html">Position & Stepper</a></li>
						<li><a href="tooltip.html">Tooltip</a></li>
						<li><a href="content-scroll-bar.html">Scroll Bar</a></li>
						<li><a href="offcanvas.html">Offcanvas</a></li>
						<li><a href="global-custom-className.html">Global Custom className</a></li>
					</ul>
				</li>
				<li>
					<a href="#" className="has-arrow menu-title" aria-expanded="true">
						<span className="icon"><i data-feather="layers"></i></span>
						<span className="title">Pages</span>
					</a>
					<ul className="sidemenu-second-level">
						<li><a href="about-us.html">About Us</a></li>
						<li><a href="pricing-table.html">Pricing Table</a></li>
						<li><a href="treeview.html">Treeview</a></li>
						<li><a href="timeline.html">Timeline</a></li>
						<li><a href="rating.html">Rating</a></li>
						<li><a href="sweet-alerts.html">Sweet Alerts</a></li>
						<li><a href="notifications.html">Notifications</a></li>
						<li><a href="widgets.html">Widgets</a></li>
						<li><a href="faqs.html">FAQs</a></li>
						<li><a href="gallery.html">Gallery</a></li>
						<li><a href="video.html">Video</a></li>
						<li><a href="contact-us.html">Contact Us</a></li>
						<li><a href="blog.html">Blog</a></li>
						<li><a href="blog-details.html">Blog Details</a></li>
						<li><a href="terms-conditions.html">Terms & Conditions</a></li>
						<li><a href="privacy-policy.html">Privacy Policy</a></li>
						<li><a href="empty.html">Empty</a></li>
						<li><a href="coming-soon.html">Coming Soon</a></li>
					</ul>
				</li>
				<li>
					<a href="#" className="has-arrow menu-title" aria-expanded="true">
						<span className="icon"><i data-feather="map"></i></span>
						<span className="title">Maps</span>
					</a>
					<ul className="sidemenu-second-level">
						<li><a href="google-map.html">Google Map</a></li>
						<li><a href="vector-map.html">Vector Map</a></li>
					</ul>
				</li>
				<li>
					<a href="#" className="has-arrow menu-title" aria-expanded="true">
						<span className="icon"><i data-feather="table"></i></span>
						<span className="title">Tables</span>
					</a>
					<ul className="sidemenu-second-level">
						<li><a href="basic-table.html">Basic Table</a></li>
						<li><a href="dark-table.html">Dark Table</a></li>
						<li><a href="ready-table.html">Ready Table</a></li>
						<li><a href="contact-table.html">Contact Table</a></li>
						<li><a href="data-table.html">Data Table</a></li>
					</ul>
				</li>
				<li>
					<a href="#" className="has-arrow menu-title" aria-expanded="true">
						<span className="icon"><i data-feather="table"></i></span>
						<span className="title">Form Elements</span>
					</a>
					<ul className="sidemenu-second-level">
						<li><a href="forms-input.html">Forms Input</a></li>
						<li><a href="input-groups.html">Input Groups</a></li>
						<li><a href="form-editor.html">Form Editor</a></li>
					</ul>
				</li>
				<li>
					<a href="#" className="has-arrow menu-title" aria-expanded="true">
						<span className="icon"><i data-feather="pie-chart"></i></span>
						<span className="title">Charts</span>
					</a>
					<ul className="sidemenu-second-level">
						<li><a href="apex-charts.html">Apex Charts</a></li>
						<li><a href="chart-js.html">Chart Js</a></li>
						<li><a href="e-charts.html">E Charts</a></li>
						<li><a href="am-charts.html">Am Charts</a></li>
					</ul>
				</li>
				<li>
					<a href="#" className="has-arrow menu-title" aria-expanded="true">
						<span className="icon"><i data-feather="package"></i></span>
						<span className="title">Icons</span>
					</a>
					<ul className="sidemenu-second-level">
						<li><a href="feather-icons.html">Feather Icons</a></li>
						<li><a href="remix-icons.html">Remix Icons</a></li>
						<li><a href="font-awesome.html">Font Awesome</a></li>
					</ul>
				</li>
				<li>
					<a href="#" className="has-arrow menu-title" aria-expanded="true">
						<span className="icon"><i data-feather="settings"></i></span>
						<span className="title">Profile Settings</span>
					</a>
					<ul className="sidemenu-second-level">
						<li><a href="profile.html">Profile</a></li>
						<li><a href="account-settings.html">Account Settings</a></li>
						<li><a href="password-change.html">Password Change</a></li>
						<li><a href="profile-edit.html">Profile Edit</a></li>
						<li><a href="logout.html">Logout</a></li>
					</ul>
				</li>
			</ul>
		</div>
		{/* <!--=== End Sidebar Menu Area ===--> */}

		{/* <!--=== Start Main Content Area ===--> */}
		<div className="main-content-area">
			<div className="container-fluid">
				{/* <!--=== Start Header Area ===--> */}
				<header className="header-area bg-white mb-24">
					<div className="row align-items-center">
						<div className="col-lg-6 col-sm-6">
							<div className="header-left-content">
								<ul className="list-unstyled ps-0 mb-0 d-flex justify-content-center justify-content-lg-start justify-content-md-start align-items-center">
									<li>
										<div className="burger-menu d-none d-lg-block">
											<span className="top-bar"></span>
											<span className="middle-bar"></span>
											<span className="bottom-bar"></span>
										</div>
										<div className="responsive-burger-menu d-block d-lg-none">
											<span className="top-bar"></span>
											<span className="middle-bar"></span>
											<span className="bottom-bar"></span>
										</div>
									</li>
									<li>
										<form className="src-form position-relative z-1">
											<input type="text" className="form-control" placeholder="Search Here"/>
											<button className="bg-transparent position-absolute position-absolute top-50 end-0 translate-middle border-0 ps-0 pe-1">
												<i data-feather="search"></i>
											</button>
										</form>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-6 col-sm-6">
							<div className="header-right-content float-lg-end float-md-end">
								<ul className="list-unstyled ps-0 mb-0 d-flex justify-content-center justify-content-lg-end justify-content-md-end align-items-center">
									<li>
										<div className="dropdown mail languages">
											<button className="btn btn-secondary border-0 p-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
												<img src="assets/images/country/usa.png" alt="usa"/>
											</button>
											<div className="dropdown-menu dropdown-lg p-0 border-0 box-shadow">
												<h6 className="dropdown-item-text fs-15 fw-semibold m-0 py-3 border-bottom border-color d-flex justify-content-between align-items-center">
													Language 
													<span className="text-white bg-danger fs-12 py-1 px-1 rounded-1 fw-normal">09</span>
												</h6> 
												
												<div className="notification-menu h-400" data-simplebar>
													<div className=" d-flex justify-content-between">
														<a href="javascript:;" className="dropdown-item py-3">
															<div className="d-flex align-items-center">
																<div className="avatar-md rounded-circle text-center flex-shrink-0">
																	<img src="assets/images/country/united-states.png" alt="united-states"/>
																</div>
																<div className="flex-grow-1 ms-2 text-truncate">
																	<h6 className="my-0 fs-14 fw-medium">English</h6>
																</div>
															</div>
														</a>
														<a href="javascript:;" className="dropdown-item py-3">
															<div className="d-flex align-items-center">
																<div className="avatar-md rounded-circle text-center flex-shrink-0">
																	<img src="assets/images/country/canada.png" alt="canada"/>
																</div>
																<div className="flex-grow-1 ms-2 text-truncate">
																	<h6 className="my-0 fs-14 fw-medium">Canada</h6>
																</div>
															</div>
														</a>
													</div>
													<div className=" d-flex justify-content-between">
														<a href="javascript:;" className="dropdown-item py-3">
															<div className="d-flex align-items-center">
																<div className="avatar-md rounded-circle text-center flex-shrink-0">
																	<img src="assets/images/country/china.png" alt="china"/>
																</div>
																<div className="flex-grow-1 ms-2 text-truncate">
																	<h6 className="my-0 fs-14 fw-medium">China</h6>
																</div>
															</div>
														</a>
														<a href="javascript:;" className="dropdown-item py-3">
															<div className="d-flex align-items-center">
																<div className="avatar-md rounded-circle text-center flex-shrink-0">
																	<img src="assets/images/country/france.png" alt="france"/>
																</div>
																<div className="flex-grow-1 ms-2 text-truncate">
																	<h6 className="my-0 fs-14 fw-medium">France</h6>
																</div>
															</div>
														</a>
													</div>
													<div className=" d-flex justify-content-between">
														<a href="javascript:;" className="dropdown-item py-3">
															<div className="d-flex align-items-center">
																<div className="avatar-md rounded-circle text-center flex-shrink-0">
																	<img src="assets/images/country/germany.png" alt="Germany"/>
																</div>
																<div className="flex-grow-1 ms-2 text-truncate">
																	<h6 className="my-0 fs-14 fw-medium">Germany</h6>
																</div>
															</div>
														</a>
														<a href="javascript:;" className="dropdown-item py-3">
															<div className="d-flex align-items-center">
																<div className="avatar-md rounded-circle text-center flex-shrink-0">
																	<img src="assets/images/country/mexico.png" alt="mexico"/>
																</div>
																<div className="flex-grow-1 ms-2 text-truncate">
																	<h6 className="my-0 fs-14 fw-medium">Mexico</h6>
																</div>
															</div>
														</a>
													</div>
													<div className=" d-flex justify-content-between">
														<a href="javascript:;" className="dropdown-item py-3">
															<div className="d-flex align-items-center">
																<div className="avatar-md rounded-circle text-center flex-shrink-0">
																	<img src="assets/images/country/russia.png" alt="russia"/>
																</div>
																<div className="flex-grow-1 ms-2 text-truncate">
																	<h6 className="my-0 fs-14 fw-medium">Russia</h6>
																</div>
															</div>
														</a>
														<a href="javascript:;" className="dropdown-item py-3">
															<div className="d-flex align-items-center">
																<div className="avatar-md rounded-circle text-center flex-shrink-0">
																	<img src="assets/images/country/arabic.png" alt="arabic"/>
																</div>
																<div className="flex-grow-1 ms-2 text-truncate">
																	<h6 className="my-0 fs-14 fw-medium">Arabic</h6>
																</div>
															</div>
														</a>
													</div>
												</div>
												<a href="javascript:;" className="dropdown-item text-center text-white border-top border-color pt-2 pb-2 d-block bg-primary rounded-bottom fs-15">
													View all
												</a>
											</div>
										</div>
									</li>

									<li className="ms-lg-4 ms-md-4 ms-2">
										<div className="dropdown mail">
											<button className="btn btn-secondary fullscreen-btn border-0 p-0 position-relative" id="fullscreen-button">
												<span className="maximize">
													<i data-feather="maximize"></i>
												</span>
												<span className="minimize top-50 start-50 translate-middle position-absolute">
													<i data-feather="minimize"></i>
												</span>
											</button>
										</div>
									</li>

									<li className="ms-lg-4 ms-md-4 ms-2">
										<div className="dropdown mail apps">
											<button className="btn btn-secondary border-0 p-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
												<i data-feather="grid"></i>
											</button>
											<div className="dropdown-menu dropdown-lg p-0 border-0 box-shadow">
												<h6 className="dropdown-item-text fs-15 fw-semibold m-0 py-3 border-bottom border-color d-flex justify-content-between align-items-center">
													Apps 
													<span className="text-white bg-danger fs-12 py-1 px-1 rounded-1 fw-normal">12</span>
												</h6> 
												
												<div className="h-255" data-simplebar>
													<div className="apps-menu d-flex flex-wrap align-items-center justify-content-center">
														<a href="javascript:;" className="dropdown-item m-2 border-1">
															<img src="assets/images/apps/gmail.png" alt="gmail"/>
															<span className="d-block fs-14 fw-medium text-dark mt-2">Gmail</span>
														</a>
														<a href="javascript:;" className="dropdown-item m-2 border-1">
															<img src="assets/images/apps/playstore.png" alt="playstore"/>
															<span className="d-block fs-14 fw-medium text-dark mt-2">Play Store</span>
														</a>
														<a href="javascript:;" className="dropdown-item m-2 border-1">
															<img src="assets/images/apps/drive.png" alt="drive"/>
															<span className="d-block fs-14 fw-medium text-dark mt-2">Drive</span>
														</a>
														<a href="javascript:;" className="dropdown-item m-2 border-1">
															<img src="assets/images/apps/account.png" alt="account"/>
															<span className="d-block fs-14 fw-medium text-dark mt-2">Account</span>
														</a>
														<a href="javascript:;" className="dropdown-item m-2 border-1">
															<img src="assets/images/apps/calender.png" alt="calender"/>
															<span className="d-block fs-14 fw-medium text-dark mt-2">Calender</span>
														</a>
														<a href="javascript:;" className="dropdown-item m-2 border-1">
															<img src="assets/images/apps/figma.png" alt="figma"/>
															<span className="d-block fs-14 fw-medium text-dark mt-2">Figma</span>
														</a>
														<a href="javascript:;" className="dropdown-item m-2 border-1">
															<img src="assets/images/apps/google-sheets.png" alt="google-sheets"/>
															<span className="d-block fs-14 fw-medium text-dark mt-2">Sheets</span>
														</a>
														<a href="javascript:;" className="dropdown-item m-2 border-1">
															<img src="assets/images/apps/google.png" alt="google"/>
															<span className="d-block fs-14 fw-medium text-dark mt-2">Google</span>
														</a>
														<a href="javascript:;" className="dropdown-item m-2 border-1">
															<img src="assets/images/apps/microsoft-word.png" alt="microsoft-word"/>
															<span className="d-block fs-14 fw-medium text-dark mt-2">Microsoft</span>
														</a>
														<a href="javascript:;" className="dropdown-item m-2 border-1">
															<img src="assets/images/apps/powerpoint.png" alt="powerpoint"/>
															<span className="d-block fs-14 fw-medium text-dark mt-2">Powerpoint</span>
														</a>
														<a href="javascript:;" className="dropdown-item m-2 border-1">
															<img src="assets/images/apps/sketch.png" alt="sketch"/>
															<span className="d-block fs-14 fw-medium text-dark mt-2">Sketch</span>
														</a>
														<a href="javascript:;" className="dropdown-item m-2 border-1">
															<img src="assets/images/apps/translate.png" alt="translate"/>
															<span className="d-block fs-14 fw-medium text-dark mt-2">Translate</span>
														</a>
													</div>
												</div>
												<a href="javascript:;" className="dropdown-item text-center text-white border-top border-color py-2 d-block bg-primary rounded-bottom z-1 position-relative fs-15">
													View all
												</a>
											</div>
										</div>
									</li>

									<li className="ms-lg-4 ms-md-4 ms-2">
										<div className="dropdown mail">
											<button className="btn btn-secondary border-0 p-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
												<i data-feather="mail"></i>
											</button>
											<div className="dropdown-menu dropdown-lg p-0 border-0 box-shadow">
												<h6 className="dropdown-item-text fs-15 fw-semibold m-0 py-3 border-bottom border-color d-flex justify-content-between align-items-center">
													Email 
													<span className="text-white bg-danger fs-12 py-1 px-1 rounded-1 fw-normal">08</span>
												</h6> 
												
												<div className="notification-menu h-400" data-simplebar>
													<a href="inbox.html" className="dropdown-item py-3">
														<small className="float-end ps-2 text-body fs-12">1 min ago</small>
														<div className="d-flex align-items-center">
															<div className="avatar-md rounded-circle text-center flex-shrink-0">
																<i data-feather="shopping-bag"></i>
															</div>
															<div className="flex-grow-1 ms-2 text-truncate">
																<h6 className="my-0 fs-14 fw-medium">Your Order Has Been Shipped</h6>
																<small className="mb-0 text-body fs-12">Order No: 123456 Has Shipped To Your Delivery Address</small>
															</div>
														</div>
													</a>
													<a href="inbox.html" className="dropdown-item py-3">
														<small className="float-end ps-2 text-body fs-12">3 min ago</small>
														<div className="d-flex align-items-center">
															<div className="avatar-md rounded-circle text-center flex-shrink-0">
																<i data-feather="percent"></i>
															</div>
															<div className="flex-grow-1 ms-2 text-truncate">
																<h6 className="my-0 fs-14 fw-medium">Discount Available</h6>
																<small className="mb-0 text-body fs-12">Discount Available On Selected Products</small>
															</div>
														</div>
													</a>
													<a href="inbox.html" className="dropdown-item py-3">
														<small className="float-end ps-2 text-body fs-12">4 min ago</small>
														<div className="d-flex align-items-center">
															<div className="avatar-md rounded-circle text-center flex-shrink-0">
																<i data-feather="user-check"></i>
															</div>
															<div className="flex-grow-1 ms-2 text-truncate">
																<h6 className="my-0 fs-14 fw-medium">Account Has Been Verified</h6>
																<small className="mb-0 text-body fs-12">Your Account Has Been Verified Sucessfully</small>
															</div>
														</div>
													</a>
													<a href="inbox.html" className="dropdown-item py-3">
														<small className="float-end ps-2 text-body fs-12">6 min ago</small>
														<div className="d-flex align-items-center">
															<div className="avatar-md rounded-circle text-center flex-shrink-0">
																<i data-feather="check-circle"></i>
															</div>
															<div className="flex-grow-1 ms-2 text-truncate">
																<h6 className="my-0 fs-14 fw-medium">Order Placed <span className="text-success">ID: #1116773</span></h6>
																<small className="mb-0 text-body fs-12">Order Placed Successfully</small>
															</div>
														</div>
													</a>
													<a href="inbox.html" className="dropdown-item py-3">
														<small className="float-end ps-2 text-body fs-12">8 min ago</small>
														<div className="d-flex align-items-center">
															<div className="avatar-md rounded-circle text-center flex-shrink-0">
																<i data-feather="clock"></i>
															</div>
															<div className="flex-grow-1 ms-2 text-truncate">
																<h6 className="my-0 fs-14 fw-medium">Order Delayed <span className="text-danger">ID: 7731116</span></h6>
																<small className="mb-0 text-body fs-12">Order Delayed Unfortunately</small>
															</div>
														</div>
													</a>
													<a href="inbox.html" className="dropdown-item py-3">
														<small className="float-end ps-2 text-body fs-12">1 min ago</small>
														<div className="d-flex align-items-center">
															<div className="avatar-md rounded-circle text-center flex-shrink-0">
																<i data-feather="shopping-bag"></i>
															</div>
															<div className="flex-grow-1 ms-2 text-truncate">
																<h6 className="my-0 fs-14 fw-medium">Your Order Has Been Shipped</h6>
																<small className="mb-0 text-body fs-12">Order No: 123456 Has Shipped To Your Delivery Address</small>
															</div>
														</div>
													</a>
													<a href="inbox.html" className="dropdown-item py-3">
														<small className="float-end ps-2 text-body fs-12">3 min ago</small>
														<div className="d-flex align-items-center">
															<div className="avatar-md rounded-circle text-center flex-shrink-0">
																<i data-feather="percent"></i>
															</div>
															<div className="flex-grow-1 ms-2 text-truncate">
																<h6 className="my-0 fs-14 fw-medium">Discount Available</h6>
																<small className="mb-0 text-body fs-12">Discount Available On Selected Products</small>
															</div>
														</div>
													</a>
													<a href="inbox.html" className="dropdown-item py-3">
														<small className="float-end ps-2 text-body fs-12">4 min ago</small>
														<div className="d-flex align-items-center">
															<div className="avatar-md rounded-circle text-center flex-shrink-0">
																<i data-feather="user-check"></i>
															</div>
															<div className="flex-grow-1 ms-2 text-truncate">
																<h6 className="my-0 fs-14 fw-medium">Account Has Been Verified</h6>
																<small className="mb-0 text-body fs-12">Your Account Has Been Verified Sucessfully</small>
															</div>
														</div>
													</a>
													<a href="inbox.html" className="dropdown-item py-3">
														<small className="float-end ps-2 text-body fs-12">6 min ago</small>
														<div className="d-flex align-items-center">
															<div className="avatar-md rounded-circle text-center flex-shrink-0">
																<i data-feather="check-circle"></i>
															</div>
															<div className="flex-grow-1 ms-2 text-truncate">
																<h6 className="my-0 fs-14 fw-medium">Order Placed <span className="text-success">ID: #1116773</span></h6>
																<small className="mb-0 text-body fs-12">Order Placed Successfully</small>
															</div>
														</div>
													</a>
													<a href="inbox.html" className="dropdown-item py-3">
														<small className="float-end ps-2 text-body fs-12">8 min ago</small>
														<div className="d-flex align-items-center">
															<div className="avatar-md rounded-circle text-center flex-shrink-0">
																<i data-feather="clock"></i>
															</div>
															<div className="flex-grow-1 ms-2 text-truncate">
																<h6 className="my-0 fs-14 fw-medium">Order Delayed <span className="text-danger">ID: 7731116</span></h6>
																<small className="mb-0 text-body fs-12">Order Delayed Unfortunately</small>
															</div>
														</div>
													</a>
												</div>
												<a href="inbox.html" className="dropdown-item text-center text-white border-top border-color pt-2 pb-2 d-block bg-primary rounded-bottom fs-15">
													View all
												</a>
											</div>
										</div>
									</li>

									<li className="ms-lg-4 ms-md-4 ms-2">
									<div className={`dropdown notifications${isDropdownOpen ? ' show' : ''}`}>
															<button
																className="btn btn-secondary border-0 p-0 position-relative badge"
																type="button"
																onClick={handleDropdownToggle}
															>
																<i data-feather="bell"></i>
															</button>
															<div className={`dropdown-menu dropdown-lg p-0 border-0 box-shadow${isDropdownOpen ? ' show' : ''}`}>
																{/* ... your dropdown content ... */}
																<h6 className="dropdown-item-text fs-15 fw-semibold m-0 py-3 border-bottom border-color d-flex justify-content-between align-items-center">
													Notifications 
													<span className="text-white bg-danger fs-12 py-1 px-1 rounded-1 fw-normal">08</span>
												</h6> 
												
												<div className="notification-menu h-400" >
													<a href="notifications.html" className="dropdown-item py-3">
														<small className="float-end ps-2 text-body fs-12">6 min ago</small>
														<div className="d-flex align-items-center">
															<div className="avatar-md rounded-circle text-center flex-shrink-0">
																<i data-feather="check-circle"></i>
															</div>
															<div className="flex-grow-1 ms-2 text-truncate">
																<h6 className="my-0 fs-14 fw-medium">Order Placed <span className="text-success">ID: #1116773</span></h6>
																<small className="mb-0 text-body fs-12">Order Placed Successfully</small>
															</div>
														</div>
													</a>
													</div>
																<a href="notification.html" className="dropdown-item text-center text-white border-top border-color pt-2 pb-2 d-block bg-primary rounded-bottom fs-15">
																View all
																</a>
															</div>
															</div>
										{/* <div className="dropdown notifications">
											<button className="btn btn-secondary border-0 p-0 position-relative badge" type="button" data-bs-toggle="dropdown" aria-expanded="false">
												<i data-feather="bell"></i>
											</button>
											<div className="dropdown-menu dropdown-lg p-0 border-0 box-shadow">
												<h6 className="dropdown-item-text fs-15 fw-semibold m-0 py-3 border-bottom border-color d-flex justify-content-between align-items-center">
													Notifications 
													<span className="text-white bg-danger fs-12 py-1 px-1 rounded-1 fw-normal">08</span>
												</h6> 
												
												<div className="notification-menu h-400" data-simplebar>
													<a href="notifications.html" className="dropdown-item py-3">
														<small className="float-end ps-2 text-body fs-12">6 min ago</small>
														<div className="d-flex align-items-center">
															<div className="avatar-md rounded-circle text-center flex-shrink-0">
																<i data-feather="check-circle"></i>
															</div>
															<div className="flex-grow-1 ms-2 text-truncate">
																<h6 className="my-0 fs-14 fw-medium">Order Placed <span className="text-success">ID: #1116773</span></h6>
																<small className="mb-0 text-body fs-12">Order Placed Successfully</small>
															</div>
														</div>
													</a>
													<a href="notifications.html" className="dropdown-item py-3">
														<small className="float-end ps-2 text-body fs-12">8 min ago</small>
														<div className="d-flex align-items-center">
															<div className="avatar-md rounded-circle text-center flex-shrink-0">
																<i data-feather="clock"></i>
															</div>
															<div className="flex-grow-1 ms-2 text-truncate">
																<h6 className="my-0 fs-14 fw-medium">Order Delayed <span className="text-danger">ID: 7731116</span></h6>
																<small className="mb-0 text-body fs-12">Order Delayed Unfortunately</small>
															</div>
														</div>
													</a>
													<a href="notifications.html" className="dropdown-item py-3">
														<small className="float-end ps-2 text-body fs-12">1 min ago</small>
														<div className="d-flex align-items-center">
															<div className="avatar-md rounded-circle text-center flex-shrink-0">
																<i data-feather="shopping-bag"></i>
															</div>
															<div className="flex-grow-1 ms-2 text-truncate">
																<h6 className="my-0 fs-14 fw-medium">Your Order Has Been Shipped</h6>
																<small className="mb-0 text-body fs-12">Order No: 123456 Has Shipped To Your Delivery Address</small>
															</div>
														</div>
													</a>
													<a href="notifications.html" className="dropdown-item py-3">
														<small className="float-end ps-2 text-body fs-12">3 min ago</small>
														<div className="d-flex align-items-center">
															<div className="avatar-md rounded-circle text-center flex-shrink-0">
																<i data-feather="percent"></i>
															</div>
															<div className="flex-grow-1 ms-2 text-truncate">
																<h6 className="my-0 fs-14 fw-medium">Discount Available</h6>
																<small className="mb-0 text-body fs-12">Discount Available On Selected Products</small>
															</div>
														</div>
													</a>
													<a href="notifications.html" className="dropdown-item py-3">
														<small className="float-end ps-2 text-body fs-12">4 min ago</small>
														<div className="d-flex align-items-center">
															<div className="avatar-md rounded-circle text-center flex-shrink-0">
																<i data-feather="user-check"></i>
															</div>
															<div className="flex-grow-1 ms-2 text-truncate">
																<h6 className="my-0 fs-14 fw-medium">Account Has Been Verified</h6>
																<small className="mb-0 text-body fs-12">Your Account Has Been Verified Sucessfully</small>
															</div>
														</div>
													</a>
													<a href="notifications.html" className="dropdown-item py-3">
														<small className="float-end ps-2 text-body fs-12">6 min ago</small>
														<div className="d-flex align-items-center">
															<div className="avatar-md rounded-circle text-center flex-shrink-0">
																<i data-feather="check-circle"></i>
															</div>
															<div className="flex-grow-1 ms-2 text-truncate">
																<h6 className="my-0 fs-14 fw-medium">Order Placed <span className="text-success">ID: #1116773</span></h6>
																<small className="mb-0 text-body fs-12">Order Placed Successfully</small>
															</div>
														</div>
													</a>
													<a href="notifications.html" className="dropdown-item py-3">
														<small className="float-end ps-2 text-body fs-12">8 min ago</small>
														<div className="d-flex align-items-center">
															<div className="avatar-md rounded-circle text-center flex-shrink-0">
																<i data-feather="clock"></i>
															</div>
															<div className="flex-grow-1 ms-2 text-truncate">
																<h6 className="my-0 fs-14 fw-medium">Order Delayed <span className="text-danger">ID: 7731116</span></h6>
																<small className="mb-0 text-body fs-12">Order Delayed Unfortunately</small>
															</div>
														</div>
													</a>
													<a href="notifications.html" className="dropdown-item py-3">
														<small className="float-end ps-2 text-body fs-12">1 min ago</small>
														<div className="d-flex align-items-center">
															<div className="avatar-md rounded-circle text-center flex-shrink-0">
																<i data-feather="shopping-bag"></i>
															</div>
															<div className="flex-grow-1 ms-2 text-truncate">
																<h6 className="my-0 fs-14 fw-medium">Your Order Has Been Shipped</h6>
																<small className="mb-0 text-body fs-12">Order No: 123456 Has Shipped To Your Delivery Address</small>
															</div>
														</div>
													</a>
													<a href="notifications.html" className="dropdown-item py-3">
														<small className="float-end ps-2 text-body fs-12">3 min ago</small>
														<div className="d-flex align-items-center">
															<div className="avatar-md rounded-circle text-center flex-shrink-0">
																<i data-feather="percent"></i>
															</div>
															<div className="flex-grow-1 ms-2 text-truncate">
																<h6 className="my-0 fs-14 fw-medium">Discount Available</h6>
																<small className="mb-0 text-body fs-12">Discount Available On Selected Products</small>
															</div>
														</div>
													</a>
													<a href="notifications.html" className="dropdown-item py-3">
														<small className="float-end ps-2 text-body fs-12">4 min ago</small>
														<div className="d-flex align-items-center">
															<div className="avatar-md rounded-circle text-center flex-shrink-0">
																<i data-feather="user-check"></i>
															</div>
															<div className="flex-grow-1 ms-2 text-truncate">
																<h6 className="my-0 fs-14 fw-medium">Account Has Been Verified</h6>
																<small className="mb-0 text-body fs-12">Your Account Has Been Verified Sucessfully</small>
															</div>
														</div>
													</a>
												</div>
												<a href="notification.html" className="dropdown-item text-center text-white border-top border-color pt-2 pb-2 d-block bg-primary rounded-bottom fs-15">
													View all
												</a>
											</div>
										</div> */}
									</li>

									<li className="ms-lg-4 ms-md-4 ms-2">
										<div className="dropdown user-profile">
											<div className="btn border-0 p-0 d-flex align-items-center text-start" data-bs-toggle="dropdown">
												<div className="flex-shrink-0">
													<img className="rounded-circle user" src="assets/images/user/user.png" alt="user"/>
												</div>
												<div className="flex-grow-1 ms-2 d-none d-xxl-block">
													<h3 className="fs-14 mb-0">Jacob Smith</h3>
													<span className="fs-13 text-body">Admin</span>
												</div>
											</div>
											<ul className="dropdown-menu border-0 rounded box-shadow">
												<li>
													<div className=" text-center border-bottom border-color pb-10 mb-10 d-xxl-none">
														<h3 className="fs-14 mb-0">Jacob Smith</h3>
														<span className="fs-13 text-body">Admin</span>
													</div>
												</li>
												<li>
													<div className="dropdown-item d-flex align-items-center text-body">
														<i data-feather="dollar-sign"></i>
														<span className="ms-2 fs-14 fw-semibold text-dark">45,8745.48</span>
													</div>
												</li>
												<li>
													<a className="dropdown-item d-flex align-items-center text-body" href="profile.html">
														<i data-feather="user"></i>
														<span className="ms-2 fs-14">Profile</span>
													</a>
												</li>
												<li>
													<a className="dropdown-item d-flex align-items-center text-body" href="user-profile.html">
														<i data-feather="command"></i>
														<span className="ms-2 fs-14">User Profile</span>
													</a>
												</li>
												<li>
													<a className="dropdown-item d-flex align-items-center text-body" href="team.html">
														<i data-feather="users"></i>
														<span className="ms-2 fs-14">Team</span>
													</a>
												</li>
												<li>
													<a className="dropdown-item d-flex align-items-center text-body" href="user.html">
														<i data-feather="list"></i>
														<span className="ms-2 fs-14">User List</span>
													</a>
												</li>
												<li>
													<a className="dropdown-item d-flex align-items-center text-body" href="add-user.html">
														<i data-feather="user-plus"></i>
														<span className="ms-2 fs-14">Add User</span>
													</a>
												</li>
												<li>
													<a className="dropdown-item d-flex align-items-center text-body" href="account-settings.html">
														<i data-feather="settings"></i>
														<span className="ms-2 fs-14">Settings</span>
													</a>
												</li>
												<li>
													<a className="dropdown-item d-flex align-items-center text-body" href="logout.html">
														<i data-feather="log-out"></i>
														<span className="ms-2 fs-14">Logout</span>
													</a>
												</li>
											</ul>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</header>
				{/* <!--=== End Header Area ===--> */}

				{/* <!--=== Start Website Overview Area ===--> */}
				<div className="website-overview-area">
					<div className="row justify-content-center">
						<div className="col-xxl-8 js-grid">
							<div className="row justify-content-center js-grid">
								<div className="col-lg-4 col-sm-6">
									<div className="card status-card border-0 rounded-3 mb-24 cursor-move">
										<div className="card-body p-25 text-body">
											<div className="d-flex align-items-center">
												<div className="flex-shrink-0">
													<div className="icon rounded-3">
														<i data-feather="users"></i>
													</div>
												</div>
												<div className="flex-grow-1 ms-3">
													  <span className="d-block mb-1">Total Users</span>
													<h3 className="fs-25">15,821</h3>
													<p className="fw-medium fs-13">User <span className="badge bg-success-transparent text-success mx-1"><i data-feather="trending-up" className="me-1"></i> 4.2%</span> this month</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-sm-6">
									<div className="card status-card border-0 rounded-3 mb-24 cursor-move">
										<div className="card-body p-25 text-body">
											<div className="d-flex align-items-center">
												<div className="flex-shrink-0">
													<div className="icon rounded-3">
														<i data-feather="activity"></i>
													</div>
												</div>
												<div className="flex-grow-1 ms-3">
													  <span className="d-block mb-1">Live Visitors</span>
													<h3 className="fs-25"> 30,125.00 </h3>
													<p className="fw-medium fs-13">Visitor <span className="badge bg-success-transparent text-success mx-1"><i data-feather="trending-up" className="me-1"></i> 5.0%</span> this month</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-sm-6">
									<div className="card status-card border-0 rounded-3 mb-24 cursor-move">
										<div className="card-body p-25 text-body">
											<div className="d-flex align-items-center">
												<div className="flex-shrink-0">
													<div className="icon rounded-3">
														<i data-feather="pie-chart"></i>
													</div>
												</div>
												<div className="flex-grow-1 ms-3">
													  <span className="d-block mb-1">Bounce Rate</span>
													<h3 className="fs-25"> 2,11,125 </h3>
													<p className="fw-medium fs-13">User <span className="badge bg-danger-transparent text-danger mx-1"> <i data-feather="trending-down" className="me-1"></i> 7.6%</span> this month</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="card rounded-3 border-0 audience-report-card mb-24">
								<div className="card-body p-25">
									<div className="card-title d-flex align-items-center justify-content-between mb-20 pb-20 border-bottom border-color cursor-move">
										<h4 className="mb-0">Audience Report</h4>

										<select className="form-select form-control" aria-label="Default select example">
											<option selected>Today</option>
											<option value="1">This Week</option>
											<option value="2">This Month</option>
											<option value="3">This Year</option>
										</select>
									</div>

									<div id="audience_report"></div>
								</div>
							</div>

							<div className="row justify-content-center">
								<div className="col-lg-7">
									<div className="card rounded-3 border-0 sessions-bounce-card mb-24">
										<div className="card-body p-25">
											<div className="card-title d-flex align-items-center justify-content-between mb-20 pb-20 border-bottom border-color cursor-move">
												<h4 className="mb-0">Top Countries Sessions vs Bounce Rate</h4>
		
												<select className="form-select form-control" aria-label="Default select example">
													<option selected>Today</option>
													<option value="1">This Week</option>
													<option value="2">This Month</option>
													<option value="3">This Year</option>
												</select>
											</div>
		
											<div id="sessions_bounce"></div>
										</div>
									</div>

									<div className="card rounded-3 border-0 total-summary-card mb-24">
										<div className="card-body p-25">
											<div className="card-title d-flex align-items-center justify-content-between mb-20 pb-20 border-bottom border-color cursor-move">
												<h4 className="mb-0">Total Summary</h4>
		
												<select className="form-select form-control" aria-label="Default select example">
													<option selected>Today</option>
													<option value="1">This Week</option>
													<option value="2">This Month</option>
													<option value="3">This Year</option>
												</select>
											</div>
		
											<ul className="total-summary ps-0 mb-0 list-unstyled o-sortable">
												<li className="d-flex align-items-center">
													<div className="flex-shrink-0">
														<div className="icon">
															<img src="assets/images/country/usa.png" alt="usa"/>
														</div>
													</div>
													<div className="flex-grow-1 ms-3">
														<span className="fw-medium mb-2 d-block">USA</span>
														<div className="progress position-relative overflow-visible rounded-1 cursor-move bg-white1" role="progressbar" aria-label="Example with label" >
															{/* style="width: 95%" */}
															<div className="progress-bar rounded-1 bg-success" >
																<span className="count position-absolute fw-semibold">95%</span>
															</div>
														</div>
													</div>
												</li>
												<li className="d-flex align-items-center">
													<div className="flex-shrink-0">
														<div className="icon bg-2">
															<img src="assets/images/country/france.png" alt="france"/>
														</div>
													</div>
													<div className="flex-grow-1 ms-3">
														<span className="fw-medium mb-2 d-block">France</span>
														<div className="progress position-relative overflow-visible rounded-1 cursor-move bg-white1" role="progressbar" aria-label="Example with label" >
															{/* style="width: 85%" */}
															<div className="progress-bar rounded-1 bg-primary" >
																<span className="count position-absolute fw-semibold">85%</span>
															</div>
														</div>
													</div>
												</li>
												<li className="d-flex align-items-center">
													<div className="flex-shrink-0">
														<div className="icon bg-3">
															<img src="assets/images/country/canada.png" alt="canada"/>
														</div>
													</div>
													<div className="flex-grow-1 ms-3">
														<span className="fw-medium mb-2 d-block">Canada</span>
														<div className="progress position-relative overflow-visible rounded-1 cursor-move bg-white1" role="progressbar" aria-label="Example with label" >
															{/* style="width: 75%" */}
															<div className="progress-bar rounded-1 bg-warning" >
																<span className="count position-absolute fw-semibold">75%</span>
															</div>
														</div>
													</div>
												</li>
											</ul>
										</div>
									</div>
								</div>

								<div className="col-lg-5">
									<div className="card rounded-3 border-0 activity-status-card mb-24">
										<div className="card-body text-body p-25">
											<div className="card-title d-flex align-items-center justify-content-between mb-20 pb-20 border-bottom border-color cursor-move">
												<h4 className="mb-0">Activity</h4>
		
												<select className="form-select form-control" aria-label="Default select example">
													<option selected>Today</option>
													<option value="1">This Week</option>
													<option value="2">This Month</option>
													<option value="3">This Year</option>
												</select>
											</div>
		
											<ul className="list-unstyled ps-0 mb-0 activity-list h-571" data-simplebar>
												<li className="mb-20">
													<a href="#" className="d-flex text-decoration-none text-body">
														<div className="flex-shrink-0">
															<div className="icon">
																<i data-feather="user"></i>
															</div>
														</div>
														<div className="flex-grow-1 ms-3">
															<span className="fw-semibold text-dark d-block mb-1 fs-15">Donald</span>
															<p>Updated the status of <span className="text-dark">Refund #1234</span> to awaiting customer response</p>
															<span className="fs-12">1 Min ago</span>
														</div>
													</a>
												</li>
												<li className="mb-20">
													<a href="#" className="d-flex text-decoration-none text-body">
														<div className="flex-shrink-0">
															<div className="icon">
																<img src="assets/images/user/user-1.jpg" className="rounded-circle" alt="user-1"/>
															</div>
														</div>
														<div className="flex-grow-1 ms-3">
															<span className="fw-semibold text-dark d-block mb-1 fs-15">Lucy Peterson</span>
															<p>Was added to the group, group name is Overtake</p>
															<span className="fs-12">3 Min ago</span>
														</div>
													</a>
												</li>
												<li className="mb-20">
													<a href="#" className="d-flex text-decoration-none text-body">
														<div className="flex-shrink-0">
															<div className="icon">
																<i data-feather="credit-card"></i>
															</div>
														</div>
														<div className="flex-grow-1 ms-3">
															<span className="fw-semibold text-dark d-block mb-1 fs-15">Joseph Rust</span>
															<p>Opened new showcase <span className="text-dark">Mannat #112233</span> with theme market</p>
															<span className="fs-12">6 Min ago</span>
														</div>
													</a>
												</li>
												<li>
													<a href="#" className="d-flex text-decoration-none text-body">
														<div className="flex-shrink-0">
															<div className="icon">
																<img src="assets/images/user/user-2.jpg" className="rounded-circle" alt="user-2"/>
															</div>
														</div>
														<div className="flex-grow-1 ms-3">
															<span className="fw-semibold text-dark d-block mb-1 fs-15">Juhon Dew</span>
															<p>Updated the status of <span className="text-dark">Refund #1234</span> to awaiting customer response</p>
															<span className="fs-12">7 Min ago</span>
														</div>
													</a>
												</li>
												<li className="mb-20">
													<a href="#" className="d-flex text-decoration-none text-body">
														<div className="flex-shrink-0">
															<div className="icon">
																<i data-feather="alert-circle"></i>
															</div>
														</div>
														<div className="flex-grow-1 ms-3">
															<span className="fw-semibold text-dark d-block mb-1 fs-15">Warning</span>
															<p>Was added to the group, group name is <span className="text-dark">Overtake</span></p>
															<span className="fs-12">10 Min ago</span>
														</div>
													</a>
												</li>
												<li className="mb-20">
													<a href="#" className="d-flex text-decoration-none text-body">
														<div className="flex-shrink-0">
															<div className="icon">
																<i data-feather="user"></i>
															</div>
														</div>
														<div className="flex-grow-1 ms-3">
															<span className="fw-semibold text-dark d-block mb-1 fs-15">Donald</span>
															<p>Updated the status of <span className="text-dark">Refund #1234</span> to awaiting customer response</p>
															<span className="fs-12">11 Min ago</span>
														</div>
													</a>
												</li>
												<li className="mb-20">
													<a href="#" className="d-flex text-decoration-none text-body">
														<div className="flex-shrink-0">
															<div className="icon">
																<img src="assets/images/user/user-1.jpg" className="rounded-circle" alt="user-1"/>
															</div>
														</div>
														<div className="flex-grow-1 ms-3">
															<span className="fw-semibold text-dark d-block mb-1 fs-15">Lucy Peterson</span>
															<p>Was added to the group, group name is Overtake</p>
															<span className="fs-12">2 Hours ago</span>
														</div>
													</a>
												</li>
												<li className="mb-20">
													<a href="#" className="d-flex text-decoration-none text-body">
														<div className="flex-shrink-0">
															<div className="icon">
																<i data-feather="credit-card"></i>
															</div>
														</div>
														<div className="flex-grow-1 ms-3">
															<span className="fw-semibold text-dark d-block mb-1 fs-15">Joseph Rust</span>
															<p>Opened new showcase <span className="text-dark">Mannat #112233</span> with theme market</p>
															<span className="fs-12">3 Hours ago</span>
														</div>
													</a>
												</li>
												<li>
													<a href="#" className="d-flex text-decoration-none text-body">
														<div className="flex-shrink-0">
															<div className="icon">
																<img src="assets/images/user/user-2.jpg" className="rounded-circle" alt="user-2"/>
															</div>
														</div>
														<div className="flex-grow-1 ms-3">
															<span className="fw-semibold text-dark d-block mb-1 fs-15">Juhon Dew</span>
															<p>Updated the status of <span className="text-dark">Refund #1234</span> to awaiting customer response</p>
															<span className="fs-12">10 Hours ago</span>
														</div>
													</a>
												</li>
												<li>
													<a href="#" className="d-flex text-decoration-none text-body">
														<div className="flex-shrink-0">
															<div className="icon">
																<i data-feather="alert-circle"></i>
															</div>
														</div>
														<div className="flex-grow-1 ms-3">
															<span className="fw-semibold text-dark d-block mb-1 fs-15">Warning</span>
															<p>Was added to the group, group name is <span className="text-dark">Overtake</span></p>
															<span className="fs-12">14 Hours ago</span>
														</div>
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>

							<div className="row justify-content-center">
								<div className="col-lg-6">
									<div className="card rounded-3 border-0 traffic-sources-card mb-24 table-edit-area">
										<div className="card-body text-body p-25">
											<div className="card-title d-flex align-items-center justify-content-between mb-20 pb-20 border-bottom border-color cursor-move">
												<h4 className="mb-0">Traffic Sources</h4>
					
												<select className="form-select form-control" aria-label="Default select example">
													<option selected>Today</option>
													<option value="1">This Week</option>
													<option value="2">This Month</option>
													<option value="3">This Year</option>
												</select>
											</div>
					
											<div className="global-table-area">
												<div className="table-responsive overflow-auto h-452" data-simplebar>
													<table className="table align-middle table-bordered" >
														<thead className="text-dark">
															<tr>
																<th scope="col">Browser</th>
																<th scope="col">Sessions</th>
																<th scope="col">Traffic</th>
															</tr>
														</thead>
														<tbody className="text-body o-sortable">
															<tr className="cursor-move">
																<td>
																	<div className="d-flex align-items-center">
																		<img className="rounded-3 wh-32" src="assets/images/browsers/chrome.png" alt="chrome"/>
																		<span className="fw-medium fs-15 ms-3">Chrome</span>
																	</div>
																</td>
																<td className="text-dark"><i data-feather="trending-up" className="text-success up-down-style me-1"></i> 24,458</td>
																<td>
																	{/* style="height: 6px;" */}
																	<div className="progress position-relative overflow-visible rounded-1 cursor-move bg-white1"  role="progressbar" aria-label="Example with label" >
																		{/* style="width: 90%; height: 6px;" */}
																		<div className="progress-bar rounded-1 bg-primary" ></div>
																	</div>
																</td>
															</tr>
															<tr className="cursor-move">
																<td>
																	<div className="d-flex align-items-center">
																		<img className="rounded-3 wh-32" src="assets/images/browsers/firefox.png" alt="firefox"/>
																		<span className="fw-medium fs-15 ms-3">Firefox</span>
																	</div>
																</td>
																<td className="text-dark"><i data-feather="trending-down" className="text-danger up-down-style me-1"></i> 22,458</td>
																<td>
																	{/*  style="height: 6px;"  */}
																	<div className="progress position-relative overflow-visible rounded-1 cursor-move bg-white1"role="progressbar" aria-label="Example with label">
																		{/*  style="width: 80%; height: 6px;" */}
																		<div className="progress-bar rounded-1 bg-primary"></div>
																	</div>
																</td>
															</tr>
															<tr className="cursor-move">
																<td>
																	<div className="d-flex align-items-center">
																		<img className="rounded-3 wh-32" src="assets/images/browsers/google.png" alt="google"/>
																		<span className="fw-medium fs-15 ms-3">Google</span>
																	</div>
																</td>
																<td className="text-dark"><i data-feather="trending-up" className="text-success up-down-style me-1"></i> 21,125</td>
																<td>
																	{/* style="height: 6px;" */}
																	<div className="progress position-relative overflow-visible rounded-1 cursor-move bg-white1"  role="progressbar" aria-label="Example with label" >
																		{/* style="width: 70%; height: 6px;" */}
																		<div className="progress-bar rounded-1 bg-primary" ></div>
																	</div>
																</td>
															</tr>
															<tr className="cursor-move">
																<td>
																	<div className="d-flex align-items-center">
																		<img className="rounded-3 wh-32" src="assets/images/browsers/safari.png" alt="safari"/>
																		<span className="fw-medium fs-15 ms-3">Safari</span>
																	</div>
																</td>
																<td className="text-dark"><i data-feather="trending-down" className="text-danger up-down-style me-1"></i> 20,222</td>
																<td>
																{/* style="height: 6px;" */}
																	<div className="progress position-relative overflow-visible rounded-1 cursor-move bg-white1"  role="progressbar" aria-label="Example with label"  >
																	{/*  style="width: 60%; height: 6px;" */}
																		<div className="progress-bar rounded-1 bg-primary"></div>
																	</div>
																</td>
															</tr>
															<tr className="cursor-move">
																<td>
																	<div className="d-flex align-items-center">
																		<img className="rounded-3 wh-32" src="assets/images/browsers/ubuntu.png" alt="ubuntu"/>
																		<span className="fw-medium fs-15 ms-3">Ubuntu</span>
																	</div>
																</td>
																<td className="text-dark"><i data-feather="trending-up" className="text-success up-down-style me-1"></i> 19,124</td>
																<td>
																{/* style="height: 6px;" */}
																	<div className="progress position-relative overflow-visible rounded-1 cursor-move bg-white1"  role="progressbar" aria-label="Example with label">
																		{/* style="width: 50%; height: 6px;" */}
																		<div className="progress-bar rounded-1 bg-primary" ></div>
																	</div>
																</td>
															</tr>
															
														</tbody>
													</table>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-6">
									<div className="card rounded-3 border-0 visitors-countries-card mb-24 table-edit-area">
										<div className="card-body text-body p-25">
											<div className="card-title d-flex align-items-center justify-content-between mb-20 pb-20 border-bottom border-color cursor-move">
												<h4 className="mb-0">Visitors By Countries </h4>
					
												<select className="form-select form-control" aria-label="Default select example">
													<option selected>Today</option>
													<option value="1">This Week</option>
													<option value="2">This Month</option>
													<option value="3">This Year</option>
												</select>
											</div>
					
											<div className="global-table-area">
												<div className="table-responsive overflow-auto h-452" data-simplebar>
													<table className="table align-middle table-bordered" >
														<thead className="text-dark">
															<tr>
																<th scope="col">Countries</th>
																<th scope="col" className="text-end">Visitors</th>
															</tr>
														</thead>
														<tbody className="text-body o-sortable">
															<tr className="cursor-move">
																<td>
																	<div className="d-flex align-items-center">
																		<img className="rounded-3 wh-24 rounded-circle" src="assets/images/country/united-states.png" alt="united-states"/>
																		<span className="fw-medium fs-15 ms-3">United States</span>
																	</div>
																</td>
																<td className="text-dark text-end">
																	<span className="badge bg-success-transparent text-success fs-12 fw-normal">34,458</span>
																</td>
															</tr>
															
														</tbody>
													</table>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xxl-4 js-grid">
							<div className="card rounded-3 border-0 sales-by-locations-card mb-24">
								<div className="card-body text-body p-25">
									<div className="card-title d-flex align-items-center justify-content-between mb-20 pb-20 border-bottom border-color cursor-move">
										<h4 className="mb-0">Live Visitor</h4>

										<select className="form-select form-control" aria-label="Default select example">
											<option selected>Today</option>
											<option value="1">This Week</option>
											<option value="2">This Month</option>
											<option value="3">This Year</option>
										</select>
									</div>

									<div id="sales_by_locations" className="mb-15"></div>

									<ul className="country-progress ps-0 mb-0 list-unstyled o-sortable">
										<li>
											<span className="fw-medium mb-2 d-block">United Kingdom</span>
											<div className="progress position-relative overflow-visible rounded-1 cursor-move bg-white1" role="progressbar" aria-label="Example with label" >
												{/* style="width: 95%" */}
												<div className="progress-bar rounded-1 bg-primary" >
													<span className="count position-absolute fw-medium">95%</span>
												</div>
											</div>
										</li>
										<li>
											<span className="fw-medium mb-2 d-block">United States </span>
											<div className="progress position-relative overflow-visible rounded-1 cursor-move bg-white1" role="progressbar" aria-label="Example with label">
												{/* style="width: 85%" */}
												<div className="progress-bar rounded-1 bg-primary" >
													<span className="count position-absolute fw-medium">85%</span>
												</div>
											</div>
										</li>
										<li>
											<span className="fw-medium mb-2 d-block">Canada</span>
											<div className="progress position-relative overflow-visible rounded-1 cursor-move bg-white1" role="progressbar" aria-label="Example with label">
												{/* style="width: 75%" */}
												<div className="progress-bar rounded-1 bg-primary" >
													<span className="count position-absolute fw-medium">75%</span>
												</div>
											</div>
										</li>
										<li>
											<span className="fw-medium mb-2 d-block">Greenland</span>
											<div className="progress position-relative overflow-visible rounded-1 cursor-move bg-white1" role="progressbar" aria-label="Example with label" >
												{/* style="width: 65%" */}
												<div className="progress-bar rounded-1 bg-primary" >
													<span className="count position-absolute fw-medium">65%</span>
												</div>
											</div>
										</li>
										<li>
											<span className="fw-medium mb-2 d-block">Russia</span>
											<div className="progress position-relative overflow-visible rounded-1 cursor-move bg-white1" role="progressbar" aria-label="Example with label" >
												{/* style="width: 55%" */}
												<div className="progress-bar rounded-1 bg-primary" >
													<span className="count position-absolute fw-medium">55%</span>
												</div>
											</div>
										</li>
										
									</ul>
								</div>
							</div>

							<div className="card rounded-3 border-0 website-overview-card mb-24">
								<div className="card-body text-body p-25">
									<div className="card-title d-flex align-items-center justify-content-between mb-20 pb-20 border-bottom border-color cursor-move">
										<h4 className="mb-0">Weekly Website Overview</h4>

										<select className="form-select form-control" aria-label="Default select example">
											<option selected>Today</option>
											<option value="1">This Week</option>
											<option value="2">This Month</option>
											<option value="3">This Year</option>
										</select>
									</div>

									<div id="website_overview"></div>
								</div>
							</div>

							<div className="card rounded-3 border-0 device-card mb-24">
								<div className="card-body text-body p-25">
									<div className="card-title d-flex align-items-center justify-content-between mb-20 pb-20 border-bottom border-color cursor-move">
										<h4 className="mb-0">Sessions By Device </h4>

										<select className="form-select form-control" aria-label="Default select example">
											<option selected>Today</option>
											<option value="1">This Week</option>
											<option value="2">This Month</option>
											<option value="3">This Year</option>
										</select>
									</div>

									<div id="website_device"></div>

									<ul className="d-flex justify-content-between align-items-center justify-content-center text-center ps-0 mb-0 list-unstyled">
										<li className="mt-10">
											<span className="mb-2 text-primary">Mobile</span>
											<h5 className="fs-16 mb-0">60.50%</h5>
										</li>
										<li className="mt-10">
											<span className="mb-2 text-success">Tablet</span>
											<h5 className="fs-16 mb-0">15.50%</h5>
										</li>
										<li className="mt-10">
											<span className="mb-2 text-warning">Desktop</span>
											<h5 className="fs-16 mb-0">18.50%</h5>
										</li>
										<li className="mt-10">
											<span className="mb-2 text-danger">Others</span>
											<h5 className="fs-16 mb-0">5.50%</h5>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* <!--=== End Website Overview Area ===--> */}

				{/* <!--=== Start  Visitors By Channel Report  Area ===--> */}
	
				{/* <!--=== End  Visitors By Channel Report  Area ===-->  */}
			</div>

			<div className="flex-grow-1"></div>

			{/* <!--=== Start CopyRight Area ===--> */}
			
			{/* <!--=== End CopyRight Area ===--> */}
		
		
	
        </div>
		{/* <!-- End Go Top Area --> */}

      </>
    );
}

export default Master;