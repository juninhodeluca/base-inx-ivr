require('../luna/luna.js')
// require('./services.js')
onTerminated = () => {
    
    //Devo salvarmi i tempi e le variabili
    // var operatore = session.getVariable("parloOperatore");

    // if (operatore == "no") {
    //     //Non andato in trasferimento
    //     var end_ts        = new Date; 
    //     var timing = Math.trunc((end_ts - start_ts) / 1000);     
    //     session.setVariable("inx_duration",         timing);
    // } 
    // var visual = session.getVariable("invioVisual");
   
    // var navigazione = session.getVariable("navigazione");
    // session.setVariable("inx_operatore",        operatore)
    // session.setVariable("inx_visual",           visual);
    // session.setVariable("inx_navigazione",      navigazione);

    // let idVoucher = session.getVariable("voucher");
    // let customerName = session.getVariable("customerName");
    // let idContractType = session.getVariable("contractType");
    // let idNumeroMobile = session.getVariable("mobileNumber");
    // let idOwnerCompany = session.getVariable("owner");

    // var idNumeroMobileMask = idNumeroMobile.substr(0,idNumeroMobile.length-3)+'XXX'
    // session.setVariable("inx_voucher",          idVoucher);
    // session.setVariable("inx_contrract_type",   idContractType);
    // session.setVariable("inx_owner_company",    idOwnerCompany);
    // session.setVariable("inx_numero_mobile",    idNumeroMobileMask);
    
    //session.setVariable("inx_customer_name",    customerName);
    
  

    log.info( '|------ CALL TERMINATED ------|' )
    exit( 'End of Script' )
}

try {
    // var start_ts        = new Date;
	// session.setVariable("parloOperatore","no");
	// session.setVariable("invioVisual","no");
    // session.setVariable("end_ts","");
    // session.setVariable("voucher","");
    // session.setVariable("user","");
    // session.setVariable("customerame","");
    // session.setVariable("contractType","");
    // session.setVariable("owner","");
    // session.setVariable("mobileNumber","");
    // session.setVariable("navigazione","");


	// var idVoucher		= "";		//Da risposta check_user
	// var idContractType	= "";		//Da risposta check_user
	// var idOwnerCompany	= "";		//Da risposta check_user
	// var idNumeroMobile	= "";		//Da risposta check_user
	// var navigazione		= "";		//Da navigazione, salvo sempre valore

    session.setHangupHook(onTerminated)
    session.answer()

    log.welcome()

    session.sleep(1000)

    // map.to('is_a_valid_mobile')    
    map.to('home')

    session.hangup()

} catch ( err ) {

    log.error( Object.getOwnPropertyNames( err ) )
    log.error( err.stack )

}