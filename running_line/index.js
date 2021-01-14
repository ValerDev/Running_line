 $(document).ready(function(){
            const list = $('#newsTicker1 ul')[0]
            let active = true;
            let listItemCounter = 0;
            
            const startRun = () => {
                active = true
                $('.bn-action').text('❙❙')
                let timer = setInterval(() => {
                    if (active) {
                        if(-list.clientWidth > +list.style.marginLeft.split('p')[0] - 500){
                            $('#newsTicker1 ul')[0].style.marginLeft = 0 +'px'
                        }
                        list.style.marginLeft = +list.style.marginLeft.split('p')[0] - 5 + 'px'
                    } else {
                        clearInterval(timer)
                    }
                }, 150)
            }
            startRun()

            $('.bn-controls .btn-action').on('click', function(){
                $('.bn-action').text('▶')
                active ? active = false : startRun();
            })
            
            $('.bn-arrow.bn-prev').parent().on('click', function(){
                list.style.marginLeft = +list.style.marginLeft.split('p')[0] + $('#newsTicker1 ul li')[listItemCounter].clientWidth + 'px'
                listItemCounter === 0 ? listItemCounter = $('#newsTicker1 ul').length - 1 : listItemCounter-- ; 
                if( list.style.marginLeft.split('p')[0] > 500 ){
                    list.style.marginLeft = -list.clientWidth  + $('#newsTicker1 ul li:last-child')[0].clientWidth + 500 +  'px'
                }
            })

            $('.bn-arrow.bn-next').parent().on('click', function(){      
                listItemCounter === $('#newsTicker1 ul').length - 1 ? listItemCounter = 0 : listItemCounter++ ;  
                list.style.marginLeft = +list.style.marginLeft.split('p')[0] - $('#newsTicker1 ul li')[listItemCounter].clientWidth + 'px'
                if(-list.clientWidth > +list.style.marginLeft.split('p')[0] - 500){
                    $('#newsTicker1 ul')[0].style.marginLeft = 0 +'px'
                }
            })
        })
