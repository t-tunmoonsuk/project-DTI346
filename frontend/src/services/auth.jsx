// services/auth.js

// ป้องกัน users format เพี้ยน เช่น '[]', 'null', 'abc'
function getUsersSafe() {
    let users = localStorage.getItem("users");

    try {
        users = JSON.parse(users);

        // users ต้องเป็น object จริง ๆ ไม่ใช่ null ไม่ใช่ array
        if (typeof users !== "object" || users === null || Array.isArray(users)) {
            users = {};
        }
    } catch {
        users = {};
    }

    return users;
}

export function mockSignUp(email, password, username) {
    const users = getUsersSafe();

    if (users[email]) {
        return { success: false, message: "อีเมลนี้มีผู้ใช้งานแล้ว" };
    }

    users[email] = { password, username };
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("loggedInUser", email);

    return { success: true, message: "สมัครสมาชิกสำเร็จ" };
}

export function mockLogin(email, password) {
    const users = getUsersSafe();

    if (!users[email]) {
        return { success: false, message: "ไม่พบอีเมลนี้" };
    }

    if (users[email].password !== password) {
        return { success: false, message: "รหัสผ่านไม่ถูกต้อง" };
    }

    localStorage.setItem("loggedInUser", email);
    return { success: true };
}

export function logout() {
    localStorage.removeItem("loggedInUser");
}
