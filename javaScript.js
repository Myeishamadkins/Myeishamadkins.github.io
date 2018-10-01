function main() {
    // SET UP CLICK LISTENERS
    $(".headline-btns").click(function() {
        $(".main-div-group").hide(450);
        var id = $(this).attr("id");
        var div = "#" + id.replace("btn", "div");
        $(div).show(500);
    });
}

$(main);
