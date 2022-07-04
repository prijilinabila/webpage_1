var menu = {
    'menulist':[
    {   
        id : 1,
        dish : "Buttermilk Pancake",
        category :"breakfast",
        price : "$15.99",
        image : "images/buttermilk.jpg",
        description :"A pancake is a thin, flat, circular piece of cooked batter made from milk, flour, and eggs. ",
    },
    {
        id : 2,
        dish : "Dinner Double",
        price : "$15.99",
        category :"lunch",
        image : "images/ddinner.jpg",
        description :"A pancake is a thin, flat, circular piece of cooked batter made from milk, flour, and eggs. ",
    },
    {
        id : 3,
        dish : "Godzilla Milkshake",
        price : "$6.99",
        category :"breakfast",
        image : "images/milkshake.jpg",
        description :"A milkshake made of milk, a sweet flavouring such as fruit or chocolate, and typically ice cream, whisked until it is frothy.",
    },
    {
        id : 4,
        dish : "Country Delight",
        price : "$15.99",
        category :"breakfast",
        image : "images/countrydelight.jpg",
        description :"Delicious meals are tasty, appetizing, scrumptious, yummy, luscious, delectable, mouth-watering, fit for a king, delightful, lovely, wonderful, pleasant and enjoyable.",
    }
]};
listdishes(menu['menulist']);



function filtermenu(category){
    if(category != 'all')
    {
        var filterval = menu.menulist.filter(function (el)
        {
        return el.category == category;
        }
        );
        listdishes(filterval);
    }
    else
    {
        listdishes(menu['menulist']);
    }
   
}

function listdishes(menu)
{
    var dishdetail='';
    for(i=0;i<menu.length;i++){
        dishdetail += '<div class="menulist"><div class="menuimg"><img src="'+menu[i].image+'" width="100%"></div> <div class="menucond"><div class="contentpadd"><b>'+menu[i].dish+'</b><span class="price">'+ menu[i].price+'</span><hr><p>'+menu[i].description+'</p></div></div></div> ';
    }
    document.getElementById("dishes").innerHTML = dishdetail;
}










