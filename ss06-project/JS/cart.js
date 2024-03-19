document.addEventListener("DOMContentLoaded", function() {
    console.log("Trang cart.html đã được tải hoàn chỉnh.");
    // Lấy dữ liệu giỏ hàng từ Local Storage
    let cartData = JSON.parse(localStorage.getItem("cart"));

    // Kiểm tra xem giỏ hàng có dữ liệu không
    if (cartData && cartData.length > 0) {
        let tableBody = document.querySelector("#cart-table tbody");

        // Duyệt qua từng sản phẩm trong giỏ hàng và thêm vào bảng
        cartData.forEach(item => {
            let row = tableBody.insertRow();
            row.insertCell(0).textContent = item.productId;
            row.insertCell(1).textContent = item.productName;
            row.insertCell(2).textContent = item.productPrice.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
            row.insertCell(3).textContent = item.quantity;
        });
    } else {
        // Hiển thị thông báo nếu giỏ hàng trống
        let table = document.querySelector("#cart-table");
        table.innerHTML = "<p>Giỏ hàng trống</p>";
    }
});





 // Mảng lưu trữ thông tin số lượng của từng sản phẩm
 let quantities = {};

 // JavaScript để thêm các nút tăng giảm số lượng vào từng hàng của bảng và xử lý sự kiện
function addQuantityButtonsToCartTable() {
    let editQuantityCells = document.querySelectorAll("#cart-table tbody tr td:nth-child(4)");
    editQuantityCells.forEach((cell, index) => {
        let productElement = cell.closest("tr");
        let productId = productElement.id; // Lấy id của sản phẩm

        // Kiểm tra xem nút đã được thêm vào chưa
        if (!cell.querySelector("button")) {
            let increaseButton = document.createElement("button");
            increaseButton.textContent = "+";
            increaseButton.addEventListener("click", () => {
                increaseQuantity(productId);
            });
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
     quantities[productId]++;
     updateQuantityDisplay(productId);
 }

 // Hàm giảm số lượng
 function decreaseQuantity(productId) {
     if (quantities[productId] > 1) {
         quantities[productId]--;
         updateQuantityDisplay(productId);
     }
 }

 // Hàm cập nhật hiển thị số lượng
 function updateQuantityDisplay(productId) {
     let quantityCell = document.querySelector(`#cart-table tbody tr:nth-child(${productId}) td:nth-child(4)`);
     quantityCell.textContent = quantities[productId];
 }

 // Gọi hàm thêm nút và khởi tạo số lượng khi trang đã tải xong
 window.addEventListener("DOMContentLoaded", () => {
     addQuantityButtonsToCartTable();
 });
