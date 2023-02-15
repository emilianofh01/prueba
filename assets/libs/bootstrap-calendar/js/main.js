// (function ($) {

//     "use strict";

//     document.addEventListener('DOMContentLoaded', function () {
//         var today = new Date(),
//             year = today.getFullYear(),
//             month = today.getMonth(),
//             monthTag = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
//             day = today.getDate(),
//             days = document.getElementsByTagName('td'),
//             selectedDay,
//             setDate,
//             daysLen = days.length;
//         // options should like '2014-01-01'
//         function Calendar(selector, options) {
//             this.options = options;
//             this.draw();
//         }

//         Calendar.prototype.draw = function () {
//             this.getCookie('selected_day');
//             this.getOptions();
//             this.drawDays();
//             var that = this,
//                 reset = document.getElementById('reset'),
//                 pre = document.getElementsByClassName('pre-button'),
//                 next = document.getElementsByClassName('next-button');

//             pre[0].addEventListener('click', function () { that.preMonth(); });
//             next[0].addEventListener('click', function () { that.nextMonth(); });
//             reset.addEventListener('click', function () { that.reset(); });
//             while (daysLen--) {
//                 days[daysLen].addEventListener('click', function () { that.clickDay(this); });
//             }
//         };

//         Calendar.prototype.drawHeader = function (e) {
//             //ESTE ES EL JS ORIGINAL DEL CALENDARIO
//             /* var headDay = document.getElementsByClassName('head-day'),
//                 headMonth = document.getElementsByClassName('head-month');

//                 e?headDay[0].innerHTML = e : headDay[0].innerHTML = day;
//                 headMonth[0].innerHTML = monthTag[month] +" - " + year;   */

//             var headMonth = document.getElementsByClassName('head-month');
//             headMonth[0].innerHTML = monthTag[month] + ", " + year;
//         };

//         Calendar.prototype.drawDays = function () {
//             var startDay = new Date(year, month, 1).getDay(),
//                 //      下面表示这个月总共有几天
//                 nDays = new Date(year, month + 1, 0).getDate(),

//                 n = startDay;
//             //      清除原来的样式和日期
//             for (var k = 0; k < 42; k++) {
//                 days[k].innerHTML = '';
//                 days[k].id = '';
//                 //ESTA LÍNEA QUITA TODAS LAS CLASES APLICADAS DIRECTAMENTE AL HTML AL IMPRIMIR EL CALENDARIO EN PANTALLA
//                 /* days[k].className = ''; */
//             }

//             for (var i = 1; i <= nDays; i++) {
//                 days[n].innerHTML = i;
//                 n++;
//             }

//             for (var j = 0; j < 42; j++) {
//                 if (days[j].innerHTML === "") {

//                     days[j].id = "disabled";

//                 } else if (j === day + startDay - 1) {
//                     if ((this.options && (month === setDate.getMonth()) && (year === setDate.getFullYear())) || (!this.options && (month === today.getMonth()) && (year === today.getFullYear()))) {
//                         this.drawHeader(day);
//                         days[j].id = "today";
//                     }
//                 }
//                 if (selectedDay) {
//                     if ((j === selectedDay.getDate() + startDay - 1) && (month === selectedDay.getMonth()) && (year === selectedDay.getFullYear())) {
//                         days[j].className = "selected";
//                         this.drawHeader(selectedDay.getDate());
//                     }
//                 }
//             }
//         };

//         //PERMITE DAR CLICK SOBRE EL DÍA DE UN CALENDARIO Y MARCARLO
//         /* Calendar.prototype.clickDay = function(o) {
//             var selected = document.getElementsByClassName("selected"),
//                 len = selected.length;
//             if(len !== 0){
//                 selected[0].className = "";
//             }
//             o.className = "selected";
//             selectedDay = new Date(year, month, o.innerHTML);
//             this.drawHeader(o.innerHTML);
//             this.setCookie('selected_day', 1);

//         }; */

//         Calendar.prototype.preMonth = function () {
//             if (month < 1) {
//                 month = 11;
//                 year = year - 1;
//             } else {
//                 month = month - 1;
//             }
//             this.drawHeader(1);
//             this.drawDays();
//         };

//         Calendar.prototype.nextMonth = function () {
//             if (month >= 11) {
//                 month = 0;
//                 year = year + 1;
//             } else {
//                 month = month + 1;
//             }
//             this.drawHeader(1);
//             this.drawDays();
//         };

//         Calendar.prototype.getOptions = function () {
//             if (this.options) {
//                 var sets = this.options.split('-');
//                 setDate = new Date(sets[0], sets[1] - 1, sets[2]);
//                 day = setDate.getDate();
//                 year = setDate.getFullYear();
//                 month = setDate.getMonth();
//             }
//         };

//         Calendar.prototype.reset = function () {
//             month = today.getMonth();
//             year = today.getFullYear();
//             day = today.getDate();
//             this.options = undefined;
//             this.drawDays();
//         };

//         Calendar.prototype.setCookie = function (name, expiredays) {
//             if (expiredays) {
//                 var date = new Date();
//                 date.setTime(date.getTime() + (expiredays * 24 * 60 * 60 * 1000));
//                 var expires = "; expires=" + date.toGMTString();
//             } else {
//                 var expires = "";
//             }
//             document.cookie = name + "=" + selectedDay + expires + "; path=/";
//         };

//         Calendar.prototype.getCookie = function (name) {
//             if (document.cookie.length) {
//                 var arrCookie = document.cookie.split(';'),
//                     nameEQ = name + "=";
//                 for (var i = 0, cLen = arrCookie.length; i < cLen; i++) {
//                     var c = arrCookie[i];
//                     while (c.charAt(0) == ' ') {
//                         c = c.substring(1, c.length);

//                     }
//                     if (c.indexOf(nameEQ) === 0) {
//                         selectedDay = new Date(c.substring(nameEQ.length, c.length));
//                     }
//                 }
//             }
//         };
//         // var calendar = new Calendar();


//     }, false);

// })(jQuery);

class Calendar {

    constructor(selector, options) {
        this.today = new Date();
        this.year = this.today.getFullYear();
        this.month = this.today.getMonth();
        this.monthTag = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        this.day = this.today.getDate();
        this.days = document.getElementsByTagName('td');
        this.selectedDay;
        this.setDate;
        this.daysLen = this.days.length;

        this.options = options;

        this.draw();
    }

    draw() {
        this.getCookie('selected_day');
        this.getOptions();
        this.drawDays();
        var that = this,
            reset = document.getElementById('reset')
        // pre = document.getElementsByClassName('pre-button'),
        // next = document.getElementsByClassName('next-button');

        // pre[0].addEventListener('click', function () { that.preMonth(); });
        // next[0].addEventListener('click', function () { that.nextMonth(); });
        reset.addEventListener('click', function () { that.reset(); });
        // while (this.daysLen--) {
        //     this.days[this.daysLen].addEventListener('click', function () { that.clickDay(this); });
        // }

    }

    preMonth() {
        if (this.month < 1) {
            this.month = 11;
            this.year = this.year - 1;
        } else {
            this.month = this.month - 1;
        }
        this.drawHeader(1);
        this.drawDays();
    };

    nextMonth() {
        if (this.month >= 11) {
            this.month = 0;
            this.year = this.year + 1;
        } else {
            this.month = this.month + 1;
        }
        this.drawHeader(1);
        this.drawDays();
    };

    // clickDay(o) {
    //     var selected = document.getElementsByClassName("selected"),
    //         len = selected.length;
    //     if (len !== 0) {
    //         selected[0].classList.remove('selected');
    //     }
    //     o.classList.add("selected");
    //     // this.selectedDay = new Date(this.year, this.month, o.innerHTML);
    //     // this.drawHeader(o.innerHTML);
    //     // this.setCookie('selected_day', 1);

    // };

    getOptions() {
        if (this.options) {
            var sets = this.options.split('-');
            setDate = new Date(sets[0], sets[1] - 1, sets[2]);
            day = setDate.getDate();
            year = setDate.getFullYear();
            month = setDate.getMonth();
        }
    };


    getCookie(name) {
        if (document.cookie.length) {
            var arrCookie = document.cookie.split(';'),
                nameEQ = name + "=";
            for (var i = 0, cLen = arrCookie.length; i < cLen; i++) {
                var c = arrCookie[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1, c.length);

                }
                if (c.indexOf(nameEQ) === 0) {
                    this.selectedDay = new Date(c.substring(nameEQ.length, c.length));
                }
            }
        }
    }

    drawDays() {
        var startDay = new Date(this.year, this.month, 1).getDay(),
            //      下面表示这个月总共有几天
            nDays = new Date(this.year, this.month + 1, 0).getDate(),

            n = startDay;
        //      清除原来的样式和日期
        for (var k = 0; k < 42; k++) {
            this.days[k].innerHTML = '';
            this.days[k].id = '';
            //ESTA LÍNEA QUITA TODAS LAS CLASES APLICADAS DIRECTAMENTE AL HTML AL IMPRIMIR EL CALENDARIO EN PANTALLA
            /* days[k].className = ''; */
        }

        for (var i = 1; i <= nDays; i++) {
            this.days[n].innerHTML = i;
            n++;
        }

        for (var j = 0; j < 42; j++) {
            if (this.days[j].innerHTML === "") {

                this.days[j].id = "disabled";

            } else if (j === this.day + startDay - 1) {
                if ((this.options && (this.month === setDate.getMonth()) && (this.year === setDate.getFullYear())) || (!this.options && (this.month === this.today.getMonth()) && (this.year === this.today.getFullYear()))) {
                    this.drawHeader(this.day);
                    this.days[j].id = "today";
                }
            }
            if (this.selectedDay) {
                if ((j === this.selectedDay.getDate() + startDay - 1) && (this.month === this.selectedDay.getMonth()) && (this.year === this.selectedDay.getFullYear())) {
                    this.days[j].className = "selected";
                    this.drawHeader(this.selectedDay.getDate());
                }
            }
        }
    };

    drawHeader(e) {
        //ESTE ES EL JS ORIGINAL DEL CALENDARIO
        /* var headDay = document.getElementsByClassName('head-day'),
            headMonth = document.getElementsByClassName('head-month');

            e?headDay[0].innerHTML = e : headDay[0].innerHTML = day;
            headMonth[0].innerHTML = monthTag[month] +" - " + year;   */

        var headMonth = document.getElementsByClassName('head-month');
        headMonth[0].innerHTML = this.monthTag[this.month] + ", " + this.year;
    };


}

// this.calendar = new Calendar();
