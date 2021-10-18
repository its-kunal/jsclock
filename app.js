setInterval(()=>{
    d = new Date()
    h = d.getHours()
    m = d.getMinutes()
    s = d.getSeconds()
    hrot = h*30 + m*0.5 + s/3600
    mrot = m*6 + s/60
    srot = s*6
    h = document.getElementById("hour")
    m = document.getElementById("minute")
    s = document.getElementById("second")
    h.style.transform = `rotate(${hrot}deg)`
    m.style.transform = `rotate(${mrot}deg)`
    s.style.transform = `rotate(${srot}deg)`
},10)