export function arrowListener(){
        
    let teamArrows = document.querySelectorAll('.team-arrow');
    teamArrows.forEach(arrow => {
        arrow.addEventListener('click', () => {
            if(arrow.parentNode.parentElement.classList.contains('close')){
            arrow.parentNode.parentElement.classList.remove('close');
            }else{
            arrow.parentNode.parentElement.classList.add('close');
            }
        });
    });

}