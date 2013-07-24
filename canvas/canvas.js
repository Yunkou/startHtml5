/**
 * Created with JetBrains WebStorm.
 * User: dell
 * E-mail:koopking@gmail.com
 * Date: 13-7-24
 * Time: 下午7:05
 * 介绍canvas的javascript api
 */

var canvas=document.getElementById("canvas");
context=canvas.getContext('2d');
context.save();                            //保存当前绘状态
context.restore();                         //恢复之前的保存的绘制状态
context.clearRect(100,100,100,100);        //擦除起始坐标（ x,y）的矩形（ w,h）;
context.translate(100,100);                //移动坐标原点
context.beginPath();                       //开始路径的创建工作
context.fillStyle='green';                 //填充图形的样式
context.strokeStyle='green';               //边框的样式
context.lineTo(100,100);                   //绘制一条直线xy 终点坐标