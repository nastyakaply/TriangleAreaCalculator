function calculateArea() {
    // Получаем значения из полей ввода
    const base = parseFloat(document.getElementById('base').value);
    const height = parseFloat(document.getElementById('height').value);
    
    // Элементы для отображения ошибок
    const baseError = document.getElementById('base-error');
    const heightError = document.getElementById('height-error');
    const result = document.getElementById('result');
    
    // Сбрасываем сообщения об ошибках
    baseError.style.display = 'none';
    heightError.style.display = 'none';
    
    let isValid = true;
    
    // Проверка основания
    if (isNaN(base) || base <= 0) {
        baseError.style.display = 'block';
        isValid = false;
    }
    
    // Проверка высоты
    if (isNaN(height) || height <= 0) {
        heightError.style.display = 'block';
        isValid = false;
    }
    
    if (!isValid) {
        result.style.display = 'none';
        return;
    }
    
    // Вычисление площади
    const area = (base * height) / 2;
    
    // Отображение результата
    document.getElementById('result-value').textContent = area.toFixed(2);
    result.style.display = 'block';
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Обработка нажатия Enter
    document.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            calculateArea();
        }
    });

    // Сброс ошибок при вводе в поле основания
    document.getElementById('base').addEventListener('input', function() {
        document.getElementById('base-error').style.display = 'none';
    });

    // Сброс ошибок при вводе в поле высоты
    document.getElementById('height').addEventListener('input', function() {
        document.getElementById('height-error').style.display = 'none';
    });

    // Фокус на первое поле при загрузке
    document.getElementById('base').focus();
});

// Дополнительная функция для сброса формы
function resetForm() {
    document.getElementById('base').value = '';
    document.getElementById('height').value = '';
    document.getElementById('result').style.display = 'none';
    document.getElementById('base-error').style.display = 'none';
    document.getElementById('height-error').style.display = 'none';
    document.getElementById('base').focus();
}