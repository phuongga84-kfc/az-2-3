function openNoti() {
    document.getElementById("shadow").classList.add("active");
    document.querySelector(".red").style.display = "none"; // Ẩn chấm đỏ khi mở thông báo
}

function closeNoti() {
    document.getElementById("shadow").classList.remove("active");

    // Hiển thị lại chấm đỏ sau khi đóng thông báo
    setTimeout(() => {
        document.querySelector(".red").style.display = "block";
    }, 3000); // Hiện lại sau 3 giây
}
