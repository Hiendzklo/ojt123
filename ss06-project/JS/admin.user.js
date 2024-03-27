
let list = document.querySelectorAll(".navigation li");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};



// chuyển hướng sang home
function redirect(){
  window.location.href = "../structure.html";
}

// chuyển hướng sang giỏ hàng
function buy(){
  window.location.href = "./cart.html ";
}


function productsclick(){
  window.location.href = "./admin.product.html ";
}


function billclick(){
  window.location.href = "./admin.bill.html "
}

// Lấy dữ liệu từ localStorage
let userData = localStorage.getItem('userData');

// Chuyển đổi dữ liệu thành mảng các đối tượng người dùng
let users = JSON.parse(userData);

// Lấy thẻ tbody
let tbody = document.querySelector('tbody');

// Xóa hết các phần tử hiện có trong tbody (nếu có)
tbody.innerHTML = '';

// Biến đếm để tính số thứ tự (STT)
let count = 1;

// Thêm dữ liệu từ mảng users vào tbody
users.forEach(user => {
    // Tạo một hàng mới
    let row = document.createElement('tr');

    // Tạo ô dữ liệu cho STT và thiết lập nội dung
    let sttCell = document.createElement('td');
    sttCell.textContent = count; // Sử dụng biến đếm làm số thứ tự
    count++; // Tăng biến đếm sau mỗi hàng

    // Tạo các ô dữ liệu cho email và password
    let mailCell = document.createElement('td');
    mailCell.textContent = user.email;

    let passwordCell = document.createElement('td');
    passwordCell.textContent = user.password;

    let actionCell = document.createElement('td');

    // Tạo nút "Khóa"
    let lockButton = document.createElement('button');
    lockButton.textContent = 'Khóa';
    lockButton.addEventListener('click', () => {
        // Xử lý khi nút "Khóa" được nhấn
        console.log('Khóa người dùng:', user);
    });

    // Tạo nút "Mở"
    let unlockButton = document.createElement('button');
    unlockButton.textContent = 'Mở';
    unlockButton.addEventListener('click', () => {
        // Xử lý khi nút "Mở" được nhấn
        console.log('Mở khóa người dùng:', user);
    });

    // Thêm nút "Khóa" và "Mở" vào ô hành động
    actionCell.appendChild(lockButton);
    actionCell.appendChild(unlockButton);

    // Thêm các ô dữ liệu vào hàng
    row.appendChild(sttCell);
    row.appendChild(mailCell);
    row.appendChild(passwordCell);
    row.appendChild(actionCell);

    // Thêm hàng vào tbody
    tbody.appendChild(row);
});
