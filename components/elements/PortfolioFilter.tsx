'use client'
import Isotope from "isotope-layout"
import Link from "next/link"
import { useCallback, useEffect, useRef, useState } from "react"

export default function PortfolioFilter() {
	// Isotope
	const isotope = useRef<Isotope | null>(null)
	const [filterKey, setFilterKey] = useState<string>("*")

	useEffect(() => {
		const timeout = setTimeout(() => {
			isotope.current = new Isotope(".masonry-active", {
				itemSelector: ".filter-item",
				percentPosition: true,
				masonry: {
					columnWidth: ".filter-item",
				},
			})
		}, 1000)

		// Cleanup on unmount
		return () => clearTimeout(timeout)
	}, [])

	useEffect(() => {
		if (isotope.current) {
			isotope.current.arrange({ filter: filterKey === "*" ? "*" : `.${filterKey}` })
		}
	}, [filterKey])

	const handleFilterKeyChange = useCallback((key: string) => () => {
		setFilterKey(key)
	}, [])

	const activeBtn = (value: string) => (value === filterKey ? "active btn btn-md btn-filter mb-2 me-2 text-uppercase" : "btn btn-md btn-filter mb-2 me-2 text-uppercase")

	return (
		<>

			<div className="container">
				<div className="text-start">
					<div className="button-group filter-button-group filter-menu-active">
						<button className={activeBtn("*")} onClick={handleFilterKeyChange("*")}>All Projects</button>
						<button className={activeBtn("native")} onClick={handleFilterKeyChange("native")}>Android Native</button>
						<button className={activeBtn("ai")} onClick={handleFilterKeyChange("ai")}>AI Integration</button>
						<button className={activeBtn("db")} onClick={handleFilterKeyChange("db")}>Room DB / SQLite</button>
						<button className={activeBtn("api")} onClick={handleFilterKeyChange("api")}>REST APIs</button>
					</div>
				</div>
				<div className="row masonry-active justify-content-between mt-6">
					<div className="grid-sizer" />
					<div className="filter-item col-lg-6 col-12 native ai">
						<div className="project-item rounded-4 overflow-hidden position-relative p-md-4 p-3 bg-white">
							<Link href="https://github.com/ali786-c/keyboardapp" target="_blank">
								<img className="rounded-3 w-100 zoom-img" src="/assets/imgs/projects/projects-1/img-1.png" alt="AI Keyboard Application" />
							</Link>
							<div className="d-flex align-items-center mt-4">
								<Link href="https://github.com/ali786-c/keyboardapp" target="_blank" className="project-card-content">
									<h3 className="fw-semibold">AI Keyboard Application</h3>
									<p>Kotlin, MVVM, Gemini AI Engine Integration</p>
								</Link>
								<Link href="https://github.com/ali786-c/keyboardapp" target="_blank" className="project-card-icon icon-shape ms-auto icon-md rounded-circle">
									<i className="ri-arrow-right-up-line" />
								</Link>
							</div>
						</div>
					</div>
					<div className="filter-item col-lg-6 col-12 native api">
						<div className="project-item rounded-4 overflow-hidden position-relative p-md-4 p-3 bg-white">
							<Link href="https://github.com/ali786-c/WeatherApp" target="_blank">
								<img className="rounded-3 w-100 zoom-img" src="/assets/imgs/projects/projects-1/img-2.png" alt="Weather Forecasting App" />
							</Link>
							<div className="d-flex align-items-center mt-4">
								<Link href="https://github.com/ali786-c/WeatherApp" target="_blank" className="project-card-content">
									<h3 className="fw-semibold">Weather Forecasting App</h3>
									<p>Kotlin, Retrofit, REST APIs, Asynchronous MVVM</p>
								</Link>
								<Link href="https://github.com/ali786-c/WeatherApp" target="_blank" className="project-card-icon icon-shape ms-auto icon-md rounded-circle">
									<i className="ri-arrow-right-up-line" />
								</Link>
							</div>
						</div>
					</div>
					<div className="filter-item col-lg-6 col-12 native db">
						<div className="project-item rounded-4 overflow-hidden position-relative p-md-4 p-3 bg-white">
							<Link href="https://github.com/ali786-c" target="_blank">
								<img className="rounded-3 w-100 zoom-img" src="/assets/imgs/projects/projects-1/img-3.png" alt="Birthday Greetings Manager" />
							</Link>
							<div className="d-flex align-items-center mt-4">
								<Link href="https://github.com/ali786-c" target="_blank" className="project-card-content">
									<h3 className="fw-semibold">Birthday Greetings Manager</h3>
									<p>Kotlin, Room Database, State Management</p>
								</Link>
								<Link href="https://github.com/ali786-c" target="_blank" className="project-card-icon icon-shape ms-auto icon-md rounded-circle">
									<i className="ri-arrow-right-up-line" />
								</Link>
							</div>
						</div>
					</div>
					<div className="filter-item col-lg-6 col-12 native api">
						<div className="project-item rounded-4 overflow-hidden position-relative p-md-4 p-3 bg-white">
							<Link href="https://github.com/ali786-c" target="_blank">
								<img className="rounded-3 w-100 zoom-img" src="/assets/imgs/projects/projects-1/img-4.png" alt="Restaurant Discovery Portal" />
							</Link>
							<div className="d-flex align-items-center mt-4">
								<Link href="https://github.com/ali786-c" target="_blank" className="project-card-content">
									<h3 className="fw-semibold">Restaurant Discovery Portal</h3>
									<p>Kotlin, MVVM Architecture, Retrofit, JSON Parsing</p>
								</Link>
								<Link href="https://github.com/ali786-c" target="_blank" className="project-card-icon icon-shape ms-auto icon-md rounded-circle">
									<i className="ri-arrow-right-up-line" />
								</Link>
							</div>
						</div>
					</div>
					<div className="filter-item col-lg-6 col-12 native db">
						<div className="project-item rounded-4 overflow-hidden position-relative p-md-4 p-3 bg-white">
							<Link href="https://github.com/ali786-c" target="_blank">
								<img className="rounded-3 w-100 zoom-img" src="/assets/imgs/work/img-1.png" alt="Academic GPA Tool" />
							</Link>
							<div className="d-flex align-items-center mt-4">
								<Link href="https://github.com/ali786-c" target="_blank" className="project-card-content">
									<h3 className="fw-semibold">Academic GPA Tool</h3>
									<p>Kotlin, Room Database, Local Persistence</p>
								</Link>
								<Link href="https://github.com/ali786-c" target="_blank" className="project-card-icon icon-shape ms-auto icon-md rounded-circle">
									<i className="ri-arrow-right-up-line" />
								</Link>
							</div>
						</div>
					</div>
					<div className="filter-item col-lg-6 col-12 native">
						<div className="project-item rounded-4 overflow-hidden position-relative p-md-4 p-3 bg-white">
							<Link href="https://github.com/ali786-c" target="_blank">
								<img className="rounded-3 w-100 zoom-img" src="/assets/imgs/work/img-2.png" alt="Health BMI Tracker" />
							</Link>
							<div className="d-flex align-items-center mt-4">
								<Link href="https://github.com/ali786-c" target="_blank" className="project-card-content">
									<h3 className="fw-semibold">Health BMI Tracker</h3>
									<p>Kotlin, State Management, Local Storage</p>
								</Link>
								<Link href="https://github.com/ali786-c" target="_blank" className="project-card-icon icon-shape ms-auto icon-md rounded-circle">
									<i className="ri-arrow-right-up-line" />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
