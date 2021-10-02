const start = document.querySelector('.start'),
     firstpage = document.querySelector('.firstpage'),
     Secondpage = document.querySelector('.Secondpage'),
     mincraft = document.querySelector('.mincraft'),
     axe = document.querySelector('.axe'),
     pickaxe = document.querySelector('.pickaxe'),
     shovel = document.querySelector('.shovel'),
     dirt = document.querySelector('.dirt'),
     grass = document.querySelector('.grass'),
     leaf = document.querySelector('.leaf'),
     rock = document.querySelector('.rock'),
     tree = document.querySelector('.tree'),
     cloud = document.querySelector('.cloud'),
     mainbage = document.querySelector('.main_bage'),
     restart = document.querySelector('.restart');

let tools, bank;

const mineWorld = [
     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 0, 0, 0, 0, 0],
     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 6, 0, 0, 0, 0],
     [0, 0, 0, 0, 0, 0, 6, 6, 0, 0, 0, 0, 6, 6, 6, 0, 0, 0, 0, 0],
     [0, 0, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
     [0, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
     [0, 0, 0, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 3, 0, 0, 0, 0, 0],
     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 3, 3, 0, 0, 0, 0],
     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 3, 3, 3, 0, 0, 0],
     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 3, 3, 3, 0, 0, 0],
     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 3, 3, 3, 0, 0, 0],
     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 3, 3, 3, 0, 0, 0],
     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 5, 0, 0, 0, 0],
     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 5, 0, 0, 0, 0],
     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 0, 0, 0, 0],
     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0],
     [0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 4, 0, 0],
     [0, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 4, 0, 0],
     [2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 4, 0, 0],
     [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1],
     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
     [1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
     [1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];
const smalleWorld =[
     [0,0,0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,0,3,0],
     [0,6,6,0,0,0,0,0,3,3],
     [0,6,6,6,0,0,0,3,3,3],
     [4,0,0,0,0,0,0,0,5,0],
     [4,4,2,0,0,0,0,0,5,0],
     [1,1,1,4,2,2,2,2,5,2],
     [1,1,1,1,1,1,1,1,1,1],
     [1,1,1,1,4,1,1,1,1,1],
     [1,1,1,1,1,1,1,1,1,1]
]

function setMyWorld(matrix) {
     for (let x = 0; x < matrix.length; x++) {
          for (let y = 0; y < matrix[x].length; y++) {
               let element = document.createElement('div');
               element.classList.add('element');
               element.dataset.elementType = matrix[x][y];
               element.dataset.elementCoordinateX = y;
               element.dataset.elementCoordinateY = x;
               mincraft.appendChild(element);
               element.addEventListener("click", pickpart)
          }
     }
}

function pickpart(e) {
     //weapons
     if (tools == "axe" && e.path[0].dataset.elementType == 5) {
          e.path[0].dataset.elementType = 0
          tree.value++
     }
     if (tools == "axe" && e.path[0].dataset.elementType == 3) {
          e.path[0].dataset.elementType = 0
          leaf.value++
     }
     if (tools == "shovel" && e.path[0].dataset.elementType == 1) {
          e.path[0].dataset.elementType = 0
          dirt.value++;
     }
     if (tools == "shovel" && e.path[0].dataset.elementType == 2) {
          e.path[0].dataset.elementType = 0
          grass.value++;
     }
     if (tools == "pickaxe" && e.path[0].dataset.elementType == 4) {
          e.path[0].dataset.elementType = 0
          rock.value++;
     }
     //Bank
     if (bank == 'dirt') {
          if (dirt.value > 0 && e.path[0].dataset.elementType == 0) {
                    e.path[0].dataset.elementType = 1;
                    dirt.value--;
               
          }
     }
     if (bank == 'grass') {
          if (grass.value > 0 && e.path[0].dataset.elementType == 0) {
                    e.path[0].dataset.elementType = 2;
                    grass.value--;
          }
     }
     if (bank == 'leaf') {
          if (leaf.value > 0 && e.path[0].dataset.elementType == 0) {
                    e.path[0].dataset.elementType = 3;
                    leaf.value--;
          }
     }
     if (bank == 'rock') {
          if (rock.value > 0 && e.path[0].dataset.elementType == 0) {
                    e.path[0].dataset.elementType = 4;
                    rock.value--;
          }
     }
     if (bank == 'tree') {
          if (tree.value > 0 && e.path[0].dataset.elementType == 0) {
                    e.path[0].dataset.elementType = 5;
                    tree.value--;
          }
     }
     if (bank == 'cloud') {
          if (cloud.value > 0 && e.path[0].dataset.elementType == 0) {
                    e.path[0].dataset.elementType = 6;
                    cloud.value--;
          }
     }
}
Secondpage.style.display = "none"
start.addEventListener('click', function () {
     firstpage.style.display = "none";
     Secondpage.style.display = "grid"
})
setMyWorld(mineWorld);
axe.addEventListener('click', () => {
     tools = 'axe';
})
pickaxe.addEventListener('click', () => {
     tools = 'pickaxe';
})
shovel.addEventListener('click', () => {
     tools = 'shovel';
})

dirt.addEventListener('click', () => {
     bank = 'dirt'
     tools = ''
})
grass.addEventListener('click', () => {
     bank = 'grass'
     tools = ''
})
leaf.addEventListener('click', () => {
     bank = 'leaf'
     tools = ''
})
rock.addEventListener('click', () => {
     bank = 'rock'
     tools = ''
})
tree.addEventListener('click', () => {
     bank = 'tree'
     tools = ''
})
cloud.addEventListener('click', () => {
     bank = 'cloud'
     tools = ''
})

mainbage.addEventListener('click', function () {
     firstpage.style.display = "block";
     Secondpage.style.display = 'none'
})

restart.addEventListener('click', () => {
     mincraft.innerHTML=""
     setMyWorld(mineWorld)
})