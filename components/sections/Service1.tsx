
import Link from "next/link"

export default function Service1() {
	return (
		<>

			<section className="section-service-1 pt-120 pb-120">
				<div className="container">
					<div className="row align-items-end">
						<div className="col-lg-7 me-auto">
							<h3 className="ds-3 mt-3 mb-3 text-primary-1">What do I offer?</h3>
							<span className="fs-5 fw-medium text-200">My journey started with a fascination for mobile technology,
								<br />
								leading me to specialize in Android App Development & Software Engineering.
							</span>
						</div>
						<div className="col-lg-auto">
							<Link href="/#contact" className="btn btn-gradient mt-lg-0 mt-5 ms-lg-auto">
								Get a Quote
								<i className="ri-arrow-right-up-line" />
							</Link>
						</div>
					</div>
					<div className="row mt-6 justify-content-between">
						<div className="col-12">
							<div className="single-service-card-1 tg-img-reveal-item w-100 border-top border-900 p-3" data-fx={1} data-img="assets/imgs/services/services-1/img-1.png">
								<div className="service-card-details d-lg-flex align-items-center">
									<h3 className="service-card-title w-lg-50 w-100 mb-0">
										<Link href="/work">
											<span className="service-number">01.</span>
											Android App Development
										</Link>
									</h3>
									<Link href="/work" className="d-md-flex d-block ps-lg-10 align-items-center justify-content-end w-100">
										<p className="service-card-text my-3">
											Building high-performance, native Android apps using Kotlin, <br />
											MVVM Architecture, Jetpack components, and Material Design.
										</p>
										<div className="service-card-icon icon-shape ms-auto icon-md rounded-circle border">
											<i className="ri-arrow-right-up-line" />
										</div>
									</Link>
								</div>
							</div>
						</div>
						<div className="col-12">
							<div className="single-service-card-1 tg-img-reveal-item w-100 border-top border-900 p-3" data-fx={1} data-img="assets/imgs/services/services-1/img-2.png">
								<div className="service-card-details d-lg-flex align-items-center">
									<h3 className="service-card-title w-lg-50 w-100 mb-0">
										<Link href="/work">
											<span className="service-number">02.</span>
											API & Database Integration
										</Link>
									</h3>
									<Link href="/work" className="d-md-flex d-block ps-lg-10 align-items-center justify-content-end w-100">
										<p className="service-card-text my-3">
											Connecting databases and third-party APIs using Room Database <br />
											for local cache, Retrofit, and SQLite for data management.
										</p>
										<div className="service-card-icon icon-shape ms-auto icon-md rounded-circle border">
											<i className="ri-arrow-right-up-line" />
										</div>
									</Link>
								</div>
							</div>
						</div>
						<div className="col-12">
							<div className="single-service-card-1 tg-img-reveal-item w-100 border-top border-900 p-3" data-fx={1} data-img="assets/imgs/services/services-1/img-3.png">
								<div className="service-card-details d-lg-flex align-items-center">
									<h3 className="service-card-title w-lg-50 w-100 mb-0">
										<Link href="/work">
											<span className="service-number">03.</span>
											AI Integration (Gemini AI)
										</Link>
									</h3>
									<Link href="/work" className="d-md-flex d-block ps-lg-10 align-items-center justify-content-end w-100">
										<p className="service-card-text my-3">
											Integrating Gemini AI engines into mobile apps to build smart products, <br />
											predictive text, and real-time artificial intelligence features.
										</p>
										<div className="service-card-icon icon-shape ms-auto icon-md rounded-circle border">
											<i className="ri-arrow-right-up-line" />
										</div>
									</Link>
								</div>
							</div>
						</div>
						<div className="col-12">
							<div className="single-service-card-1 tg-img-reveal-item w-100 border-top border-900 p-3 border-bottom" data-fx={1} data-img="assets/imgs/services/services-1/img-4.png">
								<div className="service-card-details d-lg-flex align-items-center">
									<h3 className="service-card-title w-lg-50 w-100 mb-0">
										<Link href="/work">
											<span className="service-number">04.</span>
											Cross-Platform (Flutter)
										</Link>
									</h3>
									<Link href="/work" className="d-md-flex d-block ps-lg-10 align-items-center justify-content-end w-100">
										<p className="service-card-text my-3">
											Leveraging Flutter and Dart to build engaging cross-platform <br />
											mobile solutions for Android and iOS.
										</p>
										<div className="service-card-icon icon-shape ms-auto icon-md rounded-circle border">
											<i className="ri-arrow-right-up-line" />
										</div>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
