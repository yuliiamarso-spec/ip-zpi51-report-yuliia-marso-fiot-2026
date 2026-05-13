// Функція для показу вкладки за її id
function showTab(tabId) {
    // Знаходимо всі вкладки всередині контейнера #output
    const tabs = document.querySelectorAll('#output .tab-content');
    
    // Ховаємо всі вкладки
    tabs.forEach(tab => tab.style.display = 'none');
    
    // Показуємо вкладку з переданим id
    document.getElementById(tabId).style.display = 'block';
}
