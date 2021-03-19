    function onHandleClickButton(event) {
        alert('botão disparado')
    }

    $(function() {
        var criptoCurrency = [
          "Bitcoin",
          "Ethereum",
          "Litecoin",
          "Cardano"
        ];
        $("#fNameCripto" ).autocomplete({
          source: criptoCurrency
        });
      });