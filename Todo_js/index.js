let todolist = [
  {
    text:'Milk' ,
    date: '27/12/54',
  },
];
displayItems();
function addTodoHere() {
  let input = document.querySelector('#todoinput');
  let text = input.value;
  let input1= document.querySelector('.date');
  let text1 = input1.value;

  todolist.push({text : text , date : text1 });
  input.value = ' ';
  input1.value='';
  displayItems();
}


function displayItems() {
  let containerElement = document.querySelector('.todo-container');
  let newhtml = '';
  for (let i = 0; i < todolist.length; i++
  ) {
    // let item = todolist[i].text;
    // let date = todolist[i].date;
    let  {text, date} = todolist[i];
    newhtml += `
     
      <span>${text}</span>
      <span>${date}</span>
      <button onclick="todolist.splice(${i},1);
         displayItems();">Delete</button>
      `;
  }
  containerElement.innerHTML = newhtml;
}