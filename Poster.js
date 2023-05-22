AFRAME.registerComponent("Poster", {
    init: function () {
      this.placesContainer = this.el;
      this.createCards()
    },
  
    createCards: function () {
      const thumbNailsRef = [
        {
          id: "Mha",
          title: "My Hero Academia",
          url: "./assets/Mha.jpg",
        },
        {
          id: "haikyuu",
          title: "Haikyuu",
          url: "./assets/haikyuu.jpg",
        },
  
        {
          id: "naruto",
          title: "Naruto",
          url: "./assets/naruto.jpg",
        },
      ];
      let prevoiusXPosition = -60;
  
      for (var item of thumbNailsRef) {
        const posX = prevoiusXPosition + 25;
        const posY = 10;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        prevoiusXPosition = posX;
  
        // Border Element
  
        var borderEl = this.createBorder(position, item.id)
        
        // Thumbnail Element
        var thumbnailE1 = this.createThumbnail(item);
        borderEl.appendChild(thumbnailE1)
  
        // Title Text Element
        var titleEl = this.createTitle(position,item);
        borderEl.appendChild(titleEl)
        
        this.placesContainer.appendChild(borderEl);
      }
    },
    createBorder: function (position, id){
      var border = document.createElement('a-entity');
      border.setAttribute('visible', true)
      border.setAttribute('geometry', {
        primitive:'ring', radiusInner: 9 , radiusOuter:10
      })
      border.setAttribute('material', {color:"purple", opacity:1})
      border.setAttribute('position', position)
      border.setAttribute('id', id)
  
      return border
    },
  
    createThumbnail: function (item){
         var thumbnail= document.createElement('a-entity');
         thumbnail.setAttribute('visible', true)
         thumbnail.setAttribute('geometry',{
          primitive: 'circle', radius:9
         })
         thumbnail.setAttribute('material',{src:item.url})
         
         return thumbnail
    },
  
    createTitle: function (position,item){
         var title= document.createElement('a-entity');
         title.setAttribute('visible', true)
         title.setAttribute('text',{
          font: "exo2bold",
          align: "center",
          width: 70,
          color: "#e65100",
          value: item.title,
         })
         const title_position=position
         title_position.y = -20
         title.setAttribute('position',title_position)
         
         return title
    }
  
    
  });
  