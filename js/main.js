var tabImage = new Array( 'images/slider/a.jpg', 'images/slider/b.jpg', 'images/slider/c.jpg',
                            'images/slider/1.jpg','images/slider/2.jpg', 'images/slider/3.jpg' )
var tabNumber = new Array( 0, 1, 2, 3, 4, 5 )
function random() {
    return Math.floor( Math.random() * tabImage.length )
}

function shuff() {
    for( var i = 0; i < tabNumber.length; i++ ) {
        var num = random()
        if( num > 3 ) {
            var buff = tabNumber[i]
            tabNumber[i] = tabNumber[num]
            tabNumber[num] = buff
        } else if( num < 3 ) {
            var buff = tabNumber[num]
            tabNumber[num] = tabNumber[i]
            tabNumber[i] = buff
        }
    }
}

window.onload = function() {
    var slider = document.getElementById( 'slider' )
    shuff()
    var i = 0
    slider.innerHTML = '<img src="' + tabImage[tabNumber[i]] + '">'
    setInterval( function () {
        setTimeout( function() {
            i++
            if( i == tabNumber.length ) {
                i = 0
                shuff()
            }
            console.log( `num: ${i}` )
            slider.innerHTML = '<img src="' + tabImage[tabNumber[i]] + '">'
        }, 0 )
    }, 5000 )
}