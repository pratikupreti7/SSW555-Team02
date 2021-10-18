console.log('it works')
$(document).ready(function(){
    $('.submit').click(function(event) {
        event.preventDefault() 
        console.log('Clicked button')

        var Name = $('.Name').val()
        var Email = $('.Email').val()
        var Subject = $('.Subject').val()
        var Message = $('.Message').val()
        var statusElm =$('.status')
        statusElm.empty()


        
        if(Name.length > 0 || Name.includes('A-Z')) {
            console.log('Name',Name)
            statusElm.append('<div>Name Is Valid</div>')

        }
        else {
            event.preventDefault()
            statusElm.append('<div>Name Is Not Valid</div>')
                }
        
        
        if(Email.length > 5 && Email.includes('@')&& Email.includes('.')) {
            statusElm.append('<div>Email Is Valid</div>')

        }
        else {
            event.preventDefault()
            statusElm.append('<div>Email Is Not Valid</div>')
                }
        
        if(Subject.length >= 2) {
            statusElm.append('<div>Subject Is Valid</div>') 
        }
        else {
            event.preventDefault()
            statusElm.append('<div>Subject Is Not Valid</div>') 
        }

        if(Message.length >= 10) {
            statusElm.append('<div>Message Is Valid</div>') 
        }
        else{
            event.preventDefault()
            statusElm.append('<div>Message Is Not Valid</div>') 
        }


    

        
    })

})
