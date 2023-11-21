 // Maria 
 // JavaScript para mostrar/ocultar o menu de usuário
 const userIcon = document.getElementById('userIcon');
 const userMenu = document.getElementById('userMenu');

 userIcon.addEventListener('click', function () {
     if (userMenu.style.display === 'block') {
         userMenu.style.display = 'none';
     } else {
         userMenu.style.display = 'block';
     }
 });