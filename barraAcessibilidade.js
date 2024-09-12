

const widget = new window.VLibras.Widget('https://vlibras.gov.br/app');
const toggleButton = document.getElementById('toggleVlibras');
const buttonIcon = document.getElementById("buttonIcon");
const darkmode = document.getElementById("botãoEscuro");
const lightmode = document.getElementById("botãoClaro");
let zoomLevel= 1;
let vlibrasActive = false;

toggleButton.addEventListener('click', () => {
    const vlibrasElement = document.querySelector('[vw]');
    if (vlibrasActive) {
        vlibrasElement.style.display = 'none';
        buttonIcon.innerHTML = '<img id="buttonIcon"src="img/libras-logo.svg" alt="librasSimboolo">';
    } else {
        vlibrasElement.style.display = 'block';
        buttonIcon.innerHTML = '<img id="buttonIcon"src="img/libras-logo.svg" alt="librasSimboolo">';
    }
    vlibrasActive = !vlibrasActive;
});

darkmode.addEventListener('click' , function(){
    if (document.body.classList.contains('light-theme')){
    document.body.classList.add('dark-theme')
    document.body.classList.remove('light-theme')
    }
}
)
lightmode.addEventListener('click' , function(){
    if(document.body.classList.contains('dark-theme'))
    document.body.classList.add('light-theme')
    document.body.classList.remove('dark-theme')
}
)
document.getElementById('botãoMaisZoom').addEventListener('click' , () =>{
    zoomLevel += 0.1;
    document.body.style.transform = `scale(${zoomLevel})`
    document.querySelector('.barra').style.transform = `scale(${1/zoomLevel})`;

})
document.getElementById('botãoMenosZoom').addEventListener('click' , () =>{
    zoomLevel = Math.max(0.1, zoomLevel - 0.1); // Diminui o nível de zoom, com um mínimo de 0.1
    document.body.style.transform = `scale(${zoomLevel})`;
    document.querySelector('.barra').style.transform = `scale(${1/zoomLevel})`;
})