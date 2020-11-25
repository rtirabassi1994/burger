  
$(function() {

    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newBurg = {
            name: $("#burgerAnswer").val().trim()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurg
        }).then(
            function() {
                console.log(`created new burger`)

                location.reload();
            }
        );
    });


    $(".eat-burger").on("click", function(event) {
        var id = $(this).data("id");
        var verifyEat = $(this).data("neweat") === false;

        var verifyEatState = {
            devour: verifyEat
        };
        console.log(`id: ${id}
eaten: ${verifyEatState.devour}`);

        $.ajax(`/api/burgers/${id}`, {
            type: "PUT",
            data: verifyEatState
        }).then(
            function() {
                console.log(`changed eaten state to: ${verifyEat}`);
                location.reload();
            }
        );
    });

}) 