let data = {
  name: "Sanjay Sodani",
  profession: "IT Professional",
  skills: ["Python", "Frontend", "SEO"]
}

for(let i in data) {
  if (typeof(data[i]) == typeof(""))
    console.log(i + " - " +data[i]);
  if (typeof(data[i]) == typeof([]))
    for (let j of data[i]){
      console.log(i + " - " +j);
    }
}


data.skills.forEach(element => {console.log(element)});
