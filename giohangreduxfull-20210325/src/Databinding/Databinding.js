import React, { Component } from 'react'

export default class Databinding extends Component {

    sinhVien = {
        ma: 1,
        ten: 'Nguyễn Văn Tèo'
    }

    renderSinhVien = () => {
        let sinhVien = {
            ma: 1,
            ten: 'Nguyễn Văn A',
            hinhAnh: 'https://picsum.photos/100/100'
        };

        return <div className="card text-left">
            <img className="card-img-top" src={sinhVien.hinhAnh} alt={sinhVien.hinhAnh} />
            <div className="card-body">
                <h4 className="card-title">{sinhVien.ten}</h4>
                <p className="card-text">Body</p>
            </div>
        </div>
    }

    //Databinding là cơ chế hiển thị dữ liệu lên thành phần giao diện
    render() {
        let name = 'Cybersoft';
        let product = {
            id: 1,
            name: 'IphoneX',
            price: 1000,
            img: 'https://picsum.photos/100/100'
        }
        let renderProduct = () => {
            //Khi nội dung return là component thì phải được bao phủ bởi 1 thẻ
            return <div>
                <p>{product.name}</p>
            </div>
        }

        return (
            <div className="container">
                {this.renderSinhVien()}
                <ul>
                    <li>Mã số sinh viên: {this.sinhVien.ma}</li>
                    <li>Họ tên sinh viên: {this.sinhVien.ten}</li>
                </ul>

                <p id="title">{name}</p>
                <br />
                <div className="card text-left w-25">
                    <img className="card-img-top" src={product.img} alt={product.img} />
                    <div className="card-body">
                        <h4 className="card-title">{product.name}</h4>
                        <p className="card-text">{product.price}</p>
                    </div>
                </div>
                {renderProduct()}
            </div>
        )
    }
}
