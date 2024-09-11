const pIndexacao = document.querySelector('.pIndexacao')
const pBtree = document.querySelector('.pBtree')
const pHash = document.querySelector('.pHash')
const pBitmap = document.querySelector('.pBitmap')
const indexacao = document.querySelector('.indexacao')
const btree = document.querySelector('.btree')
const hash = document.querySelector('.hash')
const bitmap = document.querySelector('.bitmap')
const containerMain = document.querySelector('.containerMain')



document.querySelector('.pIndexacao').addEventListener('click', () => {
    pHash.classList.remove('active')
    pBitmap.classList.remove('active')
    pBtree.classList.remove('active')
    pIndexacao.classList.add('active')
    containerMain.style.display = 'flex'
    hash.style.display = 'none'
    bitmap.style.display = 'none'
    btree.style.display = 'none'
    indexacao.style.display = 'flex'
    
})

document.querySelector('.pBtree').addEventListener('click', () => {
    pIndexacao.classList.remove('active')
    pHash.classList.remove('active')
    pBitmap.classList.remove('active')
    pBtree.classList.add('active')
    containerMain.style.display = 'flex'
    indexacao.style.display = 'none'
    hash.style.display = 'none'
    bitmap.style.display = 'none'
    btree.style.display = 'flex'
    
})

document.querySelector('.pHash').addEventListener('click', () => {
    pIndexacao.classList.remove('active')
    pBitmap.classList.remove('active')
    pBtree.classList.remove('active')
    pHash.classList.add('active')
    containerMain.style.display = 'flex'
    indexacao.style.display = 'none'
    bitmap.style.display = 'none'
    btree.style.display = 'none'
    hash.style.display = 'flex'
})

document.querySelector('.pBitmap').addEventListener('click', () => {
    pIndexacao.classList.remove('active')
    pBtree.classList.remove('active')
    pHash.classList.remove('active')
    pBitmap.classList.add('active')
    containerMain.style.display = 'flex'
    indexacao.style.display = 'none'
    btree.style.display = 'none'
    hash.style.display = 'none'
    bitmap.style.display = 'flex'
})