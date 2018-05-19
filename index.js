function shout(string)
{
  
  return string.toUpperCase()
}

function whisper(string)
{
  return string.toLowerCase()
}

function logShout(string)
{
  console.log(string.toUpperCase())
}

function logWhisper(string)
{
  console.log(string.toLowerCase())
}

functionsayHiToGrandma(string)
{
  var love = "I love you, Grandma."
  var cantHear = 'I can\'t hear you!'
  var indeed = 'YES INDEED!'
  
  if(string === string.toLowerCase()){
    console.log(cantHear)
  }else if(string === string.toUpperCase())
  {
    console.log(indeed)
  }else if(string === love)
  {
    console.log("I love you, too.")
  }
}