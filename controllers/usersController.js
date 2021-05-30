const User = require('../models/user');

module.exports.profile = function(req,res){
    return res.end('<h1>User Profile </h1>');
}

module.exports.signUp = function(req,res){
    return res.render('user_sign_up',{
        title : "Sign Up"
    })
}

module.exports.signIn = function(req,res){
    return res.render('user_sign_in',{
        title : "Sign In"
    })
}

module.exports.create = function(req,res){
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }

    User.findOne({email : req.body.email} , function(err, user){
        if(err){
            console.log("Error in finding User ", err);
            return res.redirect('back');
        }


        if(!user){
            User.create(req.body , function(err,user){
                if(err){
                    console.log("Error in Creating User ", err);
                    return res.redirect('back');
                }
                return res.redirect('/users/sign-in');
            })
        }else{
            console.log("User Already Exists");
            return res.redirect('back');
        }

    })
}

module.exports.createSession = function(req,res){
    
}