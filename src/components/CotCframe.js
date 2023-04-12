import PropTypes from 'prop-types';
import React from 'react';

import './CotCframe.scss';

function CotCframe({ children }) {
	return (
		<React.Fragment>
			<header className="cframe-header">
				<div className="container-fluid pt-3">
					<div className="row justify-content-between">
						<div className="col-auto">
							<div className='mb-3'>
								HEADER : BANNER : LEFT
							</div>
						</div>

						<div className="col-auto">
							<div className='mb-3'>
								HEADER : BANNER : RIGHT
							</div>
						</div>
					</div>
				</div>

				<div className="cframe-breadcrumbs pt-3">
					<div className="container-fluid">
						<div className="row">
							<div className="col">
								<nav aria-label="breadcrumb">
									<ol className="breadcrumb">
										<li className="breadcrumb-item"><a href="#" className='fw-semibold'>Home</a></li>
										<li className="breadcrumb-item"><a href="#" className='fw-semibold'>Library</a></li>
										<li className="breadcrumb-item active" aria-current="page">Data</li>
									</ol>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</header>

			<main className="cframe-main py-3">
				<div className="container">
					<div className="row">
						<div className="col">
							{children}
						</div>
					</div>
				</div>
			</main>

			<footer className="pt-3">
				<div className="container">
					<div className="row justify-content-between pt-3">
						<div className="col-auto">
							<p>FOOTER</p>
						</div>

						<div className="col-auto">
							<p>FOOTER</p>
						</div>
					</div>

					<div className="row">
						<div className="col">
							<hr className='border-top mt-0' />
						</div>
					</div>

					<div className="row">
						<div className="col">
							<p>
								<a href="https://www.toronto.ca/home/copyright-information/" data-wt_params="WT.z_click_from=footer;;WT.cat=Internal">
									&copy; City of Toronto 1998 &ndash; 2023
								</a>
								{' '}
								<span className="separator">|</span>
								{' '}
								<a href="https://www.toronto.ca/home/privacy/" data-wt_params="WT.z_click_from=footer;;WT.cat=Internal">Privacy</a>
								{' '}
								<span className="separator">|</span>
								{' '}
								<a href="https://www.toronto.ca/city-government/accessibility-human-rights/accessibility-at-the-city-of-toronto/" data-wt_params="WT.z_click_from=footer;;WT.cat=Internal">Accessibility at the City of Toronto</a>
							</p>
						</div>
					</div>
				</div>
			</footer>
		</React.Fragment>
	);
}

CotCframe.propTypes = {
	children: PropTypes.node
};

export default CotCframe;
