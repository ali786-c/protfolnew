
import Link from 'next/link'
import Marquee from 'react-fast-marquee'

export default function Home2() {
	return (
		<>

			<section id="about" className="section-hero-2 position-relative pt-130 pb-3">
				<div className="container hero-2">
					<div className="border border-1 rounded-3">
						<div className="box-linear-animation position-relative z-1">
							<div className="row align-items-end py-60">
								<div className="col-lg-5 ps-lg-5 text-lg-start text-center">
									<div className="position-relative mb-lg-0 mb-5">
										<img src="/assets/imgs/MYIMAGE.png" alt="Aliyan" className="w-100" style={{ objectFit: 'cover', clipPath: 'polygon(33% 2%, 67% 2%, 88% 28%, 88% 72%, 67% 94%, 33% 94%, 12% 72%, 12% 28%)' }} />
										<div className="position-absolute end-0 top-100 translate-middle-y icon-decorate">
											<img src="assets/imgs/home-page-2/hero-1/icon.svg" alt="zelio" />
										</div>
									</div>
								</div>
								<div className="col-lg-6 mx-lg-auto col-md-12">
									<div className="p-lg-0 p-md-8 p-3">
										<div className="text-secondary-2 d-flex align-items-center">
											&lt;span&gt;
											<div className="text-dark">
												<div className="typewriter">
													<h1 className="fs-6 fw-medium">Hey, I’m Aliyan</h1>
												</div>
											</div>
											&lt;/span&gt;
										</div>
										<h1 className="fs-50 my-3">Android Developer | <span className="text-linear-4">{'{'}Software Engineer{'}'}</span><span className="flicker">_</span></h1>
										<p className="mb-6 text-secondary-2">&lt;p&gt;<span className="text-dark">With expertise in building scalable mobile applications, integrating AI solutions, and working with</span> <span className="text-secondary-2">Kotlin</span>, <span className="text-secondary-2">Flutter</span>, <span className="text-secondary-2">Retrofit</span>, <span className="text-dark">and</span> <span className="text-secondary-2">Room DB</span><span className="text-dark">... I deliver high-quality mobile solutions.</span>&lt;/p&gt;</p>
										<div className="row">
											<div className="col-7">
												{/* Carausel Scroll */}
												<Marquee className="carouselTicker carouselTicker-left position-relative z-1 mt-lg-0 mt-8">
													<ul className="carouselTicker__list ">
														<li className="carouselTicker__item">
															<Link href="#" className="brand-logo icon_60 icon-shape rounded-3 d-flex align-items-center justify-content-center">
																<svg viewBox="0 0 24 24" width="30" height="30">
																	<defs>
																		<linearGradient id="kotlin-grad-hero" x1="0%" y1="0%" x2="100%" y2="100%">
																			<stop offset="0%" stopColor="#E44857" />
																			<stop offset="50%" stopColor="#C711E1" />
																			<stop offset="100%" stopColor="#7F52FF" />
																		</linearGradient>
																	</defs>
																	<path d="M24 24H0V0h24L12 12Z" fill="url(#kotlin-grad-hero)" />
																</svg>
															</Link>
														</li>
														<li className="carouselTicker__item">
															<Link href="#" className="brand-logo icon_60 icon-shape rounded-3 d-flex align-items-center justify-content-center">
																<svg viewBox="0 0 24 24" width="30" height="30" fill="#3DDC84">
																	<path d="M17.52 2.5a.75.75 0 0 0-1.3-.75l-1.95 3.38A9.9 9.9 0 0 0 12 5c-1.32 0-2.58.26-3.73.73L6.3 2.35a.75.75 0 1 0-1.3.75l2.03 3.51A10 10 0 0 0 2 15h20a10 10 0 0 0-5.03-8.39l2.03-3.51zM8 12a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm8 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
																</svg>
															</Link>
														</li>
														<li className="carouselTicker__item">
															<Link href="#" className="brand-logo icon_60 icon-shape rounded-3 d-flex align-items-center justify-content-center">
																<svg viewBox="0 0 24 24" width="30" height="30">
																	<path d="M14.3 0L0 14.3h4.4l9.9-9.9L23 0z" fill="#40D0FD" />
																	<path d="M14.3 14.3l-4.4 4.4 4.4 4.4 8.8-8.8H18.7z" fill="#02569B" />
																	<path d="M9.9 18.7l-4.4-4.4 4.4-4.4 4.4 4.4z" fill="#0175C2" />
																</svg>
															</Link>
														</li>
														<li className="carouselTicker__item">
															<Link href="#" className="brand-logo icon_60 icon-shape rounded-3 d-flex align-items-center justify-content-center">
																<svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="#3DDC84" strokeWidth="2">
																	<ellipse cx="12" cy="5" rx="8" ry="2.5" />
																	<path d="M4 5v5c0 1.38 3.58 2.5 8 2.5s8-1.12 8-2.5V5" />
																	<path d="M4 10v5c0 1.38 3.58 2.5 8 2.5s8-1.12 8-2.5v-5" />
																	<path d="M9 19v-4h6v4" strokeLinecap="round" />
																</svg>
															</Link>
														</li>
														<li className="carouselTicker__item">
															<Link href="#" className="brand-logo icon_60 icon-shape rounded-3 d-flex align-items-center justify-content-center">
																<svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="#A8FF53" strokeWidth="2">
																	<path d="M12 2v6M9 8h6M10 13v7a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2v-7M7 13h10v-3a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2z" />
																</svg>
															</Link>
														</li>
													</ul>
												</Marquee>
											</div>
											<div className="col-5 d-flex align-items-end">
												<span className="fs-6 text-300 mb-2">...and more</span>
											</div>
										</div>
										<Link href="/assets/resume.pdf" className="btn me-2 text-300 ps-0 mt-4" target="_blank">
											<i className="ri-download-line text-primary-2" />
											[ Download my CV ]
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="background position-absolute top-0 start-0 w-100 h-100">
					<img className="bg-w" src="assets/imgs/home-page-2/hero-1/bg.png" alt="zelio" />
					<img className="bg-d" src="assets/imgs/home-page-2/hero-1/bg-dark.png" alt="zelio" />
				</div>
			</section>

		</>
	)
}
