class Principal{
  // instance = null;
  multipleSchool=new Map()
  _principal=null
  _constructor(name){  //private
    this.principal=name
  }
  static getPrincipal(){
    if(!multipleSchool.has(school)){
      let principal=new Principal();
      // instance=principal
      multipleSchool.set(school,principal)
    }
    
    // return instance;
    return multipleSchool.get(school);
  }
  createCurriculam(){

  }
  resticateStudents(){

  }
  suspendStudent(days){

  }
  notify(message){

  }
}
module.exports=Principal