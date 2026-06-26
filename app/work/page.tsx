
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Work() {

	return (
		<>

			<Layout headerStyle={2} footerStyle={2}>
				<div>
					<section className="section-work pt-120 pb-150">
						<div className="container">
							<div className="row">
								<div className="col-lg-8 mx-lg-auto">
									<div className="text-center">
										<Link href="/#" className="btn btn-gradient d-inline-block text-uppercase"> recent Work </Link>
										<h3 className="ds-3 mt-3 mb-4 text-dark">Explore <span className="text-300">My Latest Work and Discover the</span> Craftsmanship Behind <span className="text-300">Each Design</span></h3>
										<p className="text-300 fs-5">
											Explore my latest work and discover the craftsmanship behind each design: <br />
											a detailed look into how I bring innovation and creativity to life
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="container">
							<div className="row">
								<div className="card-scroll mt-8">
									<div className="cards">
										{/* prettier-ignore */}
										<div className="card-custom" data-index={0}>
											<div className="card__inner bg-6 p-lg-6 p-md-4 p-3">
												<div className="card__image-container zoom-img position-relative">
													<img className="card__image" src="/assets/imgs/work/img-1.png" alt="" />
													<Link href="https://github.com/ali786-c/keyboardapp" target="_blank" className="card-image-overlay position-absolute start-0 end-0 w-100 h-100" />
												</div>
												<div className="card__content px-md-4 px-3">
													<div className="card__title d-md-flex align-items-center mb-0 mb-lg-2">
														<Link href="https://github.com/ali786-c/keyboardapp" target="_blank" className="card_title_link">
															<p className="text-primary-1 mb-0 mb-md-2">AI INTEGRATION</p>
															<h3 className="fw-semibold">AI Keyboard Application</h3>
														</Link>
														<Link href="https://github.com/ali786-c/keyboardapp" target="_blank" className="card-icon d-none d-md-inline-flex border text-dark border-dark icon-shape ms-auto icon-md rounded-circle">
															<i className="ri-arrow-right-up-line" />
														</Link>
													</div>
													<p className="text-300 mb-lg-auto mb-md-4 mb-3">Engineered a mobile keyboard solution featuring deep integration with the Gemini AI engine. Developed intelligent predictive text capabilities and automated assistance for user responses. Built a streamlined user interface that supports real-time artificial intelligence interactions.</p>
													<div className="d-md-flex content">
														<p className="mb-0 fs-7 text-dark text-uppercase w-40">
															Client
														</p>
														<p className="mb-0 card__description text-300 fs-6 mb-0">
															Fiverr Freelance / Personal
														</p>
													</div>
													<div className="d-md-flex content">
														<p className="mb-0 fs-7 text-dark text-uppercase w-40">
															Completion Time
														</p>
														<p className="mb-0 card__description text-300 fs-6 mb-0">
															1 month
														</p>
													</div>
													<div className="d-md-flex content">
														<p className="mb-0 fs-7 text-dark text-uppercase w-40">
															Tools & Tech
														</p>
														<p className="mb-0 card__description text-300 fs-6 mb-0">
															Kotlin, Android SDK, Gemini AI API, MVVM
														</p>
													</div>
												</div>
											</div>
										</div>
										<div className="card-custom" data-index={1}>
											<div className="card__inner bg-6 p-lg-6 p-md-4 p-3">
												<div className="card__image-container zoom-img position-relative">
													<img className="card__image" src="/assets/imgs/work/img-2.png" alt="" />
													<Link href="https://github.com/ali786-c/WeatherApp" target="_blank" className="card-image-overlay position-absolute start-0 end-0 w-100 h-100" />
												</div>
												<div className="card__content px-md-4 px-3">
													<div className="card__title d-md-flex align-items-center mb-0 mb-lg-2">
														<Link href="https://github.com/ali786-c/WeatherApp" target="_blank" className="card_title_link">
															<p className="text-primary-1 mb-0 mb-md-2">REST API & RETROFIT</p>
															<h3 className="fw-semibold">Weather Forecasting App</h3>
														</Link>
														<Link href="https://github.com/ali786-c/WeatherApp" target="_blank" className="card-icon d-none d-md-inline-flex border text-dark border-dark icon-shape ms-auto icon-md rounded-circle">
															<i className="ri-arrow-right-up-line" />
														</Link>
													</div>
													<p className="text-300 mb-lg-auto mb-md-4 mb-3">Created a software application providing users with instantaneous local weather data updates. Managed external data fetching by integrating RESTful APIs through the Retrofit library. Designed displays for essential metrics like temperature, atmospheric humidity, and sky conditions.</p>
													<div className="d-md-flex content">
														<p className="mb-0 fs-7 text-dark text-uppercase w-40">
															Client
														</p>
														<p className="mb-0 card__description text-300 fs-6 mb-0">
															Fiverr Freelance / Personal
														</p>
													</div>
													<div className="d-md-flex content">
														<p className="mb-0 fs-7 text-dark text-uppercase w-40">
															Completion Time
														</p>
														<p className="mb-0 card__description text-300 fs-6 mb-0">
															1 month
														</p>
													</div>
													<div className="d-md-flex content">
														<p className="mb-0 fs-7 text-dark text-uppercase w-40">
															Tools & Tech
														</p>
														<p className="mb-0 card__description text-300 fs-6 mb-0">
															Kotlin, Android SDK, Retrofit, REST APIs, MVVM
														</p>
													</div>
												</div>
											</div>
										</div>
										<div className="card-custom" data-index={2}>
											<div className="card__inner bg-6 p-lg-6 p-md-4 p-3">
												<div className="card__image-container zoom-img position-relative">
													<img className="card__image" src="/assets/imgs/work/img-3.png" alt="" />
													<Link href="https://github.com/ali786-c" target="_blank" className="card-image-overlay position-absolute start-0 end-0 w-100 h-100" />
												</div>
												<div className="card__content px-md-4 px-3">
													<div className="card__title d-md-flex align-items-center mb-0 mb-lg-2">
														<Link href="https://github.com/ali786-c" target="_blank" className="card_title_link">
															<p className="text-primary-1 mb-0 mb-md-2">SQLITE & ROOM DATABASE</p>
															<h3 className="fw-semibold">Birthday Greetings Manager</h3>
														</Link>
														<Link href="https://github.com/ali786-c" target="_blank" className="card-icon d-none d-md-inline-flex border text-dark border-dark icon-shape ms-auto icon-md rounded-circle">
															<i className="ri-arrow-right-up-line" />
														</Link>
													</div>
													<p className="text-300 mb-lg-auto mb-md-4 mb-3">Produced a notification-based tool for tracking birthdays utilizing persistent local storage. Implemented efficient data management using the Room Database framework for Android. Optimized the management of personal records and integrated automated reminder systems.</p>
													<div className="d-md-flex content">
														<p className="mb-0 fs-7 text-dark text-uppercase w-40">
															Client
														</p>
														<p className="mb-0 card__description text-300 fs-6 mb-0">
															Personal Project
														</p>
													</div>
													<div className="d-md-flex content">
														<p className="mb-0 fs-7 text-dark text-uppercase w-40">
															Completion Time
														</p>
														<p className="mb-0 card__description text-300 fs-6 mb-0">
															2 weeks
														</p>
													</div>
													<div className="d-md-flex content">
														<p className="mb-0 fs-7 text-dark text-uppercase w-40">
															Tools & Tech
														</p>
														<p className="mb-0 card__description text-300 fs-6 mb-0">
															Kotlin, Android SDK, Room Database, SQLite
														</p>
													</div>
												</div>
											</div>
										</div>
										<div className="card-custom" data-index={3}>
											<div className="card__inner bg-6 p-lg-6 p-md-4 p-3">
												<div className="card__image-container zoom-img position-relative">
													<img className="card__image" src="/assets/imgs/work/img-4.png" alt="" />
													<Link href="https://github.com/ali786-c" target="_blank" className="card-image-overlay position-absolute start-0 end-0 w-100 h-100" />
												</div>
												<div className="card__content px-md-4 px-3">
													<div className="card__title d-md-flex align-items-center mb-0 mb-lg-2">
														<Link href="https://github.com/ali786-c" target="_blank" className="card_title_link">
															<p className="text-primary-1 mb-0 mb-md-2">REST API & MVVM</p>
															<h3 className="fw-semibold">Restaurant Discovery Portal</h3>
														</Link>
														<Link href="https://github.com/ali786-c" target="_blank" className="card-icon d-none d-md-inline-flex border text-dark border-dark icon-shape ms-auto icon-md rounded-circle">
															<i className="ri-arrow-right-up-line" />
														</Link>
													</div>
													<p className="text-300 mb-lg-auto mb-md-4 mb-3">Architected a comprehensive restaurant discovery platform using MVVM architecture and Retrofit for network calls. Implemented efficient JSON parsing and optimized UI/UX for seamless browsing and venue detail exploration.</p>
													<div className="d-md-flex content">
														<p className="mb-0 fs-7 text-dark text-uppercase w-40">
															Client
														</p>
														<p className="mb-0 card__description text-300 fs-6 mb-0">
															Personal Project
														</p>
													</div>
													<div className="d-md-flex content">
														<p className="mb-0 fs-7 text-dark text-uppercase w-40">
															Completion Time
														</p>
														<p className="mb-0 card__description text-300 fs-6 mb-0">
															3 weeks
														</p>
													</div>
													<div className="d-md-flex content">
														<p className="mb-0 fs-7 text-dark text-uppercase w-40">
															Tools & Tech
														</p>
														<p className="mb-0 card__description text-300 fs-6 mb-0">
															Kotlin, MVVM, Retrofit, JSON, Responsive UI
														</p>
													</div>
												</div>
											</div>
										</div>
										<div className="card-custom" data-index={4}>
											<div className="card__inner bg-6 p-lg-6 p-md-4 p-3">
												<div className="card__image-container zoom-img position-relative">
													<img className="card__image" src="/assets/imgs/work/img-5.png" alt="" />
													<Link href="https://github.com/ali786-c" target="_blank" className="card-image-overlay position-absolute start-0 end-0 w-100 h-100" />
												</div>
												<div className="card__content px-md-4 px-3">
													<div className="card__title d-md-flex align-items-center mb-0 mb-lg-2">
														<Link href="https://github.com/ali786-c" target="_blank" className="card_title_link">
															<p className="text-primary-1 mb-0 mb-md-2">LOCAL PERSISTENCE & LOGIC</p>
															<h3 className="fw-semibold">Academic GPA Tool</h3>
														</Link>
														<Link href="https://github.com/ali786-c" target="_blank" className="card-icon d-none d-md-inline-flex border text-dark border-dark icon-shape ms-auto icon-md rounded-circle">
															<i className="ri-arrow-right-up-line" />
														</Link>
													</div>
													<p className="text-300 mb-lg-auto mb-md-4 mb-3">Developed a high-precision academic utility using Room Database for local data persistence. Engineered complex logic to calculate weighted GPA averages, ensuring data integrity and user-friendly reporting.</p>
													<div className="d-md-flex content">
														<p className="mb-0 fs-7 text-dark text-uppercase w-40">
															Client
														</p>
														<p className="mb-0 card__description text-300 fs-6 mb-0">
															Academic Utility
														</p>
													</div>
													<div className="d-md-flex content">
														<p className="mb-0 fs-7 text-dark text-uppercase w-40">
															Completion Time
														</p>
														<p className="mb-0 card__description text-300 fs-6 mb-0">
															2 weeks
														</p>
													</div>
													<div className="d-md-flex content">
														<p className="mb-0 fs-7 text-dark text-uppercase w-40">
															Tools & Tech
														</p>
														<p className="mb-0 card__description text-300 fs-6 mb-0">
															Kotlin, Room Database, State Management, Responsive UI
														</p>
													</div>
												</div>
											</div>
										</div>
										<div className="card-custom" data-index={5}>
											<div className="card__inner bg-6 p-lg-6 p-md-4 p-3">
												<div className="card__image-container zoom-img position-relative">
													<img className="card__image" src="/assets/imgs/work/img-1.png" alt="" />
													<Link href="https://github.com/ali786-c" target="_blank" className="card-image-overlay position-absolute start-0 end-0 w-100 h-100" />
												</div>
												<div className="card__content px-md-4 px-3">
													<div className="card__title d-md-flex align-items-center mb-0 mb-lg-2">
														<Link href="https://github.com/ali786-c" target="_blank" className="card_title_link">
															<p className="text-primary-1 mb-0 mb-md-2">STATE MANAGEMENT</p>
															<h3 className="fw-semibold">Health BMI Tracker</h3>
														</Link>
														<Link href="https://github.com/ali786-c" target="_blank" className="card-icon d-none d-md-inline-flex border text-dark border-dark icon-shape ms-auto icon-md rounded-circle">
															<i className="ri-arrow-right-up-line" />
														</Link>
													</div>
													<p className="text-300 mb-lg-auto mb-md-4 mb-3">Created a health-focused application using Kotlin and persistent local storage. Implemented automated BMI calculation logic with categorization algorithms and custom UI inputs for a streamlined health-tracking experience.</p>
													<div className="d-md-flex content">
														<p className="mb-0 fs-7 text-dark text-uppercase w-40">
															Client
														</p>
														<p className="mb-0 card__description text-300 fs-6 mb-0">
															Personal Project
														</p>
													</div>
													<div className="d-md-flex content">
														<p className="mb-0 fs-7 text-dark text-uppercase w-40">
															Completion Time
														</p>
														<p className="mb-0 card__description text-300 fs-6 mb-0">
															1 week
														</p>
													</div>
													<div className="d-md-flex content">
														<p className="mb-0 fs-7 text-dark text-uppercase w-40">
															Tools & Tech
														</p>
														<p className="mb-0 card__description text-300 fs-6 mb-0">
															Kotlin, Local Storage, State Management, Responsive UI
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					{/*Static 1*/}
					<div className="section-static-1 position-relative overflow-hidden z-0 py-8 bg-6">
						<div className="container">
							<div className="inner">
								<div className="row align-items-center justify-content-between">
									<div className="col-lg-auto col-md-6">
										<div className="counter-item-cover counter-item">
											<div className="content text-center mx-auto d-flex align-items-center">
												<span className="ds-3 count text-primary-1 fw-medium my-0">+<span className="odometer ds-1 text-dark fw-semibold">1</span></span>
												<div className="text-start ms-2">
													<p className="fs-5 mb-0 text-300">Year of</p>
													<p className="fs-5 mb-0 fw-bold">Experience</p>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-auto col-md-6">
										<div className="counter-item-cover counter-item">
											<div className="content text-center mx-auto d-flex align-items-center">
												<span className="ds-3 count text-primary-1 fw-medium my-0">+<span className="odometer ds-1 text-dark fw-semibold">20</span></span>
												<div className="text-start ms-2">
													<p className="fs-5 mb-0 text-300">Projects</p>
													<p className="fs-5 mb-0 fw-bold">Completed</p>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-auto col-md-6">
										<div className="counter-item-cover counter-item">
											<div className="content text-center mx-auto d-flex align-items-center">
												<span className="ds-3 count text-primary-1 fw-medium my-0">+<span className="odometer ds-1 text-dark fw-semibold">15</span></span>
												<div className="text-start ms-2">
													<p className="fs-5 mb-0 text-300">Satisfied</p>
													<p className="fs-5 mb-0 fw-bold">Happy Clients</p>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-auto col-md-6">
										<div className="counter-item-cover counter-item">
											<div className="content text-center mx-auto d-flex align-items-center">
												<span className="ds-3 count text-primary-1 fw-medium my-0"><span className="ds-1 text-dark fw-semibold">Level 1</span></span>
												<div className="text-start ms-2">
													<p className="fs-5 mb-0 text-300">Fiverr</p>
													<p className="fs-5 mb-0 fw-bold">Seller</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* Contact 1*/}
					<section id="contact" className="section-contact-1 bg-900 position-relative pt-150 pb-lg-250 pb-150 overflow-hidden">
						<div className="container position-relative z-1">
							<h3 className="ds-3 mt-3 mb-3 text-primary-1">Get in touch</h3>
							<span className="fs-5 fw-medium text-200">
								I'm always excited to take on new projects and collaborate with innovative minds. If you
								<br />
								have a project in mind or just want to chat about design, feel free to reach out!
							</span>
							<div className="row mt-8">
								<div className="col-lg-4 d-flex flex-column">
									<div className="d-flex align-items-center mb-4 position-relative d-inline-flex">
										<div className="bg-white icon-flip position-relative icon-shape icon-xxl border-linear-2 border-2 rounded-4">
											<i className="ri-phone-fill text-primary-1 fs-26" />
										</div>
										<div className="ps-3">
											<span className="text-400 fs-5">Phone Number</span>
											<h6 className="mb-0">+923412202875</h6>
										</div>
										<Link href="tel:+923412202875" className="position-absolute top-0 start-0 w-100 h-100" />
									</div>
									<div className="d-flex align-items-center mb-4 position-relative d-inline-flex">
										<div className="bg-white icon-flip position-relative icon-shape icon-xxl border-linear-2 border-2 rounded-4">
											<i className="ri-mail-fill text-primary-1 fs-26" />
										</div>
										<div className="ps-3">
											<span className="text-400 fs-5">Email</span>
											<h6 className="mb-0">aliyantarar4@gmail.com</h6>
										</div>
										<Link href="mailto:aliyantarar4@gmail.com" className="position-absolute top-0 start-0 w-100 h-100" />
									</div>
									<div className="d-flex align-items-center mb-4 position-relative d-inline-flex">
										<div className="bg-white icon-flip position-relative icon-shape icon-xxl border-linear-2 border-2 rounded-4">
											<i className="ri-github-fill text-primary-1 fs-26" />
										</div>
										<div className="ps-3">
											<span className="text-400 fs-5">GitHub</span>
											<h6 className="mb-0">github.com/ali786-c</h6>
										</div>
										<Link href="https://github.com/ali786-c" target="_blank" className="position-absolute top-0 start-0 w-100 h-100" />
									</div>
									<div className="d-flex align-items-center mb-4 position-relative d-inline-flex">
										<div className="bg-white icon-flip position-relative icon-shape icon-xxl border-linear-2 border-2 rounded-4">
											<i className="ri-map-2-fill text-primary-1 fs-26" />
										</div>
										<div className="ps-3">
											<span className="text-400 fs-5">Address</span>
											<h6 className="mb-0">Sargodha, Pakistan</h6>
										</div>
										<Link href="https://maps.google.com/maps?q=Sargodha,Pakistan" target="_blank" className="position-absolute top-0 start-0 w-100 h-100" />
									</div>
								</div>
								<div className="col-lg-7 offset-lg-1 ps-lg-0 pt-5 pt-lg-0">
									<div className="position-relative">
										<div className="position-relative z-2">
											<h3>Leave a messge</h3>
											<form action="#">
												<div className="row mt-3">
													<div className="col-md-6 ">
														<label className="mb-1 mt-3 text-dark" htmlFor="name">Your name <span className="text-primary-1">*</span></label>
														<input type="text" className="form-control border rounded-3" id="name" name="name" placeholder="John Doe" aria-label="username" />
													</div>
													<div className="col-md-6">
														<label className="mb-1 mt-3 text-dark" htmlFor="email">Email address <span className="text-primary-1">*</span></label>
														<input type="text" className="form-control border rounded-3" id="email" name="email" placeholder="contact.john@gmail.com" aria-label="email" />
													</div>
													<div className="col-md-6">
														<label className="mb-1 mt-3 text-dark" htmlFor="phone">Your phone <span className="text-primary-1">*</span></label>
														<input type="text" className="form-control border rounded-3" id="phone" name="phone" placeholder="+01 234 567 89" aria-label="phone" />
													</div>
													<div className="col-md-6">
														<label className="mb-1 mt-3 text-dark" htmlFor="subject">Subject <span className="text-primary-1">*</span></label>
														<input type="text" className="form-control border rounded-3" id="subject" name="subject" placeholder="I want to contact for...." aria-label="subject" />
													</div>
													<div className="col-12">
														<label className="mb-1 mt-3 text-dark" htmlFor="message">Message <span className="text-primary-1">*</span></label>
														<textarea className="form-control border rounded-3 pb-10" id="message" name="message" placeholder="Your message here...." aria-label="With textarea" />
													</div>
													<div className="col-12">
														<button type="submit" className="btn btn-gradient mt-3">
															Send Message
															<i className="ri-arrow-right-up-line" />
														</button>
													</div>
												</div>
											</form>
										</div>
										<div className="z-0 bg-primary-dark rectangle-bg z-1 rounded-3" />
									</div>
								</div>
							</div>
						</div>
						<div className="scroll-move-right position-absolute bottom-0 start-50 translate-middle-x bg-900 overflow-hidden">
							<div className="wow img-custom-anim-top">
								<h3 className="stroke fs-280 text-lowercase text-900 mb-0 lh-1">aliyan.dev</h3>
							</div>
						</div>
					</section>
				</div>

			</Layout>
		</>
	)
}