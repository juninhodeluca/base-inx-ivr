(() => {
    
    log.info('Request mobile');
	let mobile = dtmf.collect({
        onPrompt: 'start_digit_mobile.wav',
        onError: 'try_again.wav',
        onMaxAttemptsReached: 'max_attempts_reached.wav',
        minLength: 9,
        maxLength: 11,
        maxAttempts: 3,
        terminators: ['#'],
        regex: '[0-9]',
        digitTimeout: 5000,
        absoluteTimeout: 20000
    })

	// let navigazione = session.getVariable("navigazione");
    // navigazione = navigazione + "-digit cell";
    // session.setVariable("navigazione",navigazione);

    //log.info('Mobile', mobile)

    if (mobile.length > 0) {
		media.play('start_spell.wav');
      	//spell
		media.spell(mobile);
		
	  	//Conferma 1 reinserisci 0
		let conferma = dtmf.collect({
			onPrompt: 'end_spell.wav',
			onError: 'try_again.wav',
			onMaxAttemptsReached: 'max_attempts_reached.wav',
			minLength: 1,
			maxLength: 1,
			maxAttempts: 3,
			regex: '[0-9]',
			digitTimeout: 5000,
			absoluteTimeout: 20000
		});

		// let navigazione = session.getVariable("navigazione");
		// navigazione = navigazione + "-" + conferma;
		// session.setVariable("navigazione",navigazione);
		
		if (conferma == '1') {

			//Check Valid
			let inizio = mobile.substr(0,1);
			
			if (inizio == '3') {
				let caller 		= mobile;
				// let webApp 		= "00902";
				// session.setVariable("caller_id_number_reduced",caller);
				// session.setVariable("caller_id_number",caller);
				
				
				
			} else {
				media.play('not_valid_mobile.wav');
				map.to("operator");	
				map.to("thankyou");	
			}
			
		}
    }


    
    

})()