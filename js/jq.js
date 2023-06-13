$(document).ready(function() {
  const html = $("html");
  const canvas = $("#scroll_anim")[0];
  const context = canvas.getContext("2d");

  const currentFrame = index => (
    `img/${index.toString().padStart(4, '0')}.png`
  )

  const frameCount = 250;

  canvas.height = 1080;
  canvas.width = 1080;
  const img = new Image();
  img.src = currentFrame(1);
  console.log(img);
  img.onload = function(){
    context.drawImage(img, 0, 0)
  }

  const updateImage = index => {
    img.src = currentFrame(index);
    context.drawImage(img, 0, 0)
  }
  $(window).on("scroll", () => {
    const scrollTop = $("html").scrollTop();
    console.log(scrollTop);
    const maxScrollTop = $("html").prop("scrollHeight") - $(window).height();
    const scrollFraction = scrollTop / maxScrollTop;
    const frameIndex = Math.min(frameCount - 1, Math.floor(scrollFraction * frameCount));

    requestAnimationFrame(() => updateImage(frameIndex + 1));
  });

  const preloadImages = () => {
    for (let i = 1; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
    }
  };

  preloadImages();





  $(document).ready(function() {
    //Initial Set for items off screen. I could not find a faster way
    $('.project').each(function(i, el) {
      $(this).toggleClass('scale', !in_viewport_or_higher(el));
    });

    //On every scroll, check to see that the items are either above the viewport or inside it.
    $(document).scroll(function(e) {

      $('.project').each(function(i, el) {
        $(this).toggleClass('scale', !in_viewport_or_higher(el));
      });

    });
