let ul = document.querySelector('ul')
got.houses.forEach((house)=>house.people.map((person)=>{

let li = document.createElement('li')
li.className = "box"

let div = document.createElement('div')
div.className = "flex"

let img = document.createElement('img')
img.className = "img"
img.src = person.image

let span = document.createElement('span')
span.className = "span"
span.innerText = person.name

div.append(img,span)

let h2 = document.createElement('h2')
h2.className = "h2"
h2.innerText = person.description

let p = document.createElement('p')
p.className = "para"
p.innerText = "Learn More!"

li.append(div, h2, p)
ul.append(li)

}))