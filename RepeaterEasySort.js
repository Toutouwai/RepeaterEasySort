(function($) {

	var res_config = ProcessWire.config.RepeaterEasySort;

	function addEasySortControls() {
		$('.RepeaterEasySort').each(function() {
			if(!$(this).find('> .InputfieldHeader > .easy-sort-mode').length) {
				$(this).find('> .InputfieldHeader').append('<div class="easy-sort-mode"><i class="fa fa-ellipsis-h res-easy-sort-mode" title="' + res_config.labels.sort_mode + '"></i><i class="fa fa-ellipsis-v res-normal-mode" title="' + res_config.labels.normal_mode + '"></i></div>');
			}
			$(this).find('.InputfieldRepeaterItemControls').each(function() {
				if(!$(this).children('.easy-sort').length) {
					$(this).children('.toggle-icon').before('<i class="fa fa-arrows-v easy-sort" title="' + res_config.labels.sort + '"></i>');
				}
			});
			// Enter easy-sort mode if enabled by default
			if($(this).hasClass('res-active-default') && !$(this).hasClass('res-active-default-init')) {
				$(this).find('> .InputfieldHeader > .easy-sort-mode > .res-easy-sort-mode').click();
				$(this).addClass('res-active-default-init');
			}
		});
	}

	function startEasySort($inputfield, $item) {
		var $content = $inputfield.children('.InputfieldContent');

		var min_width = $inputfield.data('res-min-width');
		var available_width = $content.width();
		var divisor = Math.floor(available_width / min_width);
		if(divisor > 8) divisor = 8;
		$inputfield.addClass('width-1-' + divisor);

		// Add exit button
		$content.children('.InputfieldRepeaterAddItem').after('<button type="button" class="easy-sort-exit ui-button ui-state-default ui-priority-secondary"><span class="ui-button-text"><i class="fa fa-ellipsis-v"></i> ' + res_config.labels.exit + '</span></button>');

		// Add focus class
		if($item) $item.addClass('easy-sort-focus');

		// Add sort-active class
		$inputfield.addClass('easy-sort-active');

		// Close any open items
		var $items = $content.find('.Inputfields > .InputfieldRepeaterItem');
		$items.filter(':not(.InputfieldStateCollapsed)').each(function() {
			$(this).addClass('res-was-open').children('.InputfieldHeader').find('.toggle-icon').click();
		});

		// Two-dimensional sorting
		$inputfield.find('> .InputfieldContent > .Inputfields:eq(0)').sortable('option', 'axis', false);
	}

	function endEasySort($inputfield) {
		// Remove button
		$inputfield.find('> .InputfieldContent > .easy-sort-exit').remove();

		// Remove sort-active class
		$inputfield.removeClass('easy-sort-active');

		// One-dimensional sorting
		$inputfield.find('> .InputfieldContent > .Inputfields:eq(0)').sortable('option', 'axis', 'y');

		var $items = $inputfield.find('> .InputfieldContent > .Inputfields > .InputfieldRepeaterItem');
		// Remove width class
		$inputfield.removeClass('width-1-1 width-1-2 width-1-3 width-1-4 width-1-5 width-1-6 width-1-7 width-1-8');
		// Remove sort-active class
		$items.filter('.easy-sort-focus').removeClass('easy-sort-focus');
		// Open any previously open items
		$items.filter('.res-was-open').each(function() {
			$(this).addClass('res-was-open').children('.InputfieldHeader').find('.toggle-icon').click();
		});
	}

	$(document).ready(function() {

		// When Repeater inputfield reloaded
		$(document).on('reloaded', '.InputfieldRepeater', function() {
			// Add easy-sort controls
			setTimeout(addEasySortControls, 100);
		});

		// When easy-sort mode button clicked
		$(document).on('click', '.res-easy-sort-mode', function(event) {
			event.stopPropagation();
			var $inputfield = $(this).closest('.InputfieldRepeater');
			// Return early if easy-sort already active
			if($inputfield.hasClass('easy-sort-active')) return;
			startEasySort($inputfield, null);
		});

		// When normal mode button or exit button clicked
		$(document).on('click', '.res-normal-mode, .easy-sort-exit', function(event) {
			event.stopPropagation();
			var $inputfield = $(this).closest('.InputfieldRepeater');
			// Return early if easy-sort not active
			if(!$inputfield.hasClass('easy-sort-active')) return;
			endEasySort($inputfield);
		});

		// When item easy-sort button clicked
		$(document).on('click', '.InputfieldRepeaterItemControls .easy-sort', function(event) {
			event.stopPropagation();
			var $item = $(this).closest('.InputfieldRepeaterItem');
			var $inputfield = $(this).closest('.InputfieldRepeater');
			startEasySort($inputfield, $item);
		});

		// Add easy-sort controls on DOM ready
		addEasySortControls();

	});

}(jQuery));
