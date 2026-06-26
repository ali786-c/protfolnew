import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function WorkSingle() {
	return (
		<>
			<Layout headerStyle={2} footerStyle={2}>
				<div>
					<section className="section-work-single section-padding">
						<div className="container">
							<div className="row">
								<div className="col-lg-8 mx-lg-auto mb-lg-0">
									<div className="text-center">
										<Link href="/#" className="btn btn-gradient d-inline-block text-uppercase">
											work details
										</Link>
										<h3 className="ds-3 mt-3 mb-4 text-dark">
											AI Keyboard Application - Intelligent Input Engine
										</h3>
										<p className="text-300 fs-5 mb-0">
											Engineered a mobile keyboard solution featuring deep integration with the Gemini AI engine. Developed intelligent predictive text capabilities and automated assistance for user responses.
										</p>
									</div>
								</div>
								<div className="d-flex flex-wrap justify-content-center gap-4 py-8">
									<div className="bg-6 px-5 py-3 rounded-2">
										<p className="text-300 mb-0">Client</p>
										<h6>Fiverr Freelance / Personal</h6>
									</div>
									<div className="bg-6 px-5 py-3 rounded-2">
										<p className="text-300 mb-0">Duration</p>
										<h6>1 Month</h6>
									</div>
									<div className="bg-6 px-5 py-3 rounded-2">
										<p className="text-300 mb-0">Services</p>
										<h6>Android Native & AI Integration</h6>
									</div>
									<div className="bg-6 px-5 py-3 rounded-2">
										<p className="text-300 mb-0">Repository</p>
										<h6>github.com/ali786-c/keyboardapp</h6>
									</div>
								</div>
								<img src="/assets/imgs/work/img-1.png" alt="AI Keyboard App Background" className="rounded-3 w-100" />
								<div className="col-lg-8 mx-lg-auto mt-8">
									<h5 className="fs-5 fw-medium">Description</h5>
									<p className="text-300">
										The AI Keyboard Application is a high-performance native Android keyboard built using Kotlin and Jetpack components. Its key differentiator is the deep, low-latency integration with the Google Gemini AI engine directly into the input method editor (IME) lifecycle. This enables real-time response generation, smart grammatical corrections, tone styling, and contextual suggestions directly as the user types in any application.
									</p>
									<h5 className="fs-5 fw-medium mt-4">Key Features</h5>
									<ul>
										<li>
											<p className="text-dark fw-bold">Gemini AI Integration: <span className="text-300 fw-medium">Integrates seamlessly with the Gemini API to offer real-time rewrite assistance, response automation, and smart compose features.</span></p>
										</li>
										<li>
											<p className="text-dark fw-bold">Intelligent Predictive Text: <span className="text-300 fw-medium">Leverages machine learning models to provide highly context-aware word predictions and layout optimizations.</span></p>
										</li>
										<li>
											<p className="text-dark fw-bold">IME Lifecycle Performance: <span className="text-300 fw-medium">Optimized to run within Android's InputMethodService constraints, ensuring zero typing latency and minimal memory footprint.</span></p>
										</li>
										<li>
											<p className="text-dark fw-bold">Material Design UI/UX: <span className="text-300 fw-medium">Styled with a clean Material Design layout, custom themes, and keypress animations for a premium user experience.</span></p>
										</li>
									</ul>
									<h5 className="fs-5 fw-medium mt-4">Technologies Used</h5>
									<ul>
										<li>
											<p className="text-dark fw-bold">Native Android Development: <span className="text-300 fw-medium">Built using Kotlin and the Android SDK, leveraging InputMethodService for the core keyboard engine.</span></p>
										</li>
										<li>
											<p className="text-dark fw-bold">AI &amp; Network Clients: <span className="text-300 fw-medium">Gemini AI API integration utilizing clean HTTP request wrappers and asynchronous execution flow.</span></p>
										</li>
										<li>
											<p className="text-dark fw-bold">Architecture: <span className="text-300 fw-medium">Developed with MVVM design pattern, LiveData, and ViewBinding for structured and robust state management.</span></p>
										</li>
										<li>
											<p className="text-dark fw-bold">Local Storage: <span className="text-300 fw-medium">SQLite and Shared Preferences for persisting user preferences, dictionary cache, and keyboard layouts.</span></p>
										</li>
									</ul>
									<h5 className="fs-5 fw-medium mt-4">Design Highlights</h5>
									<ul>
										<li>
											<p className="text-dark fw-bold">User-Centric Typing: <span className="text-300 fw-medium">Features an optimized key layout with dynamic padding and responsive tap targets to reduce typing errors.</span></p>
										</li>
										<li>
											<p className="text-dark fw-bold">Tactile Micro-Animations: <span className="text-300 fw-medium">Added subtle visual feedback on keypress events to provide a high-end, tactile typing experience.</span></p>
										</li>
										<li>
											<p className="text-dark fw-bold">Dark &amp; Light Themes: <span className="text-300 fw-medium">Fully supports native system theme detection for seamless styling matching the user's OS settings.</span></p>
										</li>
									</ul>
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
											<h3>Leave a message</h3>
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