function rndImg(){
    images= new Array();
    images[0]="<img src='file:///D:/suli/lab1/webgame%201/images/gyula.jpg'";
    images[1]="<img src='file:///D:/suli/lab1/webgame%201/images/heviz.jpg'";
    images[2]="<img src='file:///D:/suli/lab1/webgame%201/images/sopron1.jpg'";
    images[3]="<img src='file:///D:/suli/lab1/webgame%201/images/tihany.jpg'";
    images[4]="<img src='file:///D:/suli/lab1/webgame%201/images/visegrad1.jpg'";

    random=Math.floor(Math.random()*images.length);
    document.write(images[random]);





}

rndImg();
