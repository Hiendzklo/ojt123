let loggedInUser = localStorage.getItem('userData');

        if (loggedInUser) {
            loggedInUser = JSON.parse(loggedInUser);
            
            // Hiển thị thông tin người dùng (email)
            document.getElementById('email').innerText = loggedInUser.email;
            // Hiển thị nút đăng xuất và ẩn nút đăng nhập và đăng ký
            document.getElementById('logout-button').style.display = 'inline-block';
            document.querySelector('.user-info .link').style.display = 'none'; 
            document.querySelector('.user-info a[href="./pages/login.html"]').style.display = 'none'; // Ẩn nút đăng nhập

        } else {
            // Nếu không có người dùng đã đăng nhập, chuyển hướng đến trang đăng nhập
            window.location.href = "./pages/login.html";
        }

        // Hàm đăng xuất
        function logout() {
            localStorage.removeItem('userData');
            window.location.href = "./pages/login.html";
        }


        
        /// Hàm để lưu danh sách sản phẩm vào Local Storage
        function saveProductsToLocal() {
        // Khởi tạo mảng để lưu các sản phẩm
        let products = [];

        // Lặp qua mỗi phần tử sản phẩm trên trang
        document.querySelectorAll('.product').forEach(productElement => {
        // Tạo một đối tượng sản phẩm từ thông tin trong phần tử sản phẩm
        let product = {
            id: productElement.id, // Sử dụng id của phần tử sản phẩm làm id sản phẩm
            name: productElement.querySelector('h2').innerText,
            price: productElement.querySelector('p').innerText.replace('Giá: ', ''),
            image: productElement.querySelector('img').src
        };

        // Thêm đối tượng sản phẩm vào mảng sản phẩm
        products.push(product);
    });

    // Lưu mảng sản phẩm vào Local Storage
    localStorage.setItem('products', JSON.stringify(products));
}



// Khởi tạo giỏ hàng trống
let cart = [];

// Lấy danh sách tất cả các nút "Mua ngay"
let buyButtons = document.querySelectorAll('.product button');

// Lặp qua từng nút "Mua ngay" để thêm sự kiện click
buyButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Lấy thông tin sản phẩm từ phần tử cha của nút được nhấn
        let productElement = button.closest('.product');
        let productName = productElement.querySelector('h2').innerText;
        // Trích xuất giá từ văn bản giá
        let productPrice = productElement.querySelector('p').innerText;
        let productId = productElement.id;

        // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
        let productIndex = cart.findIndex(item => item.productId === productId);
        if (productIndex !== -1) {
            // Nếu đã có, tăng quantity lên
            cart[productIndex].quantity++;
        } else {
            // Nếu chưa có, thêm sản phẩm vào giỏ hàng với quantity = 1
            cart.push({ productId: productId, productName: productName, productPrice: productPrice, quantity: 1 });
        }

        // Lưu giỏ hàng vào Local Storage
        localStorage.setItem('cart', JSON.stringify(cart));

        // Hiển thị thông tin sản phẩm và giỏ hàng trên trang web
        // Ở đây bạn có thể cập nhật giao diện để hiển thị số lượng sản phẩm trong giỏ hàng, hoặc thông tin chi tiết của giỏ hàng
    });
});




function redirectToAnotherPage() {
    window.location.href = "cart.html ";
}


