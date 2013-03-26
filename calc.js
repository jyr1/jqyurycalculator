/**
 * @author syvaoja
 */
$(document).ready(function() {
 $('.nappi').click(function() {
        //C clear 'screen'
        if ( $(this).data('value') == 'C') {
                $('.display').text('');
                $('.display').data('hascomma', false);
		// number buttons and .
        } else {
                if ( $(this).data('value') == '.' && $('.display').data('hascomma')==false ){
                        $('.display').data('hascomma', true);
                        var displayContent = $('.display').text() + $(this).data('value');
                        $('.display').text(displayContent);
                } else if ($(this).data('value')!='.'){
                        var displayContent = $('.display').text() + $(this).data('value');
                        $('.display').text(displayContent);
                }
        }
 });
 $('.oper').click(function() {
 		// operators +,-,* and / and actual calculations
 		if( $(operators).data('hasoperand')==false ) {
			$(operators).data('hasoperand', true);
			$('.operatorplace').text( $(this).data('value'));
			// convert display to the number
			var result = +$('.display').text();
			// clear 'screen'
			$('.display').text('');
			// do math
			
		}
 });
});