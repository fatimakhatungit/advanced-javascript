const students = [
    {id: 21, name:'omar sunny'},
    {id: 32, name: 'f'},
    {id: 21, name: 'm'},
    {id: 41, name: 'moyouri'},
    {id: 71, name: 'deepjol'}

];


const names = students.map(s => s.name);
const ids = students.map(s => s.ids);
const bigger = students.filter(s=> s.id>40);
console.log(bigger);
