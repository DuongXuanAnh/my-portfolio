let currentLang = 'en'; // Default language

$(document).ready(function() {
    $('#language-select').change(function() {
        currentLang = $(this).val();
        loadTranslations(currentLang);
    });

    $('#language-select-mobile').change(function() {
        currentLang = $(this).val();
        loadTranslations(currentLang);
    });

    function loadTranslations(lang) {
        $.getJSON(`../languages/${lang}.json`, function(data) {
            updateTexts(data);
        });
    }

    function updateTexts(translations) {
        $('[data-lang]').each(function() {
            const key = $(this).data('lang');
            $(this).text(translations[key]);
        });
    }

    // Initial load
    loadTranslations(currentLang);
});
