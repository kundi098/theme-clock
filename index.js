function time(){
    let date = new Date();
    let time =date.getTime();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let ampm = hr > 12 ? 'PM' : 'AM';
    
    let tik_tok =`${hr}:${min<10 ? '0' : ''}${min}:${sec <10 ? '0' : ''}${sec} ${ampm}`;
    $(".time").html(tik_tok);

    // --------------date----------

    let datee = date.getDate();
    let month = date.getMonth() ;
    let full_year = date.getFullYear();
    
    
    const days=["Monday","Tuesday","Wedneday","Thrusday","Friday","Saturday","Sunday"];
    const years=["Jan","Feb","March","April","May","June","July","August","Spetember","Octuber","November","December",]
    let day = date.getDay();
    let getmon =years[month];
    let getday = days[day];

    let date_method =''; 
    if(datee === 1 || datee === 21 || datee ===31){
        date_method='st';
}
else if(datee===2 ||datee==22) {
    date_method='nd';
}
else if(datee ===3 || datee ==23 ) {
    date_method='rd';
}
else{
    date_method='th';
}
    
    let full_date= `${datee}${date_method} ${getmon}, ${getday}`;

    $(".date").html(full_date);
    

    // let date = new Date();
    // let hr = date.getHours();
    // let min = date.getMinutes();
    // let sec = date.getSeconds();

    let hh = 30*hr + min/2 ;
    let mm = 6*min;
    let ss = 6*sec;

   
    $(".hour").css("transform", `rotate(${hh}deg)`)
    $(".minute").css("transform",`rotate(${mm}deg)`); 
    $(".sec").css("transform",`rotate(${ss}deg)`); 
    
}

timeInterval=setInterval(time , 1000);
time();

function toggle(){
    $(".btn").click(function () {
        $("body").toggleClass("dark-mode");
        // $(".btn").html("Light mode").hasClass(".dark-mode");
        if($("body").hasClass("dark-mode")){
            $(".btn").html("Light mode");
        }
        else{
            $(".btn").html("Dark mode")
        }
    } );
}

toggle();

