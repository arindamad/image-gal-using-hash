    imgs = "";
        $(".arImagesAnch").on('click', function(e){
            var imgs = $(this).html();
            $("#myModal").modal("show");
            $('.modal-body').html(imgs);
        });
        // $('#myModal [data-dismiss="modal"], #myModal').on('click', function(){            
            
        // });
        $('#myModal').on('hidden.bs.modal', function (e) {
            val = window.location.href.split('#')[0];
            function ChangeUrl(page, url) {
                if (typeof (history.pushState) != "undefined") {
                    var obj = {Page: page, Url: url};
                    history.pushState(obj, obj.Page, obj.Url);
                } else {
                    window.location.href = "homePage";                    
                }
            }
            ChangeUrl('Page1', val);
        });

        $(document).ready(function(){
            var myHash = window.location.hash;
            if(myHash!=""){                
                // console.log(myHash);
                $("#myModal").modal("show");
                var images = $('a[href="'+myHash+'"]').html();
                $('.modal-body').html(images);
            }           
        });
       