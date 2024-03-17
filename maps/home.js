(() => {

	
	
    media.play('welcome.wav')

    if (false) {
		log.info("---> CHIUSO ")
		// session.setVariable("inx_status","Chiuso");
		map.to('thankyou')
    } else {
		log.info("---> APERTO ")
		// session.setVariable("inx_status","Aperto");
		/**
		 * IVR menu()
		 */

		// session.setVariable("numero_test",isTest(session.getVariable("destination_number")));


		
		map.to('menu')
	}
    


})()