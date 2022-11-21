stu_array= [];

function submit()
{
    var n1=document.getElementById("stu_1").value;
    var n2=document.getElementById("stu_2").value;
    var n3=document.getElementById("stu_3").value;
    var n4=document.getElementById("stu_4").value;
    var n5=document.getElementById("stu_5").value;
    
    stu_array.push(n1);
    stu_array.push(n2);
    stu_array.push(n3);
    stu_array.push(n4);
    stu_array.push(n5); 
    
    console.log(stu_array);

    document.getElementById("display_name").innerHTML=stu_array;
    document.getElementById("sub_btm").style.display="none";
    document.getElementById("sort_btm").style.display="inline-block";

}
function sorting()
{
    stu_array.sort();
    console.log(stu_array);
    document.getElementById("display_name").innerHTML=stu_array;
}