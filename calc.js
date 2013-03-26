/**
 * @author syvaoja
 */
$(document).ready(function() {
 $('button').click(function() {
        //alert($('.display').data('hascomma'));
        if ( $(this).data('value') == 'C') {
                $('.display').text('');
                $('.display').data('hascomma', false);
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
});