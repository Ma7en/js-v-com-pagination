/*  
===============================================
===============================================
*/

/* start pag 1 */

let thispage = 1;
let limit = 6;
let list = document.querySelectorAll(".pag-1 .list .item");
function loadItem() {
    let beginGet = limit * (thispage - 1);
    let endGet = limit * thispage - 1;
    list.forEach((item, key) => {
        if (key >= beginGet && key <= endGet) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
    listpage();
}
loadItem();
function listpage() {
    let count = Math.ceil(list.length / limit);
    document.querySelector(".pag-1 .listPage").innerHTML = "";
    if (thispage != 1) {
        let prev = document.createElement("li");
        prev.innerText = "PREV";
        prev.setAttribute("onclick", `changePage(${thispage - 1})`);
        document.querySelector(".pag-1 .listPage").appendChild(prev);
    }
    for (let i = 1; i <= count; i++) {
        let newPage = document.createElement("li");
        newPage.innerText = i;
        if (i == thispage) {
            newPage.classList.add("active");
        }
        newPage.setAttribute("onclick", `changePage(${i})`);
        document.querySelector(".pag-1 .listPage").appendChild(newPage);
    }
    if (thispage != count) {
        let next = document.createElement("li");
        next.innerText = "NEXT";
        next.setAttribute("onclick", `changePage(${thispage + 1})`);
        document.querySelector(".pag-1 .listPage").appendChild(next);
    }
}
function changePage(i) {
    thispage = i;
    loadItem();
}

/* end pag 1 */

/*  
===============================================
===============================================
*/

/* start pag 1 */

/* end pag 1 */

/*  
===============================================
===============================================
*/

/* start pag 1 */

/* end pag 1 */

/*  
===============================================
===============================================
*/

/* start pag 1 */

/* end pag 1 */

/*  
===============================================
===============================================
*/

/* start pag 1 */

/* end pag 1 */

/*  
===============================================
===============================================
*/

/* start pag 1 */

/* end pag 1 */

/*  
===============================================
===============================================
*/

/* start pag 1 */

/* end pag 1 */

/*  
===============================================
===============================================
*/

/* start pag 1 */

/* end pag 1 */

/*  
===============================================
===============================================
*/

/* start pag 1 */

/* end pag 1 */

/*  
===============================================
===============================================
*/

/* start pag 1 */

/* end pag 1 */

/*  
===============================================
===============================================
*/

/* start pag 1 */

/* end pag 1 */

/*  
===============================================
===============================================
*/

/* start pag 1 */

/* end pag 1 */

/*  
===============================================
===============================================
*/

/* start pag 1 */

/* end pag 1 */

/*  
===============================================
===============================================
*/

/* start pag 1 */

/* end pag 1 */

/*  
===============================================
===============================================
*/

/* start pag 1 */

/* end pag 1 */

/*  
===============================================
===============================================
*/
