    // 000-Séquence titre en fondu
    document.addEventListener('DOMContentLoaded', function () {
        const body = document.body;

        /// COVER DU MUSEE
        const wCover = document.createElement('div');
        wCover.className = 'wCover';
        body.appendChild(wCover);

        body.classList.add('hide-content');
    
        wCover.innerHTML = "<p>Le Musée de l'IA</p>";

        /// COVER DES INFOS
        // const wDisclaimer = document.createElement('div');
        // wDisclaimer.className = 'wCover';
        // wCover.appendChild(wDisclaimer);

        //// CREATION DE DIV 
        const wDisclaimerContent = document.createElement('div');
        wDisclaimerContent.className = 'wDisclaimerContent';
        wCover.appendChild(wDisclaimerContent);

        //CONTENU DE DIV
        wDisclaimerContent.innerHTML = "<p>Pour profiter d’une expérience immersive, l’utilisation d’un ordinateur et d’un casque audio est recommandée.</p>";

        const wBlock1 = document.createElement('img');
        wBlock1.src = 'assets/icons/headset.svg';
        wBlock1.className = 'wBlock1';
        wDisclaimerContent.appendChild(wBlock1);

        const wBlock2 = document.createElement('img');
        wBlock2.src = 'assets/icons/computer.svg';
        wBlock2.className = 'wBlock2';
        wDisclaimerContent.appendChild(wBlock2);

        // TEXT A CHANGER ICI                       <<<==============
            
        setTimeout(()    =>  {
            wDisclaimerContent.querySelector('p').style.opacity = '1';
            wBlock1.style.opacity = '1';
            wBlock2.style.opacity = '1';

            setTimeout(()   => {
                wDisclaimerContent.style.transition = 'opacity 2s ease';
                wDisclaimerContent.style.opacity = '0';
            wBlock1.style.transition = 'opacity 2s ease';
            wBlock2.style.transition = 'opacity 2s ease';
            wBlock1.style.opacity = '0';
            wBlock2.style.opacity = '0';

                setTimeout(() => {
                wCover.querySelector('p').style.opacity = '1';
                
            wDisclaimerContent.removeChild(wBlock1);
            wDisclaimerContent.removeChild(wBlock2);

            
                    setTimeout(() => {
                    wCover.style.transition = 'opacity 2s ease';
                    wCover.style.opacity = '0';
                    body.style.backgroundImage = 'url("assets/wBackground.png")';
    
                        setTimeout(() => {
                        body.removeChild(wCover);
                        wCover.removeChild(wDisclaimerContent);
                        }, 2600);
                    }, 2500);
                }, 1400);
            }, 1250);
        }, 250);
    });

// 000-Animation de la porte vers la ROOM 1
function zoomDoor() {
    const scalingElement = document.querySelector('.door');
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.appendChild(overlay);

    setTimeout(() => {
        overlay.style.opacity = '1';
        scalingElement.style.transform = 'scale(2)';

        setTimeout(() => {
        window.location.href = "room1.html" ;
        }, 1500); 
        // Mettre le html de la ROOM 1                <<<=========
    }, 0)}

// // Fonction pour afficher l'overlay avant de lancer le lien
//     function showOverlay() {
//         const wOverlay = document.createElement('div');
//         wOverlay.id='transitionOverlay';
//         document.body.appendChild(wOverlay);
//         const overlay = document.getElementById('transitionOverlay');
        
//         setTimeout(() => {
//             transitionOverlay.style.opacity = '1';

//         setTimeout(function() {
// //          CHANGER DIRECTION PAGE 3                        <<=============
//             window.location.href = "room1.html"; 
//         }, 1000); 
//     },0);
//     }