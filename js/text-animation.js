(function ( $ ) {
	console.log( 'test' );

	banner = {
		init: function () {
			banner.createAllTextBoxes();
		},

		createAllTextBoxes: function () {
			var bannerWidth, bannerHeight, boxWidth, boxHeight, posCounter;
			banner.headingBanner = document.querySelector( '.text-box-wrapper .banner-inner' );
			banner.bannerWrapper = document.querySelector( '.text-box-wrapper' );
			banner.position = banner.bannerWrapper.getBoundingClientRect();
			banner.offSet = $( banner.bannerWrapper ).offset();
			console.log( banner.offSet );
			bannerWidth = banner.bannerWrapper.getBoundingClientRect().width;
			bannerHeight = banner.bannerWrapper.getBoundingClientRect().height;
			boxWidth = ( bannerWidth / 20 );
			boxHeight = ( bannerWidth / 20 );
			posCounter = 0;
			banner.createTopTextBoxes( boxWidth, posCounter );
			banner.createLeftTextBoxes( boxHeight, posCounter );
			banner.createBottomTextBoxes( boxWidth, posCounter );
			banner.createRightTextBoxes( boxHeight, posCounter );
			console.log( banner.position );
		},

		/**
		 * Create Top text boxes;
		 *
		 * @param boxWidth boxWidth is same as boxHeight
		 * @param posCounter
		 */
		createTopTextBoxes: function ( boxWidth, posCounter ) {
			for ( var i = 0; i < 20; i++ ) {
				var box = document.createElement( 'div' );
				box.setAttribute( 'class', 'text-box' );
				box.style.top = 0;
				box.style.left = posCounter + 'px';
				box.style.height = boxWidth + 'px';
				box.style.width = boxWidth + 'px';
				banner.bannerWrapper.appendChild( box );
				posCounter = posCounter + boxWidth;
			}
		},

		createLeftTextBoxes: function ( boxWidth, posCounter ) {
			for ( var i = 0; i < 11; i++ ) {
				var box = document.createElement( 'div' );
				box.setAttribute( 'class', 'text-box' );
				box.style.top = posCounter + boxWidth + 'px';
				box.style.left = 0;
				box.style.height = boxWidth + 'px';
				box.style.width = boxWidth + 'px';
				banner.bannerWrapper.appendChild( box );
				posCounter = posCounter + boxWidth;
			}
		},

		createBottomTextBoxes: function ( boxWidth, posCounter ) {
			for ( var i = 0; i < 18; i++ ) {
				var box = document.createElement( 'div' );
				box.setAttribute( 'class', 'text-box' );
				box.style.bottom = 0;
				box.style.left = posCounter + boxWidth + 'px';
				box.style.height = boxWidth + 'px';
				box.style.width = boxWidth + 'px';
				banner.bannerWrapper.appendChild( box );
				posCounter = posCounter + boxWidth;
			}
		},

		createRightTextBoxes: function ( boxWidth, posCounter ) {
			for ( var i = 0; i < 11; i++ ) {
				var box = document.createElement( 'div' );
				box.setAttribute( 'class', 'text-box' );
				box.style.top = posCounter + boxWidth + 'px';
				box.style.right = 0;
				box.style.height = boxWidth + 'px';
				box.style.width = boxWidth + 'px';
				banner.bannerWrapper.appendChild( box );
				posCounter = posCounter + boxWidth;
			}
		}
	};

	banner.init();
})( jQuery );