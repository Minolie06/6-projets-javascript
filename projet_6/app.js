const base = document.querySelector('.base')
const box = document.querySelectorAll('.case')

base.addEventListener('dragstart', dragStart)
base.addEventListener('dragend', dragEnd)

function dragStart() {
    this.className += ' tenu'
    setTimeout(() => { this.className = 'invisible' }, 0)
}

function dragEnd() {
    this.className = 'base'
}

for(const vide of box) {
    vide.addEventListener('dragover', dragOver)
    vide.addEventListener('dragenter', dragEnter)
    vide.addEventListener('dragleave', dragLeave)
    vide.addEventListener('drop', dragDrop)
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    this.className += ' hovered'
}

function dragLeave(e) {
    this.className = 'case'
}

function dragDrop(e) {
    e.preventDefault();
    this.className = 'case'
    this.append(base)
}