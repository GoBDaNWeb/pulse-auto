export const calcTrade = () => {

    function formatNumber(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
    const creditForm = document.querySelector('.creditForm')
    if(creditForm) {
        const contributionRange = creditForm.querySelector('#contribution-range')
        const contributionInput = creditForm.querySelector('#contribution-input')
        const termRange = creditForm.querySelector('#term-range')
        const termInput = creditForm.querySelector('#term-input')
        const cost = creditForm.querySelector('#cost')
        const summ = creditForm.querySelector('.summ')
        const term = creditForm.querySelector('.term')
        const payment = creditForm.querySelector('.payment')
        const contribution = creditForm.querySelector('.contribution')
        cost.addEventListener('input', e => {
            cost.value = formatNumber(e.target.value)
            if(!e.target.value) {
                summ.innerHTML = '0 Р'
                return
            }
            if(contributionRange.value == 0) {
                summ.innerHTML = `${formatNumber(cost.value)} Р`
            } else {
                summ.innerHTML = `${formatNumber(parseFloat(cost.value.replace(/\s/g, "")) -parseFloat(contributionInput.value.replace(/\s/g, "")))} Р`
            }
            payment.innerHTML = `${formatNumber(Math.round(+summ.innerHTML.replace(/\D/g, "") / +term.innerHTML.replace(/\D/g, "")))} Р`
            if(summ.innerHTML.includes('-')) {
                summ.innerHTML = `0 Р`
            }
        })

        contributionRange.addEventListener('input', e => {
            const value = e.target.value
            contributionInput.value = formatNumber(Number(value)) 
            contribution.innerHTML = `${formatNumber(Number(value))} Р`
            
            if(cost.value == 0) {
                return
            } else {
                summ.innerHTML = `${formatNumber(parseFloat(cost.value.replace(/\s/g, "")) - Number(value))} Р`
            }
            payment.innerHTML = `${formatNumber(Math.round(+summ.innerHTML.replace(/\D/g, "") / +term.innerHTML.replace(/\D/g, "")))} Р`
            if(summ.innerHTML.includes('-')) {
                summ.innerHTML = `0 Р`
            }
        })
        contributionInput.addEventListener('input', e => {
            const value = e.target.value
            contributionRange.value = value
            contributionInput.value = formatNumber(value) 
            contribution.innerHTML = `${formatNumber(Number(value))} Р`
            if(!value) {
                contributionRange.value = 1
            }
            if(cost.value == 0) {
                return
            } else {
                summ.innerHTML = `${formatNumber(parseFloat(cost.value.replace(/\s/g, "")) - Number(value))} Р`
            }
            payment.innerHTML = `${formatNumber(Math.round(+summ.innerHTML.replace(/\D/g, "") / +term.innerHTML.replace(/\D/g, "")))} Р`
           
            if(summ.innerHTML.includes('-')) {
                summ.innerHTML = `0 Р`
            }
        })
        termRange.addEventListener('input', e => {
            const value = e.target.value
            termInput.value = formatNumber(value)
            term.innerHTML = `${value} мес`
            payment.innerHTML = `${formatNumber(Math.round(+summ.innerHTML.replace(/\D/g, "") / +term.innerHTML.replace(/\D/g, "")))} Р`
            if(summ.innerHTML.includes('-')) {
                summ.innerHTML = `0 Р`
            }
        })
        termInput.addEventListener('input', e => {
            const value = e.target.value
            termRange.value = value
            termInput.value = formatNumber(value)
            term.innerHTML = `${value ? formatNumber(value) : '1'} мес`
            payment.innerHTML = `${formatNumber(Math.round(+summ.innerHTML.replace(/\D/g, "") / +term.innerHTML.replace(/\D/g, "")))} Р`
            if(!value) {
                termRange.value = 1
            }
            if(summ.innerHTML.includes('-')) {
                summ.innerHTML = `0 Р`
            }
        })
    }
    
}
