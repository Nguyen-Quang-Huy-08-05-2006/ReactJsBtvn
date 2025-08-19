import React from 'react'

const UserInfo = () => {
    const user = {
        name: "Nguyen Van A",
        sex: "Nam",
        birthDate: "06/03/2024",
        email: "nva@gmail.com",
        address: "Thanh Xuan, Ha Noi"
    }

    return(
        <div>
            <h2>Thong tin ca nhan</h2>
            <p>Ho va ten: {user.name}</p>
            <p>Gioi tinh: {user.sex}</p>
            <p>Ngay sinh: {user.birthDate}</p>
            <p>Email: {user.email}</p>
            <p>Dia chi: {user.address}</p>
        </div>
    )
}

export default UserInfo