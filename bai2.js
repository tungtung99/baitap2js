function input(){
    inputWitdh = prompt('Enter the Witdh');
    inputHeight = prompt('Enter the Height');
}
function chuyenkieudulieu(){
    witdh = parseInt(inputWitdh);
    height = parseInt(inputHeight);
}
function tinhdientich(){
    area=witdh*height;
}
function output(){
    document.write("Enter witdh: "+witdh);
    document.write("<br/>");
    document.write("Enter height: "+height);
    document.write("<br/>");
    document.write("The area is: "+area);
}