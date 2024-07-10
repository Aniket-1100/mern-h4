const pr=fetch("https://dummyjson.com/recipes");
pr.then((res)=>{
    const pr2=res.json();
    pr2.then(renderUI);
}).catch((err)=>{
    console.log("Error: ",err);
});

const parent=document.getElementsByTagName("main")[0];
const renderUI=(data)=>{
    console.log("success: ",data);
    const recipes=data.recipes;

    for(let i=0;i<recipes.length;i++){
        const container=document.createElement("div");
        container.className="recipe-card";
        container.innerHTML=`
        <h4>${recipes[i].name}</h4>
        <img src="${recipes[i].image}">
        <p>Cuisine: ${recipes[i].cuisine}</p>
        <p>Rating: ${recipes[i].rating}</p>
        <hr><br>
        <p>Ingrdients: ${recipes[i].ingredients}</p>
        `;
        parent.appendChild(container);

    }
}

function searchProducts() {
    const searchText = document.getElementById('search-input').value;
    const pr = fetch(`https://dummyjson.com/recipes/search?q=${searchText}`);
    pr.then((res) => {
      return res.json();
    }).then((data) => {
        renderUI(data);
    }).catch((err) => {
      console.log("Error occurred! ", err);
    });
  }
  
  const searchInput = document.getElementById('search-input');
  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      searchProducts();
    }
  });