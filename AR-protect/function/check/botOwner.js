const StateManager = require('../../utils/StateManager')

const owner = new Map();
owner.set('611583733220507658', 'hastalavista');

module.exports = function checkByPass(authorId) { 

  const isOwner = owner.has(authorId);
  var ownerCheck = false;

  if (isOwner == true){
    ownerCheck = true;
  }
  console.log(isOwner)
  return ownerCheck;
  
};
