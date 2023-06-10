const html = document.documentElement;
const canvas = document.getElementById("scroll_anim");
const context = canvas.getContext("2d");
// ЗАМЕНА КАРТИНКИ
const currentFrame = index => (
  `img/${index.toString().padStart(4, '0')}.png`
)
// КОЛИЧЕСТВО КАДРОВ
const frameCount = 250;
// НАСТРОЙКИ CANVAS
canvas.height = 1080;
canvas.width = 1080;
const img = new Image();
img.src = currentFrame(1);
console.log(img);
img.onload = function(){
  context.drawImage(img, 0, 0)
}
// ОБНОВЛЕНИЕ ФРЕЙМОВ
const updateImage = index => {
  img.src = currentFrame(index);
  context.drawImage(img, 0, 0)
}
// ОКРУГЛЕНИЕ ЧИСЕЛ
window.addEventListener("scroll", () =>{
  const scrollTop = html.scrollTop;
  console.log(scrollTop);
  const maxScrollTop = html.scrollHeight - window.innerHeight;
  const scrollFraction = scrollTop / maxScrollTop;
  const frameIndex = Math.min(frameCount - 1, Math.floor(scrollFraction * frameCount));
// ОБНОВЛЕНИЕ КАРТИНКИ
  requestAnimationFrame( () => updateImage(frameIndex + 1))
})
// ПЛАВНАЯ АНИМАЦИЯ
const preloadImages = () => {
  for (let i = 1; i < frameCount; i++){
    const img = new Image();
    img.src = currentFrame(i);
  }
};

preloadImages();
