const Joi = require('joi');

//schema for signup
const register = Joi.object({
    Name: Joi.string().pattern(new RegExp(/^[a-zA-Z ]{2,30}$/)).required(),

    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),

    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{6,30}$')).required(),
});

const signupMiddleware = (req, res, next) => { 
   
  const { error } = register.validate(req.body); 
 
  if (error) { 
    const { details } = error; 
    const message = details.map(i => i.message).join(',');
 
    console.log("error", message); 
   res.send(message);
  } else { 
     next();
  } 
}

//schema for signin
const signin = Joi.object({
  email2: Joi.string().required(),

  password2: Joi.string().required(),
})

const signinMiddleware = (req, res, next) => { 
   
  const { error } = signin.validate(req.body); 
 
  if (error) { 
    const { details } = error; 
    const message = details.map(i => i.message).join(',');
 
    console.log("error", message); 
    res.send(message);
  } else { 
     next();
  } 
}

//schema for delete
const deletedata = Joi.object({
  userId: Joi.string().required(),
})

const deleteMiddleware = (req, res, next) => { 
   
  const { error } = deletedata.validate(req.body); 
 
  if (error) { 
    const { details } = error; 
    const message = details.map(i => i.message).join(',');
 
    console.log("error", message); 
    res.send(message);
    } else { 
     next();
  } 
}

//schema for update
const update = Joi.object({
  userId: Joi.string().required(),
  name: Joi.string().required(),
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{6,30}$')).required(),
})

const updateMiddleware = (req, res, next) => { 
   
  const { error } = update.validate(req.body); 
 
  if (error) { 
    const { details } = error; 
    const message = details.map(i => i.message).join(',');
 
    console.log("error", message); 
    res.send(message);
    } else { 
     next();
  } 
}


module.exports ={ signupMiddleware, signinMiddleware, deleteMiddleware, updateMiddleware}