AFRAME.registerComponent("cursor-listener",{
    schema: {
        selectedItemId: {
            default: "",
            type: "string"
        },
    },
    init: function(){
        this.handleMouseEnterEvents();
        this.handleMouseLeaveEvents();
    },
    handlePlacesListState: function(){
        const id = this.el.getAttribute("id");
        const placesId = ["Mha", "naruto", "haikyuu"];
        if(placesId.includes(id)){
            const placeContainer = document.querySelector("#places-container");
            placeContainer.setAttribute("cursor-listener",{
                selectedItemId : id ,

            });
            this.el.setAttribute("material",{
                colour: "#D768304",
                opacity: 1,

            });
        }
    },
    handleMouseEnterEvents: function(){
        this.el.addEventListener("mouseEnter", ()=>{
            this.handlePlacesListState();
        });
    },
    handleMouseLeaveEvents: function(){
        this.el.addEventListener("mouseLeave", ()=>{
            const{selectedItemId}= this.data();
            if(selectedItemId){
                const el= document.querySelector(`#${selectedItemId}`);
                const id= el.getAttribute("id");
                if(id==selectedItemId){
                    el.setAttribute("material",{
                        colour: "#0077cc",
                        opacity: 1,
                    });
                }
            }
        });
    },
});