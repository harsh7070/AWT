const CSPIT = {
    yearOfEstablishment: 1998,
    location: "Anand, Gujarat, India",
    departments: ["CE", "IT", "CS", "EC", "EE", "CL", "ME"],
    getDetails: function() {
      console.log("CSPIT Details:");
      console.log("Year of Establishment: " + this.yearOfEstablishment);
      console.log("Location: " + this.location);
      console.log("Departments: " + this.departments.join(", "));
    },
  };
  
  CSPIT.getDetails();
  

  CSPIT.CE = Object.create(null);
  CSPIT.CE.totalStudents = 250;
  CSPIT.CE.totalFaculty = 30;
  
  console.log("\nCE Department Details:");
  console.log("Total Students: " + CSPIT.CE.totalStudents);
  console.log("Total Faculty: " + CSPIT.CE.totalFaculty);
  
 
  console.log("\nAll CSPIT Records:");
  for (let prop in CSPIT) {
    if (typeof CSPIT[prop] !== "function") {
      console.log(prop); 
      console.log(CSPIT[prop]);
    }
  }
  
  console.log("\nAll CE Department Records:");
  for (let prop in CSPIT.CE) {
    console.log(prop + ": " + CSPIT.CE[prop]);
  }
  
  console.log("\nDepartments in CSPIT:");
  for (let department of CSPIT.departments) {
    console.log(department);
  }
  