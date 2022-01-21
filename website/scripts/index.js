$(() => {
    let $navbar = $(".navbar");
    $(".toggle-button").on("click", (e) => {
        $navbar.toggleClass("active");

        e.stopPropagation();

        $(document).on("click", (_e) => {
            _e.stopPropagation();
            if (!$navbar[0].contains(_e.target) && $navbar.hasClass("active")) {
                $navbar.toggleClass("active");
            }
        });
    });
});