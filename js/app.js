// alert("HI HERE ANUM");
// document.writeln("Answer =  ",2+2);
// document.writeln("<h1>Here we can use html</h1>");
// console.log("Hello");
// let a = [1,"a",2,"b",3,"c"];
// let i =0;
// a.splice(1,3)
// while(i<a.length){
//         document.writeln("<h1>",a[i],"</h1>")   
//     i++;
// }
// for(var b=1;b<=5;b++){
//     document.writeln("<h1>")
// }
// let a=parseInt(prompt("Enter your CNIC number: "))
// if(a%2==0){
// document.writeln("Female")
// }
// else{
// document.writeln("Male")
// }
// let b=["a","d","c","d","d","c","e","b"];
// let a=["a","b","c","d","e"];
// let c=[]
// for(i=0;i<a.length;i++){
//     for(j=0;j<b.length;j++){
//         if(){}
// c.push(a[j])
//     }
//     document.writeln(c)
// }
// function sm(){
//     document.getElementById("sp").style.overflow="show"
//     document.getElementById("sp").style.height="auto"
//     document.getElementById("s").innerHTML ="showless"
// }
// function sl(){
//     document.getElementById("sp").style.overflow="visible"
//     document.getElementById("sp").style.height="0"
//     document.getElementById("s").innerHTML ="show more"
// }
// function sml(){
//     a= document.getElementById("s").innerHTML
//     if(a=="show more"){
//         sm()
//     }
//     else{
//         sl()
//     }
// }
// function txt(){
//     var name = document.getElementById("txt").value 
//     document.getElementById("box").innerHTML = name
// } 
// function email(){
//     var e = document.getElementById("e").value 
//     document.getElementById("mail").innerHTML = e
// } 
// function num(){
//     var num = document.getElementById("n").value 
//     document.getElementById("num").innerHTML = num
// } 
// function add(){
//     var a = document.getElementById("a").value 
//     document.getElementById("add").innerHTML = a
// }

function cont(){
    let cw=document.getElementById("cw").value
    document.getElementById("cont").style.width = cw

    let hw=document.getElementById("hw").value
    let hws =document.getElementById("hws").value
    document.getElementById("head").style.width = hw + hws
    let hh=document.getElementById("hh").value
    let hhs =document.getElementById("hhs").value
    document.getElementById("head").style.height = hh + hhs
    let hc=document.getElementById("hc").value
    document.getElementById("head").style.backgroundColor = hc

     let nw=document.getElementById("nw").value
    let nws =document.getElementById("nws").value
    document.getElementById("nav").style.width = nw + nws
    let nh=document.getElementById("nh").value
    let nhs =document.getElementById("nhs").value
    document.getElementById("nav").style.height = nh + nhs
    let nc=document.getElementById("nc").value
    document.getElementById("nav").style.backgroundColor = nc

     let mw=document.getElementById("mw").value
    let mws =document.getElementById("mws").value
    document.getElementById("main").style.width = mw + mws
    let mh=document.getElementById("mh").value
    let mhs =document.getElementById("mhs").value
    document.getElementById("main").style.height = mh + mhs
    let mc=document.getElementById("mc").value
    document.getElementById("main").style.backgroundColor = mc

    let fw=document.getElementById("fw").value
    let fws =document.getElementById("fws").value
    document.getElementById("footer").style.width = fw + fws
    let fh=document.getElementById("fh").value
    let fhs =document.getElementById("fhs").value
    document.getElementById("footer").style.height = mh + mhs
    let fc=document.getElementById("fc").value
    document.getElementById("footer").style.backgroundColor = mc
}