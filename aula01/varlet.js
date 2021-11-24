const exibeMensagemVar = () => {
    var msgForaIF = 'Brasil';

    if (true) {
        var msgDentroIF = 'Argentina'
        console.log(msgDentroIF);
    }

    console.log(msgForaIF);
    console.log(msgDentroIF);
}

exibeMensagemVar();

const exibeMensagemLet = () => {
    let msgForaIF = 'Brasil';

    if (true) {
        let msgDentroIF = 'Argentina'
        console.log(msgDentroIF);
    }

    console.log(msgForaIF);
    console.log(msgDentroIF);
}

exibeMensagemLet();