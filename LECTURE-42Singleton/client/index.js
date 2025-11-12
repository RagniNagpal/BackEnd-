const Principal=require("../Principal/principal");

function suspend(studentName){
  // let Principal=new Principal("Rags");
  // let Principal2=new Principal("Vanshika"); not possible
  let principal=Principal.getPrincipal();
  Principal.suspend(studentName);
}
function notify(){
  let principal=new Principal("Vamika");
  principal.notify("school band rahengee abb naacho")
}