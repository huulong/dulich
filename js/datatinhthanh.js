const inputSearch = document.querySelector(".search_content__input")
const autoBox = document.querySelector(".autobox")
indexedDB.onkeyup = (e)=> {
    let checkData = e.target.value
    let dataArray =[]
    if(checkData) {
        dataArray=recomentlist.filter((data)=>{
            return data.tolocaleLowerCase().startWich(checkData.tolocaleLowerCase())
            })
            dataArray=dataArray.map((data)=>{
                return data = '<li>'+data+'</li>'
            })
            autoBox.classList.add('active')
            showAdress (dataArray)
            let liItem = autoBox.querySelectorAll("li")
            for (let i=0; i<liItem.length;i++){
                liItem[i].addEventListener("click",function(){
                inputSearch.value = liItem[i].innerHTML
                autoBox.classList.remove('active')
            })
    }
}
    else {
        autoBox.classList.remove('active')
    }
}
function showAdress (list){
    let listData
    if (!list.lenth) {
        listData = '<li>'+inputSearch.value+'</li>'
    }
    else {
listData = list.join('')
    }
    autoBox.innerHTML = listData
}
let recomentlist =[
        "An Giang",
"Bà Rịa – Vũng Tàu",
"Bạc Liêu",
"Bắc Giang",
"Bắc Kạn",
"Bắc Ninh",
"Bến Tre",
"Bình Dương",
"Bình Định",
"Bình Phước",
"Bình Thuận",
"Cà Mau",
"Cao Bằng",
"Cần Thơ",
"Đà Nẵng",
"Đắk Lắk",
"Đắk Nông",
"Điện Biên",
"Đồng Nai",
"Đồng Tháp",
"Gia Lai",
"Hà Giang",
"Hà Nam",
"Hà Nội",
"Hà Tĩnh",
"Hải Dương",
"Hải Phòng",
"Hậu Giang",
"Hòa Bình",
"Thành phố Hồ Chí Minh",
"Hưng Yên",
"Khánh Hòa",
"Kiên Giang",
"Kon Tum",
"Lai Châu",
"Lạng Sơn",
"Lào Cai",
"Lâm Đồng",
"Long An",
"Nam Định",
"Nghệ An",
"Ninh Bình",
"Ninh Thuận",
"Phú Thọ",
"Phú Yên",
"Quảng Bình",
"Quảng Nam",
"Quảng Ngãi",
"Quảng Ninh",
"Quảng Trị",
"Sóc Trăng",
"Sơn La",
"Tây Ninh",
"Thái Bình",
"Thái Nguyên",
"Thanh Hóa",
"Thừa Thiên Huế",
"Tiền Giang",
"Trà Vinh",
"Tuyên Quang",
"Vĩnh Long",
"Vĩnh Phúc",
"Yên Bái",	
]