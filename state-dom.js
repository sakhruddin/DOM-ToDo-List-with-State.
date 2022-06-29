const list = document.getElementById('list')
const div2 = document.createElement('div')
const inp = document.createElement('input')
const btn = document.createElement('button')
const p = document.createElement('p')

p.textContent = 'добавить дело'
p.style.marginLeft = '100px'
p.style.paddingRight = '30px'
p.style.fontSize = '26px'
inp.style.marginTop = '30px'
inp.style.marginRight = '8px'
btn.style.marginTop = '30px'
btn.style.height = '36px'
inp.style.width = '300px'
btn.textContent = '+';
inp.type = 'text'
inp.style.height = '30px'
div2.prepend(inp)
div2.append(btn)
div2.prepend(p)
document.body.prepend(div2)
div2.style.display = 'flex'
list.style.color = 'purple'
document.body.style.backgroundColor = '#FFDEAD'
list.style.fontSize = '30px'
btn.addEventListener('click', addTodo)



const toDo = [
  {
    text: 'сходить на занятии',
    done: false
  },

  {
    text: 'покушать',
    done: true
  },

  {
    text: 'поспать',
    done: false
  },

  {
    text: 'выкинуть мусор',
    done: true
  },

  {
    text: 'забраться на эверест',
    done: false
  }
];
const divList = document.getElementById('list')

function render() {
  divList.innerHTML = '';
  toDo.forEach((person, idx) => {

    const inp2 = document.createElement('input')
    inp2.type = "checkbox"
    inp2.setAttribute('id', `check_${idx}`)
    person.done ? inp2.checked = true : inp2.checked = false;

    const btn2 = document.createElement('button')
    btn2.textContent = 'x'
    const p = document.createElement('p')
    p.textContent = person.text
    divList.append(p)

    if (person.text) {
      p.append(btn2)
      p.prepend(inp2)
    }
    btn2.addEventListener('click', (event) => {
      remove(idx)
    })
    inp2.addEventListener('change', (event) => {
      checkTodo(idx);
    })
    btn2.style.color = 'red'
    p.style.marginLeft = '100px'
  })
}
render()


function remove(index) {
  toDo.splice(index, 1);
  render()
}


function addTodo() {
  toDo.push({ text: inp.value, done: false })
  render()
}
addTodo('добавить новый массив')


function checkTodo(idx) {
  toDo[idx].done = !toDo[idx].done
  render();
}


