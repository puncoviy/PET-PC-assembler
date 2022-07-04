(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  

    let today = new Date(),
        // dd = String(today.getDate()).padStart(2, "0"),
        // mm = String(today.getMonth() + 1).padStart(2, "0"),
        nextMonth = today.getMonth() + 2,
        yyyy = today.getFullYear(),
        reset = String(nextMonth).padStart(2, "0") + "/01/" + yyyy

    const countDown = new Date(reset).getTime(),
        x = setInterval(function() {    
  
          const now = new Date().getTime(),
                distance = countDown - now;
  
          document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
          //seconds
        }, 0)
    }());

    // let seconds = document.getElementById("seconds").innerText;
    // if (seconds == "1") {
    //     console.log('test')
    // }



    let menuList = document.getElementById('menuList');
    let menuItems= document.querySelectorAll('.header__nav-item');
    let menuButton = document.getElementById('menuButton');

    menuButton.addEventListener('click', function() {
      menuList.classList.toggle('menu-active');
      
      if (menuList.classList.contains('menu-active')) {
        window.addEventListener('scroll', function() {
          menuList.classList.remove('menu-active');
        })
      }
    })

    menuItems.forEach(el => el.addEventListener('click', function() {
      menuList.classList.toggle('menu-active');
    }))