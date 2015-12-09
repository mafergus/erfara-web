



// ##############################################################################
// ############ ADD RELATION TO USER SNIPPETS ###################################
// ##############################################################################
  addRelationsHack(){

    // Adding a Barbecue relation to User
    var user;
    var relation;
    var bbqExperience;

    var experience = Parse.Object.extend("Experience");
    var queryExperience = new Parse.Query(experience);


    var queryUser = new Parse.Query(Parse.User);
    queryUser.get("NTkttqe6Tj", {
      success: function(object) {
        console.log("Success:");
        user = object;
        console.log(object);
        queryExperience.get("imjf2tIP5v", {
          success: function(object) {
            console.log("Success:");
            bbqExperience = object;
            console.log(bbqExperience);
            relation = user.relation("exp_sharing");
            relation.add(bbqExperience);
            user.save(null, {
              success: function(object) {
                console.log("Parse save success");
              },
              error: function(object, error){ 
                console.log("Parse save failed with error:");
                console.log(error);
              }
            });
          },
          error: function(object, error) {
            console.log("Parse GET failed: " + error.message);
          }
        });
      },
      error: function(object, error) {
        console.log("Parse GET failed: " + error.message);
      }
    });

  }
// ############ ADD RELATION TO USER SNIPPETS ###################################
// ##############################################################################




// ########################################################################
// ############ AUTHENTICATION SNIPPETS ###################################
// ########################################################################

<form onSubmit={this.authenticate.bind(this)} >
  <input type="text" id="username" placeholder="username" />
  <input type="password" id="password" placeholder="password" />
  <button onClick={this.authenticate.bind(this)} > Submit </button>
</form>

 authenticate(event){
    event.preventDefault();
    var _this = this;
    //Check to see if username is already being used, signup or login as necessary
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var query = new Parse.Query(Parse.User);
    query.equalTo("username", username);
    query.find({
      success: function(user){
        console.log(user);
        if(user.length>0){
          console.log("Successfully retrieved user: " + user.username);
          _this.loginParse(_this);
        } else {
          console.log(user);
          console.log("Successfully queried datastore, no user found");
          _this.createParseUser(_this);
        }
      },
      error: function(user, error){
        console.log("User query failed with error:" + error.message);
      }
    })
  }

  export function loginParse(that){
    var _this = that;
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    Parse.User.logIn(username, password, {
      success: function(user) {
        console.log("Successfully logged in");
        _this.forceUpdate();
      },
      error: function(user, error) {
        console.log("User login failed with error: " + error.message);
        _this.forceUpdate();
      }
    });
  }

  createParseUser(that){
    var _this = that;
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var newUser = new Parse.User();
    newUser.set("username", username);
    newUser.set("password", password);
    newUser.set("email", username);
    newUser.signUp(null, {
      success: function(user) {
        console.log("New user successfully created");
        _this.forceUpdate();
      },
      error: function(user, error) {
        alert("User signup failed with error: " + error.code + " " + error.message);
        _this.forceUpdate();
      }
    });
  }
// ############ AUTHENTICATION SNIPPETS ###################################
// ########################################################################
