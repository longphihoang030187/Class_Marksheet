
var table = document.getElementById("myTable");
// Tìm phần tử có id là add_table
var add_table = document.getElementById("add_table");
//Lắng nghe sự kiện click
add_table.addEventListener("click", addtable);

// Thêm nút xoá hàng table vừa nhập
var add_table = document.getElementById("delete_row");
delete_row.addEventListener("click", myDeleteFunction);

// Tìm phần tử có id là Average
var Avg = document.getElementById("Average");
Avg.addEventListener("click", getAverage);

//Hàm xác định học sinh ưu tú
var GoodStudent = document.getElementById("GoodStudent");
GoodStudent.addEventListener("click", GoodStudents);


//Khai báo mảng Student để lưu object student_score vào
var Student=[];
//khai bao biến toàn cục selectedIndex để biết số row đã chọn 
var selectedIndex =-1;



//Hàm addtable để thêm 1 hàng vào table
function addtable() {

//Tìm phần tử trong form có id là name, math, physical, chemistry và gán giá trị
var nameSTU = document.getElementById("name").value;
var mathScore = document.getElementById("math").value;
var physicalScore = document.getElementById("physical").value;
var chemistryScore = document.getElementById("chemistry").value;

//Kiểm tra điều kiện nhập của user có phải là số hay để trống không nhập ?

//Nếu user để trống ô input học sinh hoặc nhập ký tự số thì báo lỗi
if(nameSTU=="")
{
  alert("Bạn đã nhập thiếu tên học sinh")
}

else if(mathScore=="" && physicalScore=="" &&chemistryScore=="")
 {
  alert('Bạn đã nhập thiếu giá trị vào ô nhập liệu');
  }

  //xử lý user nhập sai ô input hoặc để trống ô input
 else if(mathScore=="")
 {
  alert('Bạn đã nhập thiếu điểm môn toán');
 }

 else if(physicalScore=="")
 {
  alert('Bạn đã nhập thiếu điểm môn lý');
 }
 else if(chemistryScore=="")
 {
  alert('Bạn đã nhập thiếu điểm môn hoá');
 }
 else if (isNaN(mathScore)&&isNaN(physicalScore)&& isNaN(chemistryScore) )
{
  alert ("Ký tự bạn nhập không phải là số");
}
else if(isNaN(mathScore))
{
  alert ("Điểm Toán bạn nhập không phải là số");
}
else if(isNaN(physicalScore))
{
  alert ("Điểm Lý bạn nhập không phải là số");
}
else if(isNaN(chemistryScore))
{
  alert ("Điểm Hoá bạn nhập không phải là số");
}

//Kiểm tra số mà user nhập vào có phải số từ 0-10 không?
else if(parseFloat(mathScore)<0||parseFloat(mathScore)>10)
{
  alert("Bạn phải nhập điểm Toán từ 0 điểm đến 10 điểm")
}

else if(parseFloat(physicalScore)<0||parseFloat(physicalScore)>10)
{
  alert("Bạn phải nhập điểm Lý từ 0 điểm đến 10 điểm")
}
else if(parseFloat(chemistryScore)<0||parseFloat(chemistryScore)>10)
{
  alert("Bạn phải nhập điểm Hoá từ 0 điểm đến 10 điểm")
}

else
{

//  Khai báo đối tượng Student_Score để lưu thông tin điểm số của học sinh
var Student_Score = { 
  name: "",
  math: 0,
  physical: 0,
  chemistry: 0
};
// Gán vào Object lưu trữ tên và điểm số của mỗi học sinh.

Student_Score.name= nameSTU;
Student_Score.math= mathScore;
Student_Score.physical= physicalScore;
Student_Score.chemistry=chemistryScore;

//console.log(Student_Score);
//Dua oject vao mang Student 
Student.push(Student_Score);
console.log(Student);

//Gọi hàm Xoá trắng form sau khi input thông tin học sinh
ResetForm();

//Insert 1 row  vào vị trí cuối cùng của Table (-1)
var row = table.insertRow(-1);

var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);
var cell4 = row.insertCell(3);
var cell5 = row.insertCell(4);
var cell6 = row.insertCell(5);
var cell7 = row.insertCell(6);
//Thêm icon Edit và delete
var cell8 = row.insertCell(7);
var cell9 = row.insertCell(8);

// Loop qua tất cả các hàng trong table. 
for (var i = 0, row; row = table.rows[i]; i++){

//Hiển thị lên các ô trong table
    cell1.innerHTML = i; //Hiển thị biến i ở cột số thứ tự ô 1
    cell2.innerHTML = nameSTU; 
    cell3.innerHTML = mathScore;
    cell4.innerHTML = physicalScore;
    cell5.innerHTML = chemistryScore;
    cell6.innerHTML = "?";
    cell7.innerHTML = "?";
    cell8.innerHTML = "<a href='#' onclick='btnEdit(this)'><i class='fa-solid fa-pen-to-square'></i></a>" ; //icon Edit
    cell9.innerHTML = "<a href='#' onclick='btnDelete(this)'><i class='fa-solid fa-trash'></i></a> " ; //icon Delete
}

}//Đóng dấu ngoặc đơn hết hàm if

}// Hết câu lệnh điều kiện kiểm tra 

//Kết thúc hàm addtable


//Hàm tính điểm trung bình học sinh getAverage
function getAverage() {
//lặp qua các  hàng trong table
for (var i = 1, row; row = table.rows[i]; i++) 
  {
  //Lấy giá trị điểm số và chuyển đối string thành kiểu dữ liệu số
  let mathScore = parseFloat(row.cells[2].innerHTML);
  let physicalScore = parseFloat(row.cells[3].innerHTML);
  let chemistryScore = parseFloat(row.cells[4].innerHTML);
  //Hàm tính điểm trung bình học sinh và làm tròn đến 1 chữ số thập phân 
  let average_score = ((mathScore + physicalScore + chemistryScore) / 3).toFixed(1);
  //Hiển thị lên ô tính điểm trung bình
  row.cells[5].innerHTML = average_score;
  }

}

//Hàm tính điểm học sinh giỏi
function GoodStudents() {

//lặp qua tat ca cac hàng trong table
  for (let i = 1, row; row = table.rows[i]; i++) {
    if (parseFloat(row.cells[5].innerHTML) >= 8)
     {
      table.rows[i].style.color = "red"; 
      //Xếp loại học sinh giỏi 
      row.cells[6].innerHTML="Giỏi";
     }
     else if(parseFloat(row.cells[5].innerHTML) >= 6.5)
     {
      table.rows[i].style.color = "blue"; 
      //Xếp loại học sinh khá
      row.cells[6].innerHTML="Khá";
     }
     else if(parseFloat(row.cells[5].innerHTML) >= 5)
     {
      table.rows[i].style.color = "green"; 
      //Xếp loại học sinh Trung Bình
      row.cells[6].innerHTML="Trung Bình";
     }
     else if(parseFloat(row.cells[5].innerHTML) >= 0)
     {
      table.rows[i].style.color = "white"; 
      //Xếp loại học sinh yêuu
      row.cells[6].innerHTML="Yếu";
     }

  }
}



/*Làm thêm phần Nâng cao thêm vào icon Edit và Delete  */

// khi click vào xoá hàng trên table thì hàm sau sẽ xoá theo thứ tự dưới lên trên
function myDeleteFunction() {
  
  var c = confirm("Bạn có muốn xoá hàng này không");
  if(c === true)
  {
    document.getElementById("myTable").deleteRow(-1);
  }

}

// khi click vào  icon xoá hàng trên table thì hàm sau sẽ được thực hiện
function btnDelete(element){

var SelectedRow =element.parentElement.parentElement;
selectedIndex=parseFloat(SelectedRow.cells[0].innerHTML)-1; // hàng được chọn xoá
var c = confirm("Bạn có muốn xoá hàng này không");
        if(c === true)
        {
          Student.splice(selectedIndex,1); //Xoá đi phần tự được chọn trong mảng Student
          update_table(); //Render lại table sau khi xoá hàng đã chọn
        }
}



// khi click vào  icon Edit 1 row trên table thì  gọi hàm btnEdit sau sẽ được thực hiện
function btnEdit(element){

//lấy giá trị của selectedRow và đưa lên form
var SelectedRow =element.parentElement.parentElement;
var nameSTU= SelectedRow.cells[1].innerHTML;
var mathScore= SelectedRow.cells[2].innerHTML;
var physicalScore= SelectedRow.cells[3].innerHTML;
var chemistryScore= SelectedRow.cells[4].innerHTML;

//Gán giá trị lên form để chỉnh sửa điểm số

document.getElementById("name").value= nameSTU;
document.getElementById("math").value= mathScore;
document.getElementById("physical").value= physicalScore;
document.getElementById("chemistry").value= chemistryScore;
    
//Hiển thị button cập nhật và ẩn nút Nhập
document.getElementById("update_table").style.display= "inline-block";
document.getElementById("add_table").style.display= "none";

// cap nhat  stt da chon selectedIndex
selectedIndex=parseFloat(SelectedRow.cells[0].innerHTML)-1;
console.log(selectedIndex);

}

// Khi user nhấn nút cập Nhật thì hàm cập nhật lại table
function update_btn(){
 

var table = document.getElementById("myTable");
//lay gia tri cua form sau khi cap nhat 
Student[selectedIndex].name =document.getElementById("name").value;
Student[selectedIndex].math =document.getElementById("math").value;
Student[selectedIndex].physical =document.getElementById("physical").value;
Student[selectedIndex].chemistry =document.getElementById("chemistry").value;

update_table(); //Gọi hàm render table lại table sau khi bấm nút Cập Nhật

//Goi ham Xoá trắng form sau khi input thông tin học sinh
ResetForm();
document.getElementById("update_table").style.display= "none"; //ẩn nút câp nhật
document.getElementById("add_table").style.display= "inline-block";//Hiện lại nút Nhâp
}

//Hàm render lại table 

function update_table(){

var Student_Score = { 
  name: "",
  math: 0,
  physical: 0,
  chemistry: 0
};
   
//Xoá hết tất cả row trong bảng
for(var i=table.rows.length-1; i>0;i--)
  {
    table.deleteRow(i);
  }

// Lặp qua tất cả các hàng trong table. 
for (var i = 0 ;i<Student.length; i++){
  var Student_Score=Student[i];
  console.log(Student_Score)
      
//chen lai hang tat ca cac bang 
var row = table.insertRow();
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);
var cell4 = row.insertCell(3);
var cell5 = row.insertCell(4);
var cell6 = row.insertCell(5);
var cell7 = row.insertCell(6);
//add thêm nút xoá
var cell8 = row.insertCell(7);
var cell9 = row.insertCell(8);
//Hiển thị lên các ô trong table
cell1.innerHTML = i+1; //Hiển thị biến i ở cột số thứ tự ô 1
cell2.innerHTML = Student_Score.name; 
cell3.innerHTML = Student_Score.math;
cell4.innerHTML = Student_Score.physical;
cell5.innerHTML = Student_Score.chemistry;
cell6.innerHTML = "?";
cell7.innerHTML = "?";
cell8.innerHTML = "<a href='#' onclick='btnEdit(this)'><i class='fa-solid fa-pen-to-square'></i></a>" ;
cell9.innerHTML = "<a href='#' onclick='btnDelete(this)'><i class='fa-solid fa-trash'></i></a> " ;
      
}

}

//Hàm để resetform thành trắng
function ResetForm(){
//Xoá trắng form sau khi input thông tin học sinh
document.getElementById("name").value = "";
document.getElementById("math").value = "";
document.getElementById("physical").value = "";
document.getElementById("chemistry").value = "";  

}