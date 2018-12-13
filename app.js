document.addEventListener("DOMContentLoaded", function() {
	var amountInput = document.querySelector('#amount');
	var firstCurrency = document.querySelector('#currency1');
	var secondCurrency = document.querySelector('#currency2');
	var showResult = document.querySelector('#result');
	var button = document.querySelector('#btn');
	var rates = [3.76, 0.26, 4.29, 0.23, 4.78, 0.21, 0.16, 6.02]
	var USDPLN = rates[0];
	var PLNUSD = rates[1];
	var EURPLN = rates[2];
	var PLNEUR = rates[3];
	var GBPPLN = rates[4];
	var PLNGBP = rates[5];
	var CZKPLN = rates[6];
	var PLNCZK = rates[7];

	function convertCurrency(event) {
		event.preventDefault();
		var amount = amountInput.value;
		var from = firstCurrency.value;
		var to = secondCurrency.value;
		var result = 0;
		if (from === 'USD' && to === 'PLN') {
			result = amount * USDPLN;
		} else if (from === 'PLN' && to === 'USD') {
			result = amount * PLNUSD;
		} else if (from === 'EUR' && to === 'PLN') {
			Math.round(result = amount * EURPLN * 100 / 100)
		} else if (from === 'PLN' && to === 'EUR') {
			Math.round(result = amount * PLNEUR * 100 / 100);
		} else if (from === 'GBP' && to === 'PLN') {
			result = amount * GBPPLN;
		} else if (from === 'PLN' && to === 'GBP') {
			result = amount * PLNGBP;
		} else if (from === 'CZK' && to === 'PLN') {
			result = amount * CZKPLN;
		} else if (from === 'PLN' && to === 'CZK') {
			result = amount * PLNCZK;
		}

		showResult.textContent = parseFloat(result).toFixed(2) + ' ' + to;


	}

/* Form validation */

	function validate(form) {
		var from = firstCurrency.value;
		var to = secondCurrency.value;
		var amount = amountInput.value;
		var formCorrect = true;

		if (from == to) {
			form.preventDefault();
			alert('Currencies must be different');
			formCorrect = false;
		}
		else if (amount <= 0) {
			form.preventDefault();
			alert('Please input proper amount');
			formCorrect = false;
		}
		else if (from !== 'PLN' && to !== 'PLN') {
			form.preventDefault();
			alert('Choose PLN as one of options');
			formCorrect = false;
		}
		else if (/\D/.test(amount)) {
			form.preventDefault();
			alert('Please input only numbers');
			formCorrect = false;
		}
		else if (formCorrect = true) {
			convertCurrency(form);
		}
		else if (formCorrect = false) {
			showResult.innerHTML = '';
		}


	}
	btn.addEventListener('click', validate)

});
