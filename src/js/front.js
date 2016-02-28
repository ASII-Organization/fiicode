/**
 * Created by Catalin on 2/28/2016.
 */
$('.mobile .button.dropdown').dropdown();
$(document).on('mouseover', '#homecover .ui.button.web', function() {
    $('.backgroundhome.web').addClass('show');
}).on('mouseleave', '#homecover .ui.button', function() {
    $('.backgroundhome.web').removeClass('show');
});
$(document).on('mouseover', '#homecover .ui.button.algo', function() {
    $('.backgroundhome.algo').addClass('show');
}).on('mouseleave', '#homecover .ui.button', function() {
    $('.backgroundhome.algo').removeClass('show');
});