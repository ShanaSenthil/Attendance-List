student_array=[];
function submit(){
display_student_array=[];

for(var s=1; s<=28; s++){
var name_of_the_student=document.getElementById("name_of_the_student_"+s).value;
console.log(name_of_the_student);
student_array.push(name_of_the_student);
}
console.log(student_array)
var lenght_of_name_of_students_array = student_array.length; 
console.log(lenght_of_name_of_students_array); 
for (var k = 0; k < lenght_of_name_of_students_array; k++) 
{ display_student_array.push("<h4>NAME - "+ student_array[k] + "</h4>"); 
console.log(display_student_array); }


console.log(display_student_array);
document.getElementById("display_name_with_commas").innerHTML=display_student_array;

var remove_commas=display_student_array.join("");
console.log(remove_commas);
document.getElementById("display_name_without_commas").innerHTML=remove_commas;


document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";

}
function sorting(){
student_array.sort(); 
console.log(student_array); 
var display_student_array_sorting = []; 
var lenght_of_name_of_students_array = student_array.length; 
console.log(lenght_of_name_of_students_array); 
for (var k = 0; k < lenght_of_name_of_students_array; k++) 
{ display_student_array_sorting.push("<h4>NAME - " + student_array[k] + "</h4>"); 
console.log(display_student_array_sorting);
} var remove_commas = display_student_array_sorting.join(" "); 
console.log(remove_commas); 
document.getElementById("display_name_without_commas").innerHTML = remove_commas;

}