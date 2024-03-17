(() => {

		// let numeroUtenze = 1;

		let menu = dtmf.menu({
		onPrompt: 'menu.wav',
		onError: 'invalid_option.wav',
		onMaxAttemptsReached: 'max_attempts_reached.wav',
		maxAttempts: 3,
		regex: '[0-3]'
		})

		log.info('Collected menu', menu)
		// let navigazione = session.getVariable("navigazione");
		
		// navigazione = menu;
		
		// session.setVariable("navigazione",navigazione);
		
		switch(menu) {
		case '1': 
			map.to('thankyou')
			break
		case '2':
			map.to('thankyou')
			break
		case '3': 
			// session.setVariable("inx_reason","Altre informazioni");
			map.to("thankyou");
			break
		case '0': 
			map.to('menu')
			break
		default:
			map.to('thankyou')
			break

		}


		map.to('thankyou')
	


})()