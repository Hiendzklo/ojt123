document.addEventListener("DOMContentLoaded", function() {
    console.log("Trang admin.bill.html đã được tải hoàn chỉnh.");
    // Lấy dữ liệu giỏ hàng từ Local Storage
    let cartData = JSON.parse(localStorage.getItem("cart"));

    // Kiểm tra xem giỏ hàng có dữ liệu không
    if (cartData && cartData.length > 0) {
        let tableBody = document.querySelector("#bill-table-body");

        // Duyệt qua từng sản phẩm trong giỏ hàng và thêm vào bảng
        cartData.forEach(item => {
            let row = document.createElement("tr");
            let productNameCell = document.createElement("td");
            productNameCell.textContent = item.productName;
            let quantityCell = document.createElement("td");
            quantityCell.textContent = item.quantity;

            // Kiểm tra giá sản phẩm có hợp lệ không
            let productPrice = parseFloat(item.productPrice);
            if (!isNaN(productPrice)) {
                // Tính toán và hiển thị tổng doanh thu cho mỗi sản phẩm
                let totalSales = item.quantity * productPrice;
                let totalSalesCell = document.createElement("td");
                totalSalesCell.textContent = totalSales.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });

                // Thêm các ô dữ liệu vào hàng
                row.appendChild(productNameCell);
                row.appendChild(quantityCell);
                row.appendChild(totalSalesCell);

                // Thêm hàng vào tbody
                tableBody.appendChild(row);
            } else {
                // Nếu giá sản phẩm không hợp lệ, hiển thị "Không xác định"
                let totalSalesCell = document.createElement("td");
                totalSalesCell.textContent = "Không xác định";

                // Thêm các ô dữ liệu vào hàng
                row.appendChild(productNameCell);
                row.appendChild(quantityCell);
                row.appendChild(totalSalesCell);

                // Thêm hàng vào tbody
                tableBody.appendChild(row);
            }
        });
    } else {
        // Hiển thị thông báo nếu giỏ hàng trống
        let table = document.querySelector("#bill-table-body");
        table.innerHTML = "<tr><td colspan='3'>Không có dữ liệu sản phẩm</td></tr>";
    }
});
