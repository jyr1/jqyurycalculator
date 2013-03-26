/**
 * @author syvaoja
 */
$(document).ready(function() {
 $('button').click(function() {
        $('.display').text($(this).data('value'));
 });
});