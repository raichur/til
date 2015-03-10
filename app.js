$.getJSON("http://www.reddit.com/r/todayilearned/new.json?sort=new", function(raw_data){
  var list_of_facts = "";
  for(var i = 0; i < raw_data.data.children.length; i++){
    list_of_facts = list_of_facts + "<li><a href='" + raw_data.data.children[i].data.url + "'><h1>" + raw_data.data.children[i].data.title + "</h1></a></li>";
  }
  $('#til').html(list_of_facts);
});
