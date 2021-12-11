$('#qtde')[0].value = 0
$('#total')[0].value = `R$ ${0},00`

$('#qtde').on('change', () => {
    calculaPedido($('#qtde')[0].value)
})

$('#opbolos').on('change', () => {
    calculaPedido($('#qtde')[0].value)
})

function calculaPedido(qtde) {
    switch ($('#opbolos')[0].value) {
        case 'chocolate':
            $('#total')[0].value = `R$ ${50 * qtde},00`
            break;

        case 'limao':
            $('#total')[0].value = `R$ ${80 * qtde},00`
            break;

        case 'morango':
            $('#total')[0].value = `R$ ${95 * qtde},00`
            break;

        case 'ninho':
            $('#total')[0].value = `R$ ${100 * qtde},00`
            break;

        default:
            $('#total')[0].value = `R$ ${0},00`
            break;
    }


}


