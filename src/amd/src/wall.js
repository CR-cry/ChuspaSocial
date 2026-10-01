define(['jquery'], function($) {
    'use strict';

    return {

        focusFirstNewPost: function(container) {
            const $newPost = $(container).find('.post-item, article').first();
            
            if ($newPost.length) {
                if (!$newPost.is('a, button, input, [tabindex]')) {
                    $newPost.attr('tabindex', '-1');
                }
                $newPost.focus();
            }
        },

        init: function() {
        }
    };
});