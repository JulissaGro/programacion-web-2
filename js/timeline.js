$(document).ready(function () {
    $(".like").on("click", function () {
        let $icon = $(this);
        let $countSpan = $icon.next(".like-count");
        let count = parseInt($countSpan.text(), 10);
        
        if ($icon.hasClass("bi-balloon-heart")) {
            $icon.addClass("bi-balloon-heart-fill").removeClass("bi-balloon-heart");
            $countSpan.text(count + 1);
        } else {
            $icon.removeClass("bi-balloon-heart-fill").addClass("bi-balloon-heart");
            $countSpan.text(count - 1);
        }
    });
});
