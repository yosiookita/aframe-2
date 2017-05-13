$(window).on("load",function(){

    var sphereEntity = document.createElement("a-entity");
    $(sphereEntity).attr({
        geometry : "primitive: sphere; radius: 1.5",
        position : "0 1 -5",
        rotation : "0 0 0"
    });
    $("a-scene").append(sphereEntity);

});
