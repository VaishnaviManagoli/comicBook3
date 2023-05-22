AFRAME.registerComponents("infoBanner", {
    schema:{
        selectedItemId:{default:"", type:"string"}
    },
    init: function(){
        this.handleMouseLeaveEvents();
    },
    handleMouseClickEvents: function(){
        if(selectedItemId){
            fadeBackgroundE1.setAttribute("visible", true);
            fadeBackgroundE1.setAttribute("infoBanner", {
                itemId: selectedItemId,
            });
            titleE1.setAttribute("visible", false);
            cursorE1.setAttribute("position", {x:0, y:0, z:-1});
            cursorE1.setAttribute("geometry",{
                radiusInner: 0.03,
                radiusOuter: 0.04,
            });     
        } 
        else{
            fadeBackgroundE1.setAttribute("visible", false);
            titleE1.setAttribute("visible", true);
            cursorE1.setAttribute("position", {
                x:0,
                y:0,
                z: -3
            });
            cursorE1.setAttribute("geometry",{
                radiusInner: 0.08,
                radiusOuter: 0.12,
            });

            update: function (){
                const fadeBackgroundE1= document.querySelector("#fadeBackground");

                c= fadeBackgroundE1.children;
                if(c.length > 0){
                    var i ;
                    for(i=0; i<=c.length; i++){
                        fadeBackgroundE1.removeChild(c[i]);
                    }
                } else{
                    this.handleMouseClickEvents();
                };
            }
        }
    }
})