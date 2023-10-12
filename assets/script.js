$(document).ready(function () {

    $("#currentDate").text(dayjs().format('dddd D MMMM, YYYY'))

    var hourNum = [9, 10, 11, 12, 13, 14, 15, 16, 17]

    hourNum.forEach(index => {

        var output = ` <div id="hour-${index}" class="row time-block" >
        <div class="col-2 col-md-1 hour text-center py-3">${index}:00</div>
        <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
        <button class="btn saveBtn col-2 col-md-1" aria-label="save">
          <i class="fas fa-save" aria-hidden="true"></i>
        </button>
      </div>`

        $(".time-container").append(output)
    })


    $(".saveBtn").on("click", function () {

        console.log("click");
        var text = $(this).siblings('.description').val()
        var hour = $(this).parent().attr("id")

        console.log(text, hour);

        localStorage.setItem(hour, text)

    })

    var currentTime = dayjs().hour()

    $('.time-block').each(function () {

        var blockTime = parseInt($(this).attr("id").split("-")[1])

        if (blockTime < currentTime) {
            $(this).addClass("past")
        }
        else if (blockTime === currentTime) {
            $(this).removeClass("past")
            $(this).addClass("present")
        }
        else {
            $(this).removeClass("past")
            $(this).removeClass("present")
            $(this).addClass("future")
        }
    })


    $("#hour-9 .description").val(localStorage.getItem("hour-9"))
    $("#hour-10 .description").val(localStorage.getItem("hour-10"))
    $("#hour-11 .description").val(localStorage.getItem("hour-11"))
    $("#hour-12 .description").val(localStorage.getItem("hour-12"))
    $("#hour-13 .description").val(localStorage.getItem("hour-13"))
    $("#hour-14 .description").val(localStorage.getItem("hour-14"))
    $("#hour-15 .description").val(localStorage.getItem("hour-15"))
    $("#hour-16 .description").val(localStorage.getItem("hour-16"))
    $("#hour-17 .description").val(localStorage.getItem("hour-17"))





})



