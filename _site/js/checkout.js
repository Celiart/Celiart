simpleCart.ready(function() {
  simpleCart.each(function(item, x) {
    $('form').append('<input type="hidden" name="' + item.get('id') + ' Denumire" value="' + item.get('denumire') + '">');
    // $('form').append('<input type="hidden" name="' + item.get('id') + ' Tip" value="' + item.get('tip') + '">');
    // $('form').append('<input type="hidden" name="' + item.get('id') + ' Dimensiuni" value="' + item.get('dimensiuni') + '">');
    // $('form').append('<input type="hidden" name="' + item.get('id') + ' Tehnica" value="' + item.get('tehnica') + '">');
    // $('form').append('<input type="hidden" name="' + item.get('id') + ' Autor" value="' + item.get('autor') + '">');
    // $('form').append('<input type="hidden" name="' + item.get('id') + ' An" value="' + item.get('an') + '">');
    $('form').append('<input type="hidden" name="' + item.get('id') + ' Pret" value="' + item.get('price') + '">');
    $('form').append('<input type="hidden" name="' + item.get('id') + ' Total" value="' + item.get('total') + '">');
  });
});
