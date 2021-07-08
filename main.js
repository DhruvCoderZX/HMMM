var images = ["https://i.postimg.cc/brWG65kL/grand-pa.jpg","https://i.postimg.cc/cHMykt3z/grandma.jpg",
"https://i.postimg.cc/htTgqyQJ/Image0559.jpg"];

var names = ["My GrandDad, The Oldest. Sadand Shrivastav","My GrandMom, 2nd Oldest. Indra Shrivastav",
" My Mom And Me Together, Kunjal Shrivastav And Me Dhruv Shrivastav *i did not have any new photos*"]

var i = 0;
function update() {

    i++;
    var number_of_family_member_in_array = 3
    if(i > number_of_family_member_in_array )
  {
        i=0;
  }
var udateedImage = images[i];
var updatedNames = names[i];
document.getElementById("family_img").src= updatedNames;
document.getElementById("family_name").innerHTML= updatedNames;
}

