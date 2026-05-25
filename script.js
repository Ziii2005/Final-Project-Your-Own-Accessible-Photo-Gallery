// Hàm hiển thị ảnh khi di chuột hoặc dùng phím Tab (focus)
function upDate(previewPic) {
    let imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    imageDiv.innerHTML = previewPic.alt;
}

// Hàm trả về trạng thái ban đầu khi rời chuột hoặc mất focus (blur)
function unDo() {
    let imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.innerHTML = "Hover or tab over an image below to display here.";
}

// Hàm thêm thuộc tính tabindex tự động cho tất cả ảnh
function addTabFocus() {
    // Bước 9a: In thông báo ra console để kiểm tra sự kiện đã kích hoạt
    console.log("Trang đã tải xong. Đang kích hoạt vòng lặp thêm tabindex cho ảnh...");
    
    let images = document.querySelectorAll('.preview');
    
    // Bước 9b & 9c: Vòng lặp for để thêm thuộc tính tabindex
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute('tabindex', '0');
    }
}

// Bước 8: Lắng nghe sự kiện onload và gọi hàm addTabFocus
window.onload = addTabFocus;
