


//ics converter by Travis Kraus https://github.com/Forrest-T/MyUW-Calendar
var ics=function(e,t){"use strict";{if(!(navigator.userAgent.indexOf("MSIE")>-1&&-1==navigator.userAgent.indexOf("MSIE 10"))){void 0===e&&(e="default"),void 0===t&&(t="Calendar");var r=-1!==navigator.appVersion.indexOf("Win")?"\r\n":"\n",n=[],i=["BEGIN:VCALENDAR","PRODID:"+t,"VERSION:2.0"].join(r),o=r+"END:VCALENDAR",a=["SU","MO","TU","WE","TH","FR","SA"];return{events:function(){return n},calendar:function(){return i+r+n.join(r)+o},addEvent:function(t,i,o,l,u,s){if(void 0===t||void 0===i||void 0===o||void 0===l||void 0===u)return!1;if(s&&!s.rrule){if("YEARLY"!==s.freq&&"MONTHLY"!==s.freq&&"WEEKLY"!==s.freq&&"DAILY"!==s.freq)throw"Recurrence rrule frequency must be provided and be one of the following: 'YEARLY', 'MONTHLY', 'WEEKLY', or 'DAILY'";if(s.until&&isNaN(Date.parse(s.until)))throw"Recurrence rrule 'until' must be a valid date string";if(s.interval&&isNaN(parseInt(s.interval)))throw"Recurrence rrule 'interval' must be an integer";if(s.count&&isNaN(parseInt(s.count)))throw"Recurrence rrule 'count' must be an integer";if(void 0!==s.byday){if("[object Array]"!==Object.prototype.toString.call(s.byday))throw"Recurrence rrule 'byday' must be an array";if(s.byday.length>7)throw"Recurrence rrule 'byday' array must not be longer than the 7 days in a week";s.byday=s.byday.filter(function(e,t){return s.byday.indexOf(e)==t});for(var c in s.byday)if(a.indexOf(s.byday[c])<0)throw"Recurrence rrule 'byday' values must include only the following: 'SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'"}}var g=new Date(l),d=new Date(u),f=new Date,S=("0000"+g.getFullYear().toString()).slice(-4),E=("00"+(g.getMonth()+1).toString()).slice(-2),v=("00"+g.getDate().toString()).slice(-2),y=("00"+g.getHours().toString()).slice(-2),A=("00"+g.getMinutes().toString()).slice(-2),T=("00"+g.getSeconds().toString()).slice(-2),b=("0000"+d.getFullYear().toString()).slice(-4),D=("00"+(d.getMonth()+1).toString()).slice(-2),N=("00"+d.getDate().toString()).slice(-2),h=("00"+d.getHours().toString()).slice(-2),I=("00"+d.getMinutes().toString()).slice(-2),R=("00"+d.getMinutes().toString()).slice(-2),M=("0000"+f.getFullYear().toString()).slice(-4),w=("00"+(f.getMonth()+1).toString()).slice(-2),L=("00"+f.getDate().toString()).slice(-2),O=("00"+f.getHours().toString()).slice(-2),p=("00"+f.getMinutes().toString()).slice(-2),Y=("00"+f.getMinutes().toString()).slice(-2),U="",V="";y+A+T+h+I+R!=0&&(U="T"+y+A+T,V="T"+h+I+R);var B,C=S+E+v+U,j=b+D+N+V,m=M+w+L+("T"+O+p+Y);if(s)if(s.rrule)B=s.rrule;else{if(B="rrule:FREQ="+s.freq,s.until){var x=new Date(Date.parse(s.until)).toISOString();B+=";UNTIL="+x.substring(0,x.length-13).replace(/[-]/g,"")+"000000Z"}s.interval&&(B+=";INTERVAL="+s.interval),s.count&&(B+=";COUNT="+s.count),s.byday&&s.byday.length>0&&(B+=";BYDAY="+s.byday.join(","))}(new Date).toISOString();var H=["BEGIN:VEVENT","UID:"+n.length+"@"+e,"CLASS:PUBLIC","DESCRIPTION:"+i,"DTSTAMP;VALUE=DATE-TIME:"+m,"DTSTART;VALUE=DATE-TIME:"+C,"DTEND;VALUE=DATE-TIME:"+j,"LOCATION:"+o,"SUMMARY;LANGUAGE=en-us:"+t,"TRANSP:TRANSPARENT","END:VEVENT"];return B&&H.splice(4,0,B),H=H.join(r),n.push(H),H},download:function(e,t){if(n.length<1)return!1;t=void 0!==t?t:".ics",e=void 0!==e?e:"calendar";var a,l=i+r+n.join(r)+o;if(-1===navigator.userAgent.indexOf("MSIE 10"))a=new Blob([l]);else{var u=new BlobBuilder;u.append(l),a=u.getBlob("text/x-vCalendar;charset="+document.characterSet)}return saveAs(a,e+t),l},build:function(){return!(n.length<1)&&i+r+n.join(r)+o}}}console.log("Unsupported Browser")}};
var saveAs=saveAs||function(e){"use strict";if(typeof e==="undefined"||typeof navigator!=="undefined"&&/MSIE [1-9]\./.test(navigator.userAgent)){return}var t=e.document,n=function(){return e.URL||e.webkitURL||e},r=t.createElementNS("http://www.w3.org/1999/xhtml","a"),o="download"in r,a=function(e){var t=new MouseEvent("click");e.dispatchEvent(t)},i=/constructor/i.test(e.HTMLElement)||e.safari,f=/CriOS\/[\d]+/.test(navigator.userAgent),u=function(t){(e.setImmediate||e.setTimeout)(function(){throw t},0)},s="application/octet-stream",d=1e3*40,c=function(e){var t=function(){if(typeof e==="string"){n().revokeObjectURL(e)}else{e.remove()}};setTimeout(t,d)},l=function(e,t,n){t=[].concat(t);var r=t.length;while(r--){var o=e["on"+t[r]];if(typeof o==="function"){try{o.call(e,n||e)}catch(a){u(a)}}}},p=function(e){if(/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)){return new Blob([String.fromCharCode(65279),e],{type:e.type})}return e},v=function(t,u,d){if(!d){t=p(t)}var v=this,w=t.type,m=w===s,y,h=function(){l(v,"writestart progress write writeend".split(" "))},S=function(){if((f||m&&i)&&e.FileReader){var r=new FileReader;r.onloadend=function(){var t=f?r.result:r.result.replace(/^data:[^;]*;/,"data:attachment/file;");var n=e.open(t,"_blank");if(!n)e.location.href=t;t=undefined;v.readyState=v.DONE;h()};r.readAsDataURL(t);v.readyState=v.INIT;return}if(!y){y=n().createObjectURL(t)}if(m){e.location.href=y}else{var o=e.open(y,"_blank");if(!o){e.location.href=y}}v.readyState=v.DONE;h();c(y)};v.readyState=v.INIT;if(o){y=n().createObjectURL(t);setTimeout(function(){r.href=y;r.download=u;a(r);h();c(y);v.readyState=v.DONE});return}S()},w=v.prototype,m=function(e,t,n){return new v(e,t||e.name||"download",n)};if(typeof navigator!=="undefined"&&navigator.msSaveOrOpenBlob){return function(e,t,n){t=t||e.name||"download";if(!n){e=p(e)}return navigator.msSaveOrOpenBlob(e,t)}}w.abort=function(){};w.readyState=w.INIT=0;w.WRITING=1;w.DONE=2;w.error=w.onwritestart=w.onprogress=w.onwrite=w.onabort=w.onerror=w.onwriteend=null;return m}(typeof self!=="undefined"&&self||typeof window!=="undefined"&&window||this.content);if(typeof module!=="undefined"&&module.exports){module.exports.saveAs=saveAs}else if(typeof define!=="undefined"&&define!==null&&define.amd!==null){define("FileSaver.js",function(){return saveAs})};



//scraper by me
//Schedule JSON has year, quarter, term, sections
// term: includes time info about the quarter
// section: includes all class info
//scrapes MyUW and creates calender.ics of UW class schedule.
async function scrape() {
    let scheduleJSON = await fetch('https://my.uw.edu/api/v1/schedule/current').then((data) => data.json());
    if (typeof scheduleJSON != 'object') {
        console.error('Unable to access data!');
        console.log('Are you sure you\re on the right page?');
        return;
    }

    let cal = ics();
    let sections = scheduleJSON.sections;
    let term = scheduleJSON.term;

    //loop over sections and get info
    let days = new Map([
        ["sunday", 'SU'],
        ["monday", 'MO'],
        ["tuesday", 'TU'],
        ["wednesday", 'WE'],
        ["thursday", 'TH'],
        ["friday", 'FR'],
        ["saturday", 'SA'],
    ]);

    //loop over each course and add to calender if meeting exists.
    for (let i = 0; i < sections.length; i++) {
        let course = sections[i];
        /*
        every course needs:
        curriculum_abbr: ex CSE
        course_number: ex 331
        section_id: ex A
        course.meetings.meeting_days: arr len 7 of {"monday: true",....}
        course.meetings.start_time, end_time, building, room_num
        only adds sections with meeting times.
        */
        if (!course.meetings[0].no_meeting) {
            let course_name = course.curriculum_abbr + ' ' + course.course_number + ' ' + course.section_id;
            let meeting_days = course.meetings[0].meeting_days;

            //get meeting days in rrule format
            let meeting_days_ics = [];
            let first_class_of_week = -1;
            let ctr = 0;
            let day_in_week = 0;
            for (let week_day in meeting_days) {
                let value = meeting_days[week_day];
                if (value) {
                    if (ctr == 0) {
                        first_class_of_week = day_in_week;
                        ctr++;
                    }
                    meeting_days_ics.push(days.get(week_day));
                }
                day_in_week++;
            }

            //format 24hr time to am/pm time
            let start_time = AmPmFormatter(course.meetings[0].start_time);
            let end_time = AmPmFormatter(course.meetings[0].end_time);

            //update cal
            //until should be one day after last day due to exclusive rrule bound.
            //increment last day
            let last_day = new Date(term.last_day_instruction);
            last_day.setDate(last_day.getDate() + 1);
            let start_day = get_start_date(first_class_of_week);
            const rrule = {
                freq: 'WEEKLY',
                until: last_day,
                interval: '1',
                byday: meeting_days_ics
            };
            cal.addEvent(course_name, '', course.meetings[0].building + ' ' + course.meetings[0].room_number, start_day + ' ' + start_time, start_day + ' ' + end_time, rrule);

            //get final exam time
            //note that sections without final exam will only have no_exam_or_nontraditional and is_confirmed fields.
            if (!(course.final_exam.no_exam_or_nontraditional) && course.final_exam.start_date != null) {
                let final_exam_description = '';
                let final_start_time = ''+course.final_exam.start_date;
                let final_end_time = ''+course.final_exam.end_date;
                let final_start = formatFinalTime(final_start_time);
                let final_end = formatFinalTime(final_end_time);
                if (course.final_exam.is_confirmed) {
                    final_exam_description = 'confirmed';
                } else {
                    final_exam_description = 'unconfirmed';
                }
                cal.addEvent(course_name + " Final Exam", final_exam_description, course.final_exam.building + ' ' + course.final_exam.room_number, final_start, final_end);
            }
        }
    }
    cal.download();

    //takes final time in 2023-06-05T10:20:00 form and converts to
    // 2023-06-05 10:20 am
    function formatFinalTime(final_time) {
        let split_time = final_time.split('T');
        let hour = (split_time[1]).substring(0, 5);
        if (hour.charAt(0) == '0') {
            hour = hour?.substring(1, hour.length);
        }
        return split_time[0] + ' ' + AmPmFormatter(hour);
    }

    /*
    * takes in a hour time in 24hr format
    * outputs same time in am/pm format
    * ex: 17:00 -> 5:00 pm
    * */
    function AmPmFormatter(hour) {
        let am_pm = 'am';
        let hr_min = hour.split(':');
        let hr = parseInt(''+hr_min[0]);
        if (hr > 12) {
            am_pm = 'pm';
            hr_min[0] = '' + hr - 12;
        }
        return hr_min[0] + ':' + hr_min[1] + ' ' + am_pm;
    }

    /*
    * takes the index (0 = sunday, 1 = monday, etc) of the first class
    * period of each course, and gets that first date in yyyy-mm-dd string format
    * */
    function get_start_date(first_class_of_week) {
        //start date must be the first day that event occurs,
        let start_week = [];
        let offset = (new Date(term.first_day_quarter)).getDay();

        //get the first 7 days from first day of school to determine start date of each section.
        //first 7 days so that every day of the week is covered once.
        for (let i = 0; i < 7; i++) {
            let day = new Date(term.first_day_quarter);
            day.setDate(day.getDate() + i);
            start_week.push(day);
        }
        let start_day;
        if (first_class_of_week >= offset) {
            start_day = (start_week[first_class_of_week - offset]).toISOString().split('T')[0];
        } else {
            start_day = (start_week[(6 - offset) + first_class_of_week]).toISOString().split('T')[0];
        }
        return start_day;
    }
}
scrape();


