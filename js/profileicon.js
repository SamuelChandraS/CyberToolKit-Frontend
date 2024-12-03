const profileIcon = document.querySelector('.profile-icon-container');
const dropdownMenu = document.createElement('div');
const currentPage = window.location.pathname;

profileIcon.addEventListener('click', () => {
    if (dropdownMenu.parentElement) {
        dropdownMenu.classList.toggle('active');
        return;
    }
    
    dropdownMenu.className = 'dropdown-menu';
    if (currentPage.includes('profile.html') || currentPage.includes('dashboard-after-login-or-register.html') || currentPage.includes('ToolsList.html') || currentPage.includes('Wireshark.html') || currentPage.includes('bookmark.html')) {
        dropdownMenu.innerHTML = `
            <div class="dropdown-item" data-action="profile">Profile</div>
            <div class="dropdown-item" data-action="bookmark">Bookmark</div>
            <div class="dropdown-item" data-action="logout">Logout</div>
        `;
    } else {
        
        dropdownMenu.innerHTML = `
            <div class="dropdown-item" data-action="login">Login</div>
            <div class="dropdown-item" data-action="register">Register</div>
        `;
    }
    profileIcon.appendChild(dropdownMenu);
});

document.addEventListener('click', (e) => {
    if (!profileIcon.contains(e.target) && dropdownMenu.parentElement) {
        dropdownMenu.classList.remove('active');
    }
});
const overlayContainer = document.createElement('div');

dropdownMenu.addEventListener('click', (e) => {
    const action = e.target.dataset.action;
    if (action === 'profile') {
        window.location.href = '../html/profile.html';
    } else if (action === 'login') {
        window.location.href = '../html/login.html';
    } else if (action === 'register') {
        window.location.href = 'register.html';
    } else if (action === 'logout') {
        window.location.href = 'dashboard.html';
    } else if (action === 'bookmark') {
        window.location.href = 'bookmark.html';
    } 
});
