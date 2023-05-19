import React from 'react'
const Home = () => {
  return (
    <>

	<main>
		<section id="hero" className="py-5" style={{ backgroundColor: "#1a1a1f" }}>
			<div className="container">
				{ /* <div class="row g-5 row-cols-1 row-cols-md-2">
                             <div class="col">
                                 <h1 class="fs-1 mb-3 fw-bold">Lorem ipsum dolor sit amet.</h1>
                                 <p class="fs-5">
                                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum odio nibh, mollis vitae tellus sit amet, condimentum laoreet mauris. Ut eu condimentum mauris. Aenean consequat urna sapien, et dignissim nisi elementum
                                     quis.
                                 </p>
                             </div>
     
                             <div class="col">
                                 <div>
                                     <img class="img-fluid rounded" src="/assets/img/01.jpg" alt="" />
                                 </div>
                             </div>
                         </div> */ }
				<div className="d-flex flex-column flex-column-reverse flex-md-row">
					<div className="col col-md-5 me-md-5">
						<h1 className="fs-1 mb-3 fw-bold text-white">Lorem ipsum dolor sit amet.</h1>
						<p className="fs-5 text-white">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum odio nibh, mollis vitae tellus sit amet, condimentum laoreet mauris. Ut eu condimentum mauris. Aenean consequat urna sapien, et dignissim nisi elementum
							quis.
						</p>
					</div>

					<div className="col col-md-7">
						<div>
							<img className="img-fluid rounded mb-4 mb-md-0" src="https://freebiespic.com/images/2019/0502_background-carpenter-long-nails-1024x604.jpg" alt="" />
						</div>
					</div>
				</div>
			</div>
		</section>
		<div className="py-5">
			<div className="container">
				<div className="row g-4 row-cols-1 row-cols-sm-2 row-cols-md-3">
					<div className="col">
						<div className="card bg-dark border-0">
							<img className="card-img-top" src="https://freebiespic.com/images/2021/IMG_1306_Recipe-for-vegan-clay-pot-noodles_1024.jpg" alt="" />
							<div className="card-body">
								<a className="text-light link-info bg-info text-decoration-none" href="#">
									<h2 className="fs-5">Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
								</a>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card bg-dark border-0">
							<img className="card-img-top" src="https://freebiespic.com/images/2017/06/Coffee-beans-spilled-from-a-cup-on-a-wooden-table.jpg" alt="" />
							<div className="card-body">
								<a className="text-light link-info bg-info text-decoration-none" href="#">
									<h2 className="fs-5">Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
								</a>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card bg-dark border-0">
							<img className="card-img-top" src="https://freebiespic.com/images/2021/IMG_8685_A-cup-of-espresso-coffee_1024.jpg" alt="" />
							<div className="card-body">
								<a className="text-light link-info bg-info text-decoration-none" href="#">
									<h2 className="fs-5">Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
								</a>
							</div>
						</div>
					</div>

					<div className="col">
						<div className="card bg-dark border-0">
							<img className="card-img-top" src="https://freebiespic.com/images/2021/IMG_8264_Hand-craft-coffee-roasting_1024x683.jpg" alt="" />
							<div className="card-body">
								<a className="text-light link-info bg-info text-decoration-none" href="#">
									<h2 className="fs-5">Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
								</a>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card bg-dark border-0">
							<img className="card-img-top" src="https://freebiespic.com/images/2021/MG_8668__Serving-a-donut-in-plastic-plates_1024px.jpg" alt="" />
							<div className="card-body">
								<a className="text-light link-info bg-info text-decoration-none" href="#">
									<h2 className="fs-5">Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
								</a>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card bg-dark border-0">
							<img className="card-img-top" src="https://freebiespic.com/images/2017/06/Coffee-in-a-blue-cup.jpg" alt="" />
							<div className="card-body">
								<a className="text-light link-info bg-info text-decoration-none" href="#">
									<h2 className="fs-5">Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
								</a>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card bg-dark border-0">
							<img className="card-img-top" src="https://freebiespic.com/images/2021/IMG_8685_A-cup-of-espresso-coffee_1024.jpg" alt="" />
							<div className="card-body">
								<a className="text-light link-info bg-info text-decoration-none" href="#">
									<h2 className="fs-5">Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
								</a>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card bg-dark border-0">
							<img className="card-img-top" src="https://freebiespic.com/images/2021/IMG_1306_Recipe-for-vegan-clay-pot-noodles_1024.jpg" alt="" />
							<div className="card-body">
								<a className="text-light link-info bg-info text-decoration-none" href="#">
									<h2 className="fs-5">Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
								</a>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card bg-dark border-0">
							<img className="card-img-top" src="https://freebiespic.com/images/2021/IMG_5045_Coffee-with-wine-flavor_1024.jpg" alt="" />
							<div className="card-body">
								<a className="text-light link-info bg-info text-decoration-none" href="#">
									<h2 className="fs-5">Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
								</a>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card bg-dark border-0">
							<img className="card-img-top" src="https://freebiespic.com/images/2021/0204__Car-engine-oil-pipe_w1024.jpg" alt="" />
							<div className="card-body">
								<a className="text-light link-info bg-info text-decoration-none" href="#">
									<h2 className="fs-5">Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</main>
</>

  )
}

export default Home