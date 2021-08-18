var library = [
{
author: 'Bill Gates',
title: 'The Road Ahead',
readingStatus: true
},
{
author: 'Steve Jobs',
title: 'Walter Isaacson',
readingStatus: true
},
{
author: 'Suzanne Collins',
title: 'Mockingjay: The Final Book of The Hunger Games',
readingStatus: false
}];

for (var i = 0; i < library.length; i++) 
   {
    var book ='The book '+ library[i].title + ' written by ' + library[i].author ;
    if (library[i].readingStatus) {
      document.write(book +" => " +" was read. ");
      document.write("\n");
    } else
    {
     document.write( book +" => " +" was not read.  ");
      document.write("\n");
    }
   }