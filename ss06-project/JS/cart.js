
    function render() {
        // console.log("Trang cart.html đã được tải hoàn chỉnh.");
    // Lấy dữ liệu giỏ hàng từ Local Storage
    let cartData = JSON.parse(localStorage.getItem("cart"));

    // Kiểm tra xem giỏ hàng có dữ liệu không
    if (cartData && cartData.length > 0) {
        let tableBody = document.querySelector("#cart-table tbody");

        // xóa các phần tử cũ có trong bảng khi quantity thay đổi
        tableBody.innerHTML = "";
    
        // Duyệt qua từng sản phẩm trong giỏ hàng và thêm vào bảng
        cartData.forEach(item => {
            let row = tableBody.insertRow();    
            row.insertCell(0).textContent = item.productId;
            row.insertCell(1).textContent = item.productName;

            // Trích xuất giá từ chuỗi HTML của giá sản phẩm
            let priceString = item.productPrice;
            let price = parseFloat(priceString.replace(/[^\d]/g, '')); // Loại bỏ tất cả ký tự không phải số từ chuỗi

            row.insertCell(2).textContent = price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
            row.insertCell(3).textContent = item.quantity ;

            // Tính toán và hiển thị tổng tiền cho mỗi sản phẩm
            let total = item.quantity * price;
            row.insertCell(4).textContent = total.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
        });
    } else {
        // Hiển thị thông báo nếu giỏ hàng trống
        let table = document.querySelector("#cart-table");
        table.innerHTML = "<p>Giỏ hàng trống</p>";
    }
    }

    render()






function comehome(){
    window.location.href = "../structure.html";
}



  // Mảng lưu trữ thông tin số lượng của từng sản phẩm
 let quantities = {};

 // JavaScript để thêm các nút tăng giảm số lượng vào từng hàng của bảng và xử lý sự kiện
function addQuantityButtonsToCartTable() {
    let cartData = JSON.parse(localStorage.getItem("cart"));
    let editQuantityCells = document.querySelectorAll("#cart-table tbody tr td:nth-child(4)");
    editQuantityCells.forEach((cell, index) => {
        let productElement = cell.closest("tr");
        let productId = cartData[index].productId; // Lấy id của sản phẩm
        // console.log(productId);
        // Kiểm tra xem nút đã được thêm vào chưa
        if (!cell.querySelector("button")) {
            let increaseButton = document.createElement("button");
            increaseButton.textContent = "+";
            increaseButton.addEventListener("click", () => increaseQuantity(productId))
                
           
            cell.appendChild(increaseButton);

            let decreaseButton = document.createElement("button");
            decreaseButton.textContent = "-";
            decreaseButton.addEventListener("click", () => {
                decreaseQuantity(productId);
            });
            cell.appendChild(decreaseButton);
        }

        // Khởi tạo số lượng mặc định là 1 cho mỗi sản phẩm
        quantities[productId] = 1;
    });
}


 // Hàm tăng số lượng
 function increaseQuantity(productId) {
    let cartData = JSON.parse(localStorage.getItem("cart"));
        console.log(productId);
    
    // b1: dua vao id de tim vi tri product trong cart can duoc tang
    let index = cartData.findIndex(item => item.productId === productId);

    if (index !== -1) {
        // Tăng số lượng sản phẩm
        cartData[index].quantity++;
        // Cập nhật giỏ hàng trên Local Storage
        localStorage.setItem("cart", JSON.stringify(cartData));
        // Gọi lại hàm render để cập nhật giao diện
        render();
        addQuantityButtonsToCartTable();
        // window.location.reload();

    }


 }

 // Hàm giảm số lượng
 function decreaseQuantity(productId) {
    let cartData = JSON.parse(localStorage.getItem("cart"));
    console.log(productId);
    // Tìm vị trí sản phẩm trong giỏ hàng dựa trên productId
    let index = cartData.findIndex(item => item.productId === productId);

    if (index !== -1 && cartData[index].quantity > 1) {
        // Giảm số lượng sản phẩm nếu số lượng lớn hơn 1
        cartData[index].quantity--;
        // Cập nhật giỏ hàng trên Local Storage
        localStorage.setItem("cart", JSON.stringify(cartData));
        // Gọi lại hàm render để cập nhật giao diện
        render();
        addQuantityButtonsToCartTable();
        // window.location.reload();

    }
 }

 // Hàm cập nhật hiển thị số lượng
 function updateQuantityDisplay(productId) {
     let quantityCell = document.querySelector(`#cart-table tbody tr:nth-child(${productId}) td:nth-child(4)`);
     quantityCell.textContent = quantities[productId];
 }

 // Gọi hàm thêm nút và khởi tạo số lượng khi trang đã tải xong

     addQuantityButtonsToCartTable();
 