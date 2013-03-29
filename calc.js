/**
 * @author syvaoja
 */
$(document).ready(function() {
	//Get context with jQuery - using jQuery's .get() method.
	var ctx = $("#myChart").get(0).getContext("2d");
	//This will get the first returned node in the jQuery collection.
	var myNewChart = new Chart(ctx);
	
	var data = {
	labels : ["January","February","March","April","May","June","July"],
	datasets : [
			{
			fillColor : "rgba(220,220,220,0.5)",
			strokeColor : "rgba(220,220,220,1)",
			pointColor : "rgba(220,220,220,1)",
			pointStrokeColor : "#fff",
			data : [65,59,90,81,56,55,40]
			},
			{
			fillColor : "rgba(151,187,205,0.5)",
			strokeColor : "rgba(151,187,205,1)",
			pointColor : "rgba(151,187,205,1)",
			pointStrokeColor : "#fff",
			data : [28,48,40,19,96,27,100]
			}
		]	
	}
	
	var options = {
				
	//Boolean - If we show the scale above the chart data			
	scaleOverlay : false,
	
	//Boolean - If we want to override with a hard coded scale
	scaleOverride : false,
	
	//** Required if scaleOverride is true **
	//Number - The number of steps in a hard coded scale
	scaleSteps : null,
	//Number - The value jump in the hard coded scale
	scaleStepWidth : null,
	//Number - The scale starting value
	scaleStartValue : null,

	//String - Colour of the scale line	
	scaleLineColor : "rgba(0,0,0,.1)",
	
	//Number - Pixel width of the scale line	
	scaleLineWidth : 1,

	//Boolean - Whether to show labels on the scale	
	scaleShowLabels : false,
	
	//Interpolated JS string - can access value
	scaleLabel : "<%=value%>",
	
	//String - Scale label font declaration for the scale label
	scaleFontFamily : "'Arial'",
	
	//Number - Scale label font size in pixels	
	scaleFontSize : 12,
	
	//String - Scale label font weight style	
	scaleFontStyle : "normal",
	
	//String - Scale label font colour	
	scaleFontColor : "#666",	
	
	///Boolean - Whether grid lines are shown across the chart
	scaleShowGridLines : true,
	
	//String - Colour of the grid lines
	scaleGridLineColor : "rgba(0,0,0,.05)",
	
	//Number - Width of the grid lines
	scaleGridLineWidth : 1,	
	
	//Boolean - Whether the line is curved between points
	bezierCurve : true,
	
	//Boolean - Whether to show a dot for each point
	pointDot : true,
	
	//Number - Radius of each point dot in pixels
	pointDotRadius : 3,
	
	//Number - Pixel width of point dot stroke
	pointDotStrokeWidth : 1,
	
	//Boolean - Whether to show a stroke for datasets
	datasetStroke : true,
	
	//Number - Pixel width of dataset stroke
	datasetStrokeWidth : 2,
	
	//Boolean - Whether to fill the dataset with a colour
	datasetFill : true,
	
	//Boolean - Whether to animate the chart
	animation : true,

	//Number - Number of animation steps
	animationSteps : 60,
	
	//String - Animation easing effect
	animationEasing : "easeOutQuart",

	//Function - Fires when the animation is complete
	onAnimationComplete : null
	
}
	
	new Chart(ctx).Line(data,options);
 $('.nappi').click(function() {
 		// clear 'screen' also if operator pressed and number is hitted again
		if ($(operators).data('hasoperand')==true) {
			$('.display').text('');
		}
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
		$(operators).data('hasoperand', true);
		$('.operatorplace').text( $(this).data('value'));
		// convert display to the number
		var result = +$('.display').text();
		// clear 'screen'
		$('.display').text('');
		// take memory out
		var memory = +$('.memory').text();
		// do math with it
		if ( $(this).data('value') =='+'){
			memory = memory + result;
			result = memory + result;
			// update display
			$('.display').text(result);
		}
 });
});