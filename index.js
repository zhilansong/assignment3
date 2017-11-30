function init(i) {
	
	if (i==0) {
		$('#cover').click(function() {
			$('#cover').hide();
		});

		$('#a1').mouseenter(function() {
			$('#a2').show();
		});
		$('#a1').mouseleave(function() {
			$('#a2').hide();
		});

		$('#b1').mouseenter(function() {
			$('#b2').show();
		});
		$('#b1').mouseleave(function() {
			$('#b2').hide();
		});

		$('#c1').mouseenter(function() {
			$('#c2').show();
		});
		$('#c1').mouseleave(function() {
			$('#c2').hide();
		});

		$('#d1').mouseenter(function() {
			$('#d2').show();
		});
		$('#d1').mouseleave(function() {
			$('#d2').hide();
		});
	} else if (i == 1) {


		$('#plan01').mouseenter(function() {
			$('#plan02').show();
		});
		$('#plan02').mouseleave(function() {
			$('#plan02').hide();
		});
	} else if (i == 2) {

		$('#section').mouseenter(function() {
			$('#dimension').show();
		});
		$('#dimension').mouseleave(function() {
			$('#dimension').hide();
		});

		$('#BTlandfill').mouseenter(function() {
			$('#Landfilltext').show();
		});
		$('#Landfilltext').mouseleave(function() {
			$('#Landfilltext').hide();
		});

        $('#Landfilltext').click(function() {
			$('#imageLandfill').fadeToggle(1000);
		});

		$('#BTdrain').mouseenter(function() {
			$('#Draintext').show();
		});
		$('#Draintext').mouseleave(function() {
			$('#Draintext').hide();
		});


		$('#Draintext').click(function() {
			$('#imageDrain').fadeToggle(1000);
		});

		$('#BTslum').mouseenter(function() {
			$('#Slumtext').show();
		});
		$('#Slumtext').mouseleave(function() {
			$('#Slumtext').hide();
		});


		$('#Slumtext').click(function() {
			$('#imageSlum').fadeToggle(1000);
		});

		$('#BTsortingground').mouseenter(function() {
			$('#Sortingtext').show();
		});
		$('#Sortingtext').mouseleave(function() {
			$('#Sortingtext').hide();
		});

		$('#Sortingtext').click(function() {
			$('#imageSortingground').fadeToggle(1000);
		});



	} else if (i == 3) {

		$('#pollution1_1_').mouseenter(function() {
			$('#airpollution').show();
		});
		$('#pollution1_1_').mouseleave(function() {
			$('#airpollution').hide();
		});

		$('#pollution2').mouseenter(function() {
			$('#groundwater').show();
		});
		$('#pollution2').mouseleave(function() {
			$('#groundwater').hide();
		});
	}
}
