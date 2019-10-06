$(document).ready(function(){
    $("#mainTitle").addClass("pink");

    $("#colorChange").click(changeColor);

    function changeColor() {
        if ($("#mainTitle").hasClass("pink")) {
            $("#mainTitle").removeClass("pink");
            $("#mainTitle").addClass("blue");
        } 
        else if ($("#mainTitle").hasClass("blue")) {
            $("#mainTitle").removeClass("blue");
            $("#mainTitle").addClass("pink");
        } 
        else {
            $("#mainTitle").addClass("pink");
        }
    }

})