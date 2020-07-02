/*
Required 'matches' polyfill...
*/
if ( ! Element.prototype.matches ) {
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}

/*
Required 'closest' polyfill...
*/
if ( ! Element.prototype.closest ) {
    Element.prototype.closest = function(s) {
        var el = this;
        do {
            if ( el.matches(s) ) return el;
            el = el.parentElement || el.parentNode;
        } while ( el !== null && el.nodeType === 1 );
        return null;
    };
}

/*
Replicate jQuery's .parents() function to retrieve element ancestors...
*/
function getAncestors( el, selector ) {
    var parents = [];
    for ( ; el && el !== document; el = el.parentNode ) {
        if ( selector ) {
            if ( el.matches( selector ) ) {
                parents.push( el );
            }
        } else {
            parents.push( el );
        }
    }
    return parents;
}

/*
Add aria markup to navigation...
*/
! function() {
    var submenus = document.querySelectorAll('nav ul ul');
    for ( var i = 0; i < submenus.length; i++ ) {
        var submenu = submenus[i];
        var anchor = submenu.parentNode.querySelector('a');
        submenu.setAttribute( 'aria-hidden', 'true' );
        submenu.setAttribute( 'aria-expanded', 'false' );
        submenu.setAttribute( 'aria-label', anchor.text.toLowerCase() + ' submenu' );
        anchor.setAttribute( 'aria-haspopup', 'true' );
    }
}();

/*
Keyboard accessibility interactions...
*/
! function() {

    var opened = [];
    var nav = document.querySelector('nav');
    var all = nav.querySelectorAll('a');
    var first = all[0];
    var last = all[ all.length - 1 ];

    function open( list ) {
        list.setAttribute( 'aria-hidden', 'false' );
        list.setAttribute( 'aria-expanded', 'true' );
        opened.push( list );
    }

    function close( list ) {
        list.setAttribute( 'aria-hidden', 'true' );
        list.setAttribute( 'aria-expanded', 'false' );
    }

    function reset() {
        if ( opened ) {
            for ( var i = 0; i < opened.length; i++ ) {
                close( opened[i] );
            }
            opened = [];
        }
    }

    nav.addEventListener( 'focusin', function( event ) {

        var anchor = event.target;

        // close all open menus...
        reset();

        // if this is a submenu item, open all parent menus...
        var parentMenus = getAncestors( anchor, 'ul[aria-expanded]' );
        if ( parentMenus ) {
            for ( var i = 0; i < parentMenus.length; i++ ) {
                open( parentMenus[i] );
            }
        }

        // if this anchor has a submenu, open it...
        var subMenu = anchor.nextElementSibling;
        if ( subMenu ) {
            open( subMenu );
        }

    });

    document.addEventListener( 'focusin', function( event ) {
        if ( ! nav.contains( event.target ) ) {
            reset();
        }
    });

}();
