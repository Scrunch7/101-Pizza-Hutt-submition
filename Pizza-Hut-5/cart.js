window.onload = function() {

    // i know this is the worst way to do a cart but i don't know javascript


    // events
    let order_list = []
 
    document.body.addEventListener( 'click', function ( event ) {
        if( event.target.classList.contains("add-to-cart")) {
            let btn = event.target
            let title = btn.parentElement.children.item(1).innerText
            order_list.push(title)
            console.log(order_list)
            items_list()
            update_total()
        }
      } )




    



    function items_list(){
        let div = ''
        order_list.forEach(function (item){
            div += '<div class="cart__item">' + item + '</div>' + 
            '<p class="item__price">$10.00</p>' +
            '<button class="item__remove">X</button>'
        })
        document.querySelector('.cart__items').innerHTML = div

    }
    function update_total(){
        let count = order_list.length
        let span =  count*10.00 + '.00'
        document.querySelector('.total__price').innerHTML = span


    }
    


  
  }

