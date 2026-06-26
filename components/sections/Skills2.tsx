import Link from 'next/link'
import Marquee from 'react-fast-marquee'

export default function Skills2() {
	return (
		<>
			<section id="skills" className="section-skills-2 pt-5">
				<div className="container">
					<div className="rounded-3 bg-3 border border-1 position-relative overflow-hidden">
						<div className="position-relative z-1 py-60">
							<div className="position-relative z-1">
								<div className="text-center">
									<div className="d-flex align-items-center justify-content-center">
										<svg className="text-primary-2 me-2" xmlns="http://www.w3.org/2000/svg" width={5} height={6} viewBox="0 0 5 6" fill="none">
											<circle cx="2.5" cy={3} r="2.5" fill="#A8FF53" />
										</svg>
										<span className="text-linear-4 d-flex align-items-center"> Skills </span>
									</div>
									<h3>My Skills</h3>
								</div>
								<div className="container mt-8">
									<div className="row">
										<div className="col-lg-6">
											<div className="row">
												<div className="col-lg-10 col-md-9 mx-auto overflow-hidden">
													{/* Carausel Scroll */}
													<Marquee className="carouselTicker carouselTicker-right position-relative z-1" direction="right">
														<ul className="carouselTicker__list m-0">
															<li className="carouselTicker__item mt-6">
																<Link href="#" className="brand-logo icon_80 icon-shape rounded-3 d-flex align-items-center justify-content-center">
																	<svg viewBox="0 0 24 24" width="40" height="40">
																		<defs>
																			<linearGradient id="kotlin-grad-skills" x1="0%" y1="0%" x2="100%" y2="100%">
																				<stop offset="0%" stopColor="#E44857" />
																				<stop offset="50%" stopColor="#C711E1" />
																				<stop offset="100%" stopColor="#7F52FF" />
																			</linearGradient>
																		</defs>
																		<path d="M24 24H0V0h24L12 12Z" fill="url(#kotlin-grad-skills)" />
																	</svg>
																</Link>
																<span className="tool-tip">Kotlin</span>
															</li>
															<li className="carouselTicker__item mt-6">
																<Link href="#" className="brand-logo icon_80 icon-shape rounded-3 d-flex align-items-center justify-content-center">
																	<svg viewBox="0 0 24 24" width="40" height="40" fill="#3DDC84">
																		<path d="M17.52 2.5a.75.75 0 0 0-1.3-.75l-1.95 3.38A9.9 9.9 0 0 0 12 5c-1.32 0-2.58.26-3.73.73L6.3 2.35a.75.75 0 1 0-1.3.75l2.03 3.51A10 10 0 0 0 2 15h20a10 10 0 0 0-5.03-8.39l2.03-3.51zM8 12a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm8 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
																	</svg>
																</Link>
																<span className="tool-tip">Android SDK</span>
															</li>
															<li className="carouselTicker__item mt-6">
																<Link href="#" className="brand-logo icon_80 icon-shape rounded-3 d-flex align-items-center justify-content-center">
																	<svg viewBox="0 0 24 24" width="40" height="40">
																		<path d="M14.3 0L0 14.3h4.4l9.9-9.9L23 0z" fill="#40D0FD" />
																		<path d="M14.3 14.3l-4.4 4.4 4.4 4.4 8.8-8.8H18.7z" fill="#02569B" />
																		<path d="M9.9 18.7l-4.4-4.4 4.4-4.4 4.4 4.4z" fill="#0175C2" />
																	</svg>
																</Link>
																<span className="tool-tip">Flutter</span>
															</li>
															<li className="carouselTicker__item mt-6">
																<Link href="#" className="brand-logo icon_80 icon-shape rounded-3 d-flex align-items-center justify-content-center">
																	<svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="#3DDC84" strokeWidth="2">
																		<ellipse cx="12" cy="5" rx="8" ry="2.5" />
																		<path d="M4 5v5c0 1.38 3.58 2.5 8 2.5s8-1.12 8-2.5V5" />
																		<path d="M4 10v5c0 1.38 3.58 2.5 8 2.5s8-1.12 8-2.5v-5" />
																		<path d="M9 19v-4h6v4" strokeLinecap="round" />
																	</svg>
																</Link>
																<span className="tool-tip">Room DB</span>
															</li>
															<li className="carouselTicker__item mt-6">
																<Link href="#" className="brand-logo icon_80 icon-shape rounded-3 d-flex align-items-center justify-content-center">
																	<svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="#A8FF53" strokeWidth="2">
																		<path d="M12 2v6M9 8h6M10 13v7a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2v-7M7 13h10v-3a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2z" />
																	</svg>
																</Link>
																<span className="tool-tip">Retrofit</span>
															</li>
														</ul>
													</Marquee>
												</div>
												<div className="col-lg-8 col-md-7 col-10 mx-auto overflow-hidden">
													{/* Carausel Scroll */}
													<Marquee className="carouselTicker carouselTicker-left position-relative z-1">
														<ul className="carouselTicker__list m-0 ">
															<li className="carouselTicker__item mt-6">
																<Link href="#" className="brand-logo icon_80 icon-shape rounded-3 d-flex align-items-center justify-content-center">
																	<svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="#607B96" strokeWidth="2">
																		<ellipse cx="12" cy="5" rx="9" ry="3" />
																		<path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5" />
																		<path d="M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6" />
																	</svg>
																</Link>
																<span className="tool-tip">SQLite</span>
															</li>
															<li className="carouselTicker__item mt-6">
																<Link href="#" className="brand-logo icon_80 icon-shape rounded-3 d-flex align-items-center justify-content-center">
																	<svg viewBox="0 0 24 24" width="40" height="40" fill="#F05032">
																		<path d="M23.3 10.9L13.1.7C12.7.3 12 .3 11.6.7L8.7 3.6l3.3 3.3c.7-.2 1.5 0 2 .5.5.5.7 1.3.5 2l3.3 3.3c.7-.2 1.5 0 2 .5.7.7.7 1.8 0 2.5s-1.8.7-2.5 0c-.5-.5-.7-1.3-.5-2l-3.3-3.3c-.2.1-.5.2-.7.2-.2 0-.5-.1-.7-.2l-2.3 2.3c.1.2.2.5.2.7 0 .7-.3 1.5-.9 2-.7.7-1.8.7-2.5 0s-.7-1.8 0-2.5c.5-.5 1.3-.7 2-.5l2.3-2.3c-.1-.2-.2-.5-.2-.7 0-.2.1-.5.2-.7l-3.3-3.3L.7 11.6c-.4.4-.4 1.1 0 1.5L10.9 23.3c.4.4 1.1.4 1.5 0l10.9-10.9c.4-.4.4-1.1 0-1.5z" />
																	</svg>
																</Link>
																<span className="tool-tip">Git / GitHub</span>
															</li>
															<li className="carouselTicker__item mt-6">
																<Link href="#" className="brand-logo icon_80 icon-shape rounded-3 d-flex align-items-center justify-content-center">
																	<svg viewBox="0 0 24 24" width="40" height="40">
																		<defs>
																			<linearGradient id="gemini-grad-skills" x1="0%" y1="0%" x2="100%" y2="100%">
																				<stop offset="0%" stopColor="#9BC5FF" />
																				<stop offset="50%" stopColor="#C1A4FF" />
																				<stop offset="100%" stopColor="#FFADF1" />
																			</linearGradient>
																		</defs>
																		<path d="M12 0c.1 3.5 2.5 6.5 6 7.5-3.5 1-5.9 4-6 7.5-.1-3.5-2.5-6.5-6-7.5 3.5-1 5.9-4 6-7.5z" fill="url(#gemini-grad-skills)" />
																		<path d="M19 14c0 1.5 1 2.5 2.5 3-1.5.5-2.5 1.5-2.5 3 0-1.5-1-2.5-2.5-3 1.5-.5 2.5-1.5 2.5-3z" fill="url(#gemini-grad-skills)" opacity="0.8" />
																	</svg>
																</Link>
																<span className="tool-tip">Gemini AI</span>
															</li>
															<li className="carouselTicker__item mt-6">
																<Link href="#" className="brand-logo icon_80 icon-shape rounded-3 d-flex align-items-center justify-content-center">
																	<svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="#3DDC84" strokeWidth="2">
																		<rect x="2" y="3" width="20" height="18" rx="2" />
																		<path d="M7 9l-3 3 3 3M17 9l3 3-3 3M10 17l4-10" strokeLinecap="round" strokeLinejoin="round" />
																	</svg>
																</Link>
																<span className="tool-tip">Android Studio</span>
															</li>
														</ul>
													</Marquee>
												</div>
											</div>
										</div>
										<div className="col-lg-6 border-start-md mt-lg-0 mt-5">
											<div className="row">
												<div className="col-md-10 mx-auto">
													<div className="h-100 position-relative">
														<ul className="ps-3 d-flex flex-column justify-content-between h-100 position-relative">
															<li className="mb-3">
																<div className="d-flex flex-column flex-md-row gap-2">
																	<p className="text-dark text-nowrap mb-0">Languages:</p>
																	<span className="text-300">Kotlin, Java, Dart, JSON</span>
																</div>
															</li>
															<li className="mb-3">
																<div className="d-flex flex-column flex-md-row gap-2">
																	<p className="text-dark text-nowrap mb-0">Frameworks &amp; SDKs:</p>
																	<span className="text-300">Android SDK, Flutter, Material Design</span>
																</div>
															</li>
															<li className="mb-3">
																<div className="d-flex flex-column flex-md-row gap-2">
																	<p className="text-dark text-nowrap mb-0">Libraries &amp; APIs:</p>
																	<span className="text-300">Retrofit, Room Database, Navigation Component, ViewBinding</span>
																</div>
															</li>
															<li className="mb-3">
																<div className="d-flex flex-column flex-md-row gap-2">
																	<p className="text-dark text-nowrap mb-0">Tools &amp; IDEs:</p>
																	<span className="text-300">Android Studio, Git, GitHub, Gemini AI Integration</span>
																</div>
															</li>
															<li className="mb-3">
																<div className="d-flex flex-column flex-md-row gap-2">
																	<p className="text-dark text-nowrap mb-0">Soft Skills:</p>
																	<span className="text-300">Problem-Solving, Communication, Collaboration, Adaptability</span>
																</div>
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="position-absolute d-none d-md-block decorate">
							<div className="rotateme">
								<div className="circle-1-1" />
								<div className="circle-1-2 position-absolute top-50 start-50 translate-middle">
									<svg className="mb-5 position-absolute bottom-0 start-0" xmlns="http://www.w3.org/2000/svg" width={9} height={9} viewBox="0 0 9 9" fill="none">
										<circle cx="4.5" cy="4.5" r="4.5" fill="#636366" />
									</svg>
								</div>
								<div className="circle-1-3 position-absolute top-50 start-50 translate-middle ">
									<svg className="mb-3 position-absolute bottom-0 end-0" xmlns="http://www.w3.org/2000/svg" width={9} height={9} viewBox="0 0 9 9" fill="none">
										<circle cx="4.5" cy="4.5" r="4.5" fill="#636366" />
									</svg>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
