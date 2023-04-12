import React, { useState } from 'react';
import ReactDomClient from 'react-dom/client';

import './main.scss';

import CotCframe from './components/CotCframe';

// import React, { useState } from 'react';

ReactDomClient
	.createRoot(document.getElementById('app'))
	// .createRoot(document.body)
	.render(
		<CotCframe>
			<div>Hello World</div>
		</CotCframe>
	);
