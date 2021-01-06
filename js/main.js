var elem = document.querySelector(".grid-container");
      imagesLoaded( elem, () => {
        var msnry = new Masonry(elem, {
        // options
        itemSelector: ".grid-item",
        columnWidth: 240,
        gutter: 0,
        isFitWidth: true
      });
      } )