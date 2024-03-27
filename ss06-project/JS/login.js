document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn form gửi đi

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    // Lấy dữ liệu người dùng từ localStorage
    let userData = localStorage.getItem('userData');
    
    // Kiểm tra xem dữ liệu có tồn tại không
    if (userData) {
        // Chuyển đổi dữ liệu từ chuỗi JSON sang đối tượng JavaScript
        userData = JSON.parse(userData);
        
        // Kiểm tra xem email và mật khẩu nhập vào có khớp với dữ liệu trong localStorage không
        let userFound = userData.find(function(user) {
            return user.email === email && user.password === password;
        });

        if (userFound) {
            // Đăng nhập thành công, chuyển hướng đến trang khác
            window.location.href = "../structure.html";
            alert("Đăng nhập thành công!");
        } else {
            // Đăng nhập thất bại
            alert("Email hoặc mật khẩu không chính xác.");
        }
    } else {
        // Không có dữ liệu trong localStorage, có thể là chưa đăng ký
        alert("Bạn chưa đăng ký tài khoản.");
    }
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.signup-link').addEventListener('click', function(event) {
        event.preventDefault(); // Ngăn chặn hành động mặc định của liên kết
        window.location.href = "register.html"; // Chuyển hướng đến trang HTML đăng ký
    });
});
