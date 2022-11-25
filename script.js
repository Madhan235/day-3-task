let user = { "name": "coder",
            "age":"26",
            "education":"full stack development",
            "work_experiance":"guvi",
            "skill":"full stack developer",
            "lanuages_known":["C","C++","JAVA","JAVASCRIPT","KOTLIN"]}
        
  let userkeys = Object.entries(user);
  for(let i = 0; i < userkeys.length; i++) {
  console.log(userkeys[i])}

for(let i in userkeys) {console.log(userkeys[i])}

for(let i of userkeys) {console.log(i)};

userkeys.forEach(i => {
console.log(i)    
});