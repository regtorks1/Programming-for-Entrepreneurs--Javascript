var users = [
    {
        name: 'Emma',
        gender: 'F',
        hobby: 'pets',
        Age: 30,
        avatar: 'avatar1.png'        
    },
    {
        name: 'MacQuarrie',
        gender: 'M',
        hobby: 'pets',
        Age: 25,
        avatar: 'avatar2.png'
    },
    {
        name: 'Sparrow',
        gender: 'M',
        hobby: 'music',
        Age: 40,
        avatar: 'avatar3.png'
    },
    {
        name: 'Mark',
        gender: 'M',
        hobby: 'sports',
        Age: 50,
        avatar: 'avatar4.png'
    },
    {
        name: 'Bob',
        gender: 'M',
        hobby: 'sports',
        Age: 20,
        avatar: 'avatar5.png'
    },
    {
        name: 'Lovelace',
        gender: 'F',
        hobby: 'shopping',
        Age: 45,
        avatar: 'avatar6.png'
    },
    {
        name: 'Arnold',
        gender: 'M',
        hobby: 'sports',
        Age: 38,
        avatar: 'avatar7.png'
    },
];


window.addEventListener('load', function() {
    var results = document.getElementById('results');

    function search() {
        
        //get hobby
        var hobbyField = document.getElementById('hobby');
        var hobby = hobbyField.value;
      
        //get gender
        var genderField = document.getElementById('gender');
        var s = genderField.selectedIndex;
        var gender = genderField.options[s].value;
        

        //get  age
        var AgeField = document.getElementById('Age');
        var Age = AgeField.value;
        

        var resultsHtml = '';
        var usersLength = users.length;

        for(var i = 0; i < usersLength; i++) { 
            //check gender
            if (gender == 'All' || gender == users[i].gender) {
                //check hobby
                if (hobby == '' || hobby == users[i].hobby) { 
                 //check Age
                 if (Age == '' || Age == users[i].Age){
                    
            
            resultsHtml += '<div class="person-row">\
            <img src="images/' + users[i].avatar + '" />\
            <div class="person-info">\
            <div>' + users[i].name + '</div>\
            <div>' + users[i].hobby + '</div>\
            <div>' + users[i].Age + '</div></div>\
             <button>Add as a friend</button></div>'; 
               
            }
         }
       } 
    }
        results.innerHTML = resultsHtml;
    
    }

    var searchBtn = document.getElementById('searchBtn');

    searchBtn.addEventListener('click', search)

});