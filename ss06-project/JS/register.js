document.getElementById('signup-form').addEventListener('submit', function(event) {
  event.preventDefault();
  let marketingCheckbox = document.getElementById('marketing');
  let isMarketingChecked = marketingCheckbox.checked;

  // Kiểm tra xem form có đầy đủ thông tin không
  let isValid = true;
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;

  if (!email || !password || !isMarketingChecked) {
      isValid = false;
      alert("Vui lòng nhập đầy đủ thông tin và đồng ý điều khoản.");
      return; // Dừng lại nếu thiếu thông tin
  }

  // Kiểm tra xem email đã tồn tại trong dữ liệu đã lưu trữ hay không
  let savedUserData = JSON.parse(localStorage.getItem('userData')) || [];
  let isEmailExists = savedUserData.some(function(userData) {
      return userData.email === email;
  });

  // Nếu email đã tồn tại, hiển thị thông báo và dừng lại
  if (isEmailExists) {
      alert("Email này đã được sử dụng, vui lòng chọn một email khác.");
      return;
  }

  // Nếu form hợp lệ và email không trùng, thực hiện đăng ký
  if (isValid && !isEmailExists) {
      // Thêm email và password mới vào mảng dữ liệu đã lưu
      savedUserData.push({ email: email, password: password });

      // Lưu mảng userData mới vào local storage
      localStorage.setItem('userData', JSON.stringify(savedUserData));

      // Hiển thị thông báo đăng ký thành công và chuyển hướng đến trang đăng nhập
      alert("Đăng kí thành công!");
      window.location.href = "login.html";
      // Hiển thị thông tin người dùng
      displayUserData(savedUserData);

      
  }
});

// Phần code khác không thay đổi


document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.login-link').addEventListener('click', function(event) {
      event.preventDefault();
      window.location.href = "login.html";
  });
});
