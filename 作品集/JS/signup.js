function userNameonblus() {
    var username = document.getElementById("username");
    var re = /^[a-zA-Z_]{3,}$/;
    if (username.value == "") {
        document.getElementById('userNameerror').innerText = "請輸入使用者名稱";
    }
    else if (username.value.length < 3 || username.value.length > 18) {
        console.log(username.value);
        document.getElementById('YHMerror').innerText = "格式錯誤,長度至少3位";
    }
    else if (!re.test(username.value)) {

        document.getElementById('YHMerror').innerText = "格式錯誤,只能包含英文字母";
    }
    else {
        document.getElementById('YHMerror').innerText = "";
    }
}
function userNameonfocu() {
    document.getElementById('userNameerror').innerText = "";
}
//password
function pwdonblus() {
    var password = document.getElementById("password");
    var re = /^(?=.*\d)(?=.*[a-zA-Z])[\da-zA-Z]{6,}$/;

    if (password.value == "") {
        document.getElementById('pwderror').innerText = "請輸入密碼";
    }
    else if (password.value.length < 6) {
        document.getElementById('pwderror').innerText = "長度至少6位";
    }

    else if (!re.test(password.value)) {
        document.getElementById('pwderror').innerText = "必須包含英文和數字";
    }
    else {
        document.getElementById('pwderror').innerText = "";
    }
}
function pwdonfocu() {
    document.getElementById('pwderror').innerText = "";
}

//confirm
function cpwdonblus() {
    var password = document.getElementById("password");
    var confirmPassword = document.getElementById("confirmPassword");
    if (confirmPassword.value == "") {
        document.getElementById('cpwderror').innerText = "請確認密碼";
    }
    else if (password.value != confirmPassword.value) {
        document.getElementById('cpwderror').innerText = "輸入不一致";
    }
    else {
        document.getElementById('cpwderror').innerText = "";
    }
}
function cpwdonfocu() {
    document.getElementById('cpwderror').innerText = "";
}

//Email
function emailonblus() {
    var email = document.getElementById("email");
    var re = /[a-zA-Z0-9]{1,10}@[a-zA-Z0-9]{1,5}\.[a-zA-Z0-9]{1,5}/;
    if (email.value == "") {
        document.getElementById('emailerror').innerText = "請輸入電子郵件";
    }
    else if (!re.test(email.value)) {
        document.getElementById("emailerror").innerHTML = "電子郵件格式不正确";
    }
    else {
        document.getElementById('emailerror').innerText = "";
    }
}
function emailonfocu() {
    document.getElementById('emailerror').innerText = "";
}

//Phone
function phoneonblus() {
    var phone = document.getElementById("phone");
    // var re = /^1\d{10}$/;
    var re = /^09[0-9]{8}$/;
    if (phone.value == "") {
        document.getElementById('phoneerror').innerText = "請輸入行動電話";
    }
    else if (!re.test(phone.value)) {
        document.getElementById('phoneerror').innerText = "電話格式輸入錯誤";
    }
    else {
        document.getElementById('phoneerror').innerText = "";
    }
}
function phoneonfocu() {
    document.getElementById('phoneerror').innerText = "";
}

//Success
document.getElementById("submit").onclick = function () {
    alert("註冊成功");
};

