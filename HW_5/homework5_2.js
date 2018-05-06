$(document).ready(function() {
	setCurrenciesOption('#old-currency')
	setCurrenciesOption('#new-currency')

	$('#convert-btn').click(function() {
		covertCurrencies('#old-currency', '#new-currency')
	})
})

function setCurrenciesOption(selectId) {
	$.get('https://free.currencyconverterapi.com/api/v5/currencies')
	  .then(function(res) {
			for(currencyKey in res.results) {
				$(selectId).append(
					`<option>${currencyKey}</option>`
				)
			}
		})
}

function getConvertRate(oldCurrency, newCurrency) {
	let url = `http://free.currencyconverterapi.com/api/v5/convert?q=${oldCurrency}_${newCurrency}&compact=y`
	let coveterPromise = $.get(url)

	coveterPromise
		.then(function(res) {})
	return coveterPromise
}

function covertCurrencies(oldCurrencyId, newCurrencyId) {
	let oldCurrency = $(oldCurrencyId).val()
	let newCurrency = $(newCurrencyId).val()
	let url = `http://free.currencyconverterapi.com/api/v5/convert?q=${oldCurrency}_${newCurrency}&compact=y`
	let coveterPromise = $.get(url)

	getConvertRate(oldCurrency, newCurrency).then(function(res) {
		let currencyPair = `${oldCurrency}_${newCurrency}`
		let result = $('#currencies').val() * res[currencyPair].val
		$('#coverted-result').append(result)
	})
}