(() => { 

    session.sleep(500)
    media.play('hangup.wav')
    session.hangup()

})()