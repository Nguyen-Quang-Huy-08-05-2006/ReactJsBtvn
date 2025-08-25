import React, { Component } from "react";

export default function Pagination() {
  return (
    <table>
      <thead>
        <tr>
          <td>STT</td>
          <td>Ma sinh vien</td>
          <td>Ten sinh vien</td>
          <td>Ngay sinh</td>
          <td>Trang thai</td>
          <td>chuc nang</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>ABC1</td>
          <td>Nguyen Van A</td>
          <td>01/01/2000</td>
          <td>Hoat dong</td>
          <td>
            <button>chan</button>
            <button>sua</button>
            <button>xoa</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
