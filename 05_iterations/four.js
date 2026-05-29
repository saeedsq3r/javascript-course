const my_obj = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    py: 'python'
}

for (const key in my_obj) {
    // console.log(`${key} shortcut is for ${my_obj[key]}`);
    
}

const programing = ['js', 'rb', 'py', 'java', 'cpp']

for (const key in programing) {
    // console.log(programing[key]);
    
}


const map = new Map()
map.set('PAK',"Pakistan")
map.set('US',"united sates")
map.set('Fr',"France")


for (const key in map) {
    // console.log(map[key]);
}
