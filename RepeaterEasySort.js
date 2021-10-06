(function($) {

	var rs_config = ProcessWire.config.RepeaterEasySort;

	function addSortIcon() {
		$('.RepeaterEasySort .InputfieldRepeaterItemControls').each(function() {
			if(!$(this).children('.easy-sort').length) {
				$(this).children('.toggle-icon').before('<i class="fa fa-arrows-v easy-sort" title="' + rs_config.labels.sort + '"></i>');
			}
		});
	}

	$(document).ready(function() {

		// Add sort icons on DOM ready
		addSortIcon();

		// Add sort icons when Repeater inputfield reloaded
		$(document).on('reloaded', '.InputfieldRepeater', function() {
			setTimeout(addSortIcon, 100);
		});

		// When easy-sort icon clicked
		$(document).on('click', '.InputfieldRepeaterItemControls .easy-sort', function(event) {
			event.stopPropagation();
			var $item = $(this).closest('.InputfieldRepeaterItem');
			var $inputfield = $(this).closest('.InputfieldRepeater');
			var $content = $inputfield.children('.InputfieldContent');

			var min_width = $inputfield.data('res-min-width');
			var available_width = $content.width();
			var divisor = Math.floor(available_width / min_width);
			if(divisor > 8) divisor = 8;
			$inputfield.addClass('width-1-' + divisor);

			// Add exit button
			$content.children('.InputfieldRepeaterAddItem').after('<button type="button" class="easy-sort-exit ui-button ui-state-default ui-priority-secondary"><span class="ui-button-text">' + rs_config.labels.exit + '</span></button>');

			// Add focus class
			$item.addClass('easy-sort-focus');

			// Add sort-active class
			$inputfield.addClass('easy-sort-active');

			// Close any open items
			var $items = $content.children('.Inputfields').children('.InputfieldRepeaterItem');
			$items.filter(':not(.InputfieldStateCollapsed)').each(function() {
				$(this).addClass('res-was-open').children('.InputfieldHeader').find('.toggle-icon').click();
			});

			// Two-dimensional sorting
			$inputfield.find('.Inputfields:eq(0)').each(function() {
				$(this).sortable('option', 'axis', false);
			});
		});

		// When exit button clicked
		$(document).on('click', '.easy-sort-exit', function(event) {
			var $inputfield = $(this).closest('.InputfieldRepeater');

			// Remove button
			$(this).remove();

			// Remove sort-active class
			$inputfield.removeClass('easy-sort-active');

			// One-dimensional sorting
			$inputfield.find('.Inputfields:eq(0)').each(function() {
				$(this).sortable('option', 'axis', 'y');
			});

			var $items = $inputfield.children('.InputfieldContent').children('.Inputfields').children('.InputfieldRepeaterItem');
			// Remove width class
			$inputfield.removeClass('width-1-1 width-1-2 width-1-3 width-1-4 width-1-5 width-1-6 width-1-7 width-1-8');
			// Remove sort-active class
			$items.filter('.easy-sort-focus').removeClass('easy-sort-focus');
			// Open any previously open items
			$items.filter('.res-was-open').each(function() {
				$(this).addClass('res-was-open').children('.InputfieldHeader').find('.toggle-icon').click();
			});
		});

	});

}(jQuery));
