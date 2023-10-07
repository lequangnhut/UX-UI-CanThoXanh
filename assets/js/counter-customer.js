document.addEventListener('DOMContentLoaded', function () {
    // Kiểm tra xem localStorage đã được hỗ trợ hay chưa
    if (typeof (Storage) !== 'undefined') {
        // Kiểm tra xem có lượt truy cập đã lưu trong localStorage chưa
        if (localStorage.getItem('counter')) {
            // Nếu có, cập nhật giá trị và hiển thị
            let counter = parseInt(localStorage.getItem('counter'));
            document.getElementById('counter').textContent = counter;
            localStorage.setItem('counter', counter + 1);
        } else {
            // Nếu chưa, tạo lượt truy cập đầu tiên và lưu vào localStorage
            localStorage.setItem('counter', 1);
        }
    } else {
        alert('Trình duyệt của bạn không hỗ trợ localStorage, không thể đếm lượt truy cập.');
    }
});
