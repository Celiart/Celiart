simpleCart({

  checkout: {
    // type: "PayPal",
    // email: "you@yours.com",
  },

  // tax: 0.075,
  // currency: "THB",

  cartStyle: "table",

  cartColumns: [
    { attr: "name" , label: "Denumire" } ,
    // important
    // { attr: "size" , label: "Dimensiuni" } ,
    // { attr: "tehnica" , label: "Tehnica" } ,
    // { attr: "an" , label: "An" } ,
    // { attr: "autor" , label: "Autor" } ,
    { attr: "price" , label: "Pret", view: 'currency' } ,
    // { attr: "subtotal" , label: "SubTotal", view: 'currency' } ,
    { view: "remove" , text: "Renunta" , label: false }
  ]

});

// simpleCart.currency({
  // code: "THB",
  // name: "Thai Baht",
  // symbol: "&#3647;",
  // delimiter: " ",
  // decimal: ",",
  // after: true,
  // accuracy: 0
// });

//* Refresh cart once simpleCart is ready to listen.
simpleCart.ready(function() {
  simpleCart.update();
});
