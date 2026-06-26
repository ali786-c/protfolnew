import Link from 'next/link'


export default function Experience2() {
	return (
		<>

			<section id="portfolio" className="section-experience pt-5">
				<div className="container">
					<div className="rounded-3 border border-1 position-relative overflow-hidden">
						<div className="box-linear-animation position-relative z-1">
							<div className="p-lg-8 p-md-6 p-3 position-relative z-1">
								<div className="d-flex align-items-center">
									<svg className="text-primary-2 me-2" xmlns="http://www.w3.org/2000/svg" width={5} height={6} viewBox="0 0 5 6" fill="none">
										<circle cx="2.5" cy={3} r="2.5" fill="#A8FF53" />
									</svg>
									<span className="text-linear-4 d-flex align-items-center"> Experience </span>
								</div>
								<h3>
									+1
									<span className="text-300">years of </span>
									passion
									<span className="text-300">
										for <br />
										mobile development
									</span>
								</h3>
								<div className="row mt-5">
									<div className="col-lg-4">
										<div className="d-flex flex-column gap-2">
											<Link href="#" className="technology border border-1 rounded-3 p-3">
												<div className="d-flex align-items-center gap-2">
													<div className="d-flex align-items-center justify-content-center bg-6 rounded-circle" style={{ width: '40px', height: '40px' }}>
														<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#1dbf73" strokeWidth="2">
															<rect x="2" y="7" width="20" height="14" rx="2" />
															<path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
														</svg>
													</div>
													<div className="d-flex flex-column ms-2">
														<h5 className="mb-1">Fiverr (Freelance)</h5>
														<span className="text-300">May 2025 - Present</span>
													</div>
												</div>
											</Link>
											<Link href="#" className="technology border border-1 rounded-3 p-3">
												<div className="d-flex align-items-center gap-2">
													<div className="d-flex align-items-center justify-content-center bg-6 rounded-circle" style={{ width: '40px', height: '40px' }}>
														<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#3DDC84" strokeWidth="2">
															<polyline points="16 18 22 12 16 6" />
															<polyline points="8 6 2 12 8 18" />
															<line x1="14" y1="4" x2="10" y2="20" />
														</svg>
													</div>
													<div className="d-flex flex-column ms-2">
														<h5 className="mb-1">Personal Projects</h5>
														<span className="text-300">June 2025 - Present</span>
													</div>
												</div>
											</Link>
										</div>
									</div>
									<div className="col-lg-8 ps-lg-5 mt-5 mt-lg-0">
										<h6 className="text-linear-4">Android Developer &amp; Freelancer</h6>
										<ul className="mt-4">
											<li className="text-dark mb-3">Achieved <span className="text-secondary-2">Level One Seller</span> status on Fiverr with 13+ successful projects completed.</li>
											<li className="text-dark mb-3">Maintained a high client satisfaction rate of <span className="text-secondary-2">4.9/5.0</span> by consistently delivering bug-free applications.</li>
											<li className="text-dark mb-3">Collaborated with international clients to translate business requirements into responsive mobile solutions.</li>
											<li className="text-dark mb-3">Engineered native Android apps with offline caching, local databases, and <span className="text-secondary-2">Gemini AI integration</span>.</li>
										</ul>
										<div className="d-flex flex-wrap align-items-center gap-3 mt-7">
											<Link href="#" className="text-300 border border-1 px-3 py-1">Kotlin</Link>
											<Link href="#" className="text-300 border border-1 px-3 py-1">Android SDK</Link>
											<Link href="#" className="text-300 border border-1 px-3 py-1">Flutter</Link>
											<Link href="#" className="text-300 border border-1 px-3 py-1">Room DB</Link>
											<Link href="#" className="text-300 border border-1 px-3 py-1">MVVM</Link>
											<Link href="#" className="text-300 border border-1 px-3 py-1">Gemini AI</Link>
										</div>
									</div>
								</div>
							</div>
							<img className="position-absolute top-0 start-0 z-0" src="assets/imgs/home-page-2/services/bg.png" alt="zelio" />
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
