// Gestisci il click sul pulsante di ricerca
searchButton.addEventListener('click', function (event) {
    event.preventDefault();
    searchButton.style.display = 'none';
    searchForm.style.display = 'flex';
    document.querySelector('input[type="search"]').style.display = 'block';
    document.querySelector('button[type="submit"]').style.display = 'inline-block';
    returnButton.style.display = 'inline-block';
    
    // Mostra il div searchExpanded
    searchExpanded.style.display = 'flex';
  
    // Se lo schermo è più piccolo di 400px, nascondi gli altri elementi <li>
    if (window.innerWidth < 400) {
      const otherNavItems = document.querySelectorAll('.navbar-nav.flex-row li:not(:nth-child(2))');
      otherNavItems.forEach(item => {
        item.style.display = 'none';
      });
    }
  
    // Se lo schermo è più piccolo di 400px, nascondi il logo durante la ricerca
    if (window.innerWidth < 400) {
      document.querySelector('.navbar-brand').classList.toggle('d-none');
    }
  });
  
  // Gestisci il click sul pulsante di ritorno
  returnButton.addEventListener('click', function (event) {
    event.preventDefault();
    searchButton.style.display = 'inline-block';
    searchForm.style.display = 'none';
    document.querySelector('input[type="search"]').style.display = 'none';
    document.querySelector('button[type="submit"]').style.display = 'none';
    returnButton.style.display = 'none';
    
    // Nascondi il div searchExpanded
    searchExpanded.style.display = 'none';
  
    // Mostra di nuovo gli altri elementi <li> solo se lo schermo è inferiore a 400px
    if (window.innerWidth < 400) {
      const otherNavItems = document.querySelectorAll('.navbar-nav.flex-row li:not(:nth-child(2))');
      otherNavItems.forEach(item => {
        item.style.display = 'inline-block';
      });
    }
  
    // Rimuovi la classe "show-search" per nascondere il div searchExpanded
    document.querySelector('.navbar-nav.flex-row').classList.remove('show-search');
  
    // Riporta il logo alla visualizzazione normale
    document.querySelector('.navbar-brand').classList.remove('d-none');
  });

