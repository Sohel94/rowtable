
var maxRow = 10;
var x = 1;
var emptyRow = "<tr><td colspan='6' class='text-center'> No Records Available</td></tr>";
var emptyNewRow = "<tr class='trNewRow'>"; 
emptyNewRow = emptyNewRow + "    <td class='tdFirstName'>";
emptyNewRow = emptyNewRow + "        <input type='text' class='form-control txtFirstName' placeholder='Enter First Name'/>";
emptyNewRow = emptyNewRow + "    </td>";
emptyNewRow = emptyNewRow + "    <td class='tdLastName'>";
emptyNewRow = emptyNewRow + "        <input type='text' class='form-control txtLastName' placeholder='Enter Last Name'/>";
emptyNewRow = emptyNewRow + "    </td>";
emptyNewRow = emptyNewRow + "    <td class='tdEmail'>";
emptyNewRow = emptyNewRow + "        <input type='text' class='form-control txtEmail' placeholder='Enter Email'/>";
emptyNewRow = emptyNewRow + "    </td>";
emptyNewRow = emptyNewRow + "    <td class='tdPhone'>";
emptyNewRow = emptyNewRow + "        <input type='text' class='form-control txtPhone' placeholder='Enter Phone No'/>";
emptyNewRow = emptyNewRow + "    </td>";
emptyNewRow = emptyNewRow + "    <td class='tdAddress'>";
emptyNewRow = emptyNewRow + "        <input type='text' class='form-control txtAddress' placeholder='Enter Address'/>";
emptyNewRow = emptyNewRow + "    </td>";
emptyNewRow = emptyNewRow + "    <td class='tdAction'>";
emptyNewRow = emptyNewRow + "        <button class='btn btn-sm btn-success btn-save'> Save</button>";
emptyNewRow = emptyNewRow + "        <button class='btn btn-sm btn-danger btn-cancel'> Remove</button>";
emptyNewRow = emptyNewRow + "    </td>";
emptyNewRow = emptyNewRow + "</tr>";

var rowButtons ="<button class='btn btn-success btn-sm btn-edit' > Edit </button>  <button class='btn btn-danger btn-sm' > Delete </button> ";
var rowUpdateButtons ="<button class='btn btn-success btn-sm btn-save' > Update </button>  <button class='btn btn-danger btn-sm btn-save' > Cancel </button> ";

$(function () {

    // Empty some text
    $("#tblData tbody").append(emptyRow); // adding empty row on page load 
    

    // Add Empty row
    $("#btnAdd").on("click",function () { 
        if ($("#tblData tbody").children().children().length == 1) {
            $("#tblData tbody").html("");
        }
        if ( x <= maxRow){
            x++;
            $("#tblData tbody").append(emptyNewRow); // appending dynamic string to table tbody
        }else{
            alert("You can add maximum row " + maxRow +'th here!')
        }
    });
    

    // Save button
    $('#tblData').on('click', '.btn-save', function () {

        const first_name =  $(this).parent().parent().find(".txtFirstName").val();
        const last_name =  $(this).parent().parent().find(".txtLastName").val();
        const email =  $(this).parent().parent().find(".txtEmail").val();
        const phone =  $(this).parent().parent().find(".txtPhone").val();
        const address =  $(this).parent().parent().find(".txtAddress").val();

        if (first_name !="" && last_name !="" && email !="" && phone !="" && address !=""){
            $(this).parent().parent().find(".tdFirstName").html(""+first_name+""); 
            $(this).parent().parent().find(".tdLastName").html(""+last_name+"");
            $(this).parent().parent().find(".tdEmail").html(""+email+"");
            $(this).parent().parent().find(".tdPhone").html(""+phone+"");
            $(this).parent().parent().find(".tdAddress").html(""+address+"");
            
            $(this).parent().parent().find(".tdAction").html(rowButtons);
        }else{
            alert("Please Enter Empty Field")
        }
    });
        
    
    // Remove Button
    $('#tblData').on('click', '.btn-danger', function (e) { // registering function for delete button  
        e.preventDefault();
        $(this).parent().parent().remove();
        if ($("#tblData tbody").children().children().length == 0) {
            $("#tblData tbody").append(emptyRow);
        }
    });
    

    // Cancel button
    $('#tblData').on('click', '.btn-cancel', function () { 
        $(this).parent().parent().remove();
    });


    // Edit button
    $('#tblData').on('click', '.btn-edit', function () { 
        const first_name =$(this).parent().parent().find(".tdFirstName").html();
        const last_name =$(this).parent().parent().find(".tdLastName").html();
        const email =$(this).parent().parent().find(".tdEmail").html();
        const phone =$(this).parent().parent().find(".tdPhone").html();
        const address =$(this).parent().parent().find(".tdAddress").html();

        $(this).parent().parent().find(".tdFirstName").html("<input type='text' value='"+first_name+"' class='form-control txtFirstName' placeholder='Enter First Name'/>"); 
        $(this).parent().parent().find(".tdLastName").html("<input type='text' value='"+last_name+"' class='form-control txtLastName' placeholder='Enter Last Name'/>"); 
        $(this).parent().parent().find(".tdEmail").html("<input type='text' value='"+email+"' class='form-control txtEmail' placeholder='Enter Email'/>"); 
        $(this).parent().parent().find(".tdPhone").html("<input type='text' value='"+phone+"' class='form-control txtPhone' placeholder='Enter Phone'/>"); 
        $(this).parent().parent().find(".tdAddress").html("<input type='text' value='"+address+"' class='form-control txtAddress' placeholder='Enter Address'/>"); 

        $(this).parent().parent().find(".tdAction").html(rowUpdateButtons);

    });
});
