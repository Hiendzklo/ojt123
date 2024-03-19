// Lưu thông tin người dùng vào local storage khi nhấn nút Save
document.getElementById('signup-link').addEventListener('click', function() {
            var firstName = document.getElementById('first-name').value;
            var lastName = document.getElementById('last-name').value;
            var email = document.getElementById('email').value;
            var password = document.getElementById('password').value;

            // Tạo một đối tượng chứa thông tin người dùng
            var userData = {
                email: email,
                password: password
            };

            // Chuyển đối dữ liệu thành chuỗi JSON
            var jsonData = JSON.stringify(userData);

            // Lưu dữ liệu vào local storage với key là 'userData'
            localStorage.setItem('userData', jsonData);
        });

        // Lấy thông tin người dùng từ local storage khi trang web được load
        window.addEventListener('load', function() {
            var savedUserData = localStorage.getItem('userData');

            if (savedUserData) {
                // Chuyển đổi dữ liệu từ chuỗi JSON thành đối tượng JavaScript
                var parsedUserData = JSON.parse(savedUserData);

                // Đặt giá trị của các ô input thành thông tin người dùng đã lưu
                document.getElementById('first-name').value = parsedUserData.firstName;
                document.getElementById('last-name').value = parsedUserData.lastName;
                document.getElementById('email').value = parsedUserData.email;
                document.getElementById('password').value = parsedUserData.password;
            }
        });


        document.getElementById('signup-form').addEventListener('submit', function(event) {
      event.preventDefault();
      let marketingCheckbox = document.getElementById('marketing');
      let isMarketingChecked = marketingCheckbox.checked;     
      // Kiểm tra xem form có đầy đủ thông tin không
      let isValid = true;
      let firstName = document.getElementById('first-name').value;
      let lastName = document.getElementById('last-name').value;
      let email = document.getElementById('email').value;
      let password = document.getElementById('password').value;
      
      if (  !email || !password|| !isMarketingChecked) {
        isValid = false;
        alert("Vui lòng nhập đầy đủ thông tin và đồng ý điều khoản.");
        return; // Dừng lại nếu thiếu thông tin
      }

      // Nếu form hợp lệ, thực hiện đoạn mã tiếp theo
      console.log('Form submitted!');
      event.target.reset();

      // Nếu form hợp lệ, chuyển hướng đến trang HTML đăng nhập và hiển thị thông báo
      if (isValid) {
        window.location.href = "login.html";
        alert("Đăng kí thành công!");
      }
    });
    // nhấn vào Already have an account?Sign in( chuyển hướng tới trang đang nhập )
    document.addEventListener('DOMContentLoaded', function() {
        document.querySelector('.login-link').addEventListener('click', function(event) {
            event.preventDefault(); // Ngăn chặn hành động mặc định của liên kết
            window.location.href = "login.html"; // Chuyển hướng đến trang HTML đăng ký
        });
    });