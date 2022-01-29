class Employee {
  constructor (name, id, email, phone) {
  this.name = name;
  this.id = id; 
  this.email = email;
  this.phone = phone; 
}

employeeName(){
  return this.name;
};
employeeId(){
  return this.id;
};
employeeEmail(){
  return this.email;
};
employeePhone(){
  return this.phone;
}
}
  
module.exports = Employee;