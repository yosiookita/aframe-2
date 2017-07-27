
$(window).on("load",function(){

    //クリックしたら打つ
    $(window).on("click",louncher);

});

function louncher(){
    //カメラのポジションをセット
    var cameraPos = document.querySelector("a-camera").object3D.position;
    var cameraPosX = cameraPos.x;
    var cameraPosY = cameraPos.y;
    var cameraPosZ = cameraPos.z;

    //STEP01
    //空のタグ要素(<a-entity></a-entity>)を作成
    var sphereEntity = document.createElement("a-entity");

    //STEP02
    //矩形、位置、回転を設定する
    //<a-obj-model scale="30 30 30"  position="0 10 -1010" src="#cloud-obj" mtl="#cloud-mtl"></a-obj-model>
    $(sphereEntity).attr({
        "hit" : "",
        "dynamic-body" : "mass:0.2;",
        velocity : "0 0 -10",
        geometry:"primitive: box",
        position : cameraPosX+" "+cameraPosY+" "+cameraPosZ,
    });

    //STEP03
    //アペンドする
    $("a-scene").append(sphereEntity);
}


AFRAME.registerComponent('hit', {

    init : function(){
        this.el.addEventListener('collide', function (e) {
          console.log('Player has collided with body #' + e.detail.body.id);
          e.detail.target.el;  // Original entity (playerEl).
          e.detail.body.el;    // Other entity, which playerEl touched.
          e.detail.contact;    // Stats about the collision (CANNON.ContactEquation).
          e.detail.contact.ni; // Normal (direction) of the collision (CANNON.Vec3).
        });
    }

});
