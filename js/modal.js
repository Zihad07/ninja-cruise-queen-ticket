var $modalOverlay = $('#modalOverlay'); // Cache your selectors
var $modal = $('#modal');
var $modalClose = $('.modalClose');
var $modalOpen = $('.modalOpen');

$modalOpen.click(function() {
    $modalOverlay.stop().fadeTo(500, 1);
});

$modalOverlay.click(function() {
    $modalOverlay.stop().fadeTo(500, 0, function() { $(this).hide(); });
});

$modal.click(function(e) {
    e.stopPropagation(); // otherwise the click would bubble up to the overlay
});

$modalClose.click(function() {
    $modalOverlay.click(); // simulate click to close modal
});