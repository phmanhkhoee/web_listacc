let fiterItem = document.querySelector('.items-links');
let fileteImages = document.querySelectorAll('.project-img');

// Xử lý lọc ảnh khi bấm nút
window.addEventListener('load', () => {
    fiterItem.addEventListener('click', (selectedItem) => {
        if (selectedItem.target.classList.contains('item-link')) {
            // Đổi trạng thái nút active
            document.querySelector('.menu-active').classList.remove('menu-active');
            selectedItem.target.classList.add('menu-active');
            
            // Lấy data-name từ nút được chọn
            let filterName = selectedItem.target.getAttribute('data-name');
            
            // Lọc ảnh
            fileteImages.forEach((image) => {
                let imageName = image.getAttribute('data-name');
                if (filterName === 'all' || imageName === filterName) {
                    image.style.display = 'block';
                } else {
                    image.style.display = 'none';
                }
            });
        }
    });
});
