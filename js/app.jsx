require([
	'jquery',
	'jsx',
	'q',
	'react',
	'underscore'
], function($, JSX, Q, React, _ ) {
    'use strict';
    
    /** @jsx React.DOM */

		var Cmns = React.createClass({
			render : function() {
				return <div>hello world!</div>;
		 	}
		});

		React.renderComponent(
		  <Cmns />,
		  document.body
		);
});
