(function ($) {

    $.fn.todo = function (options) {
        console.log("CALL PLUGIN");
        var defaults = {
            serverURL : "example.com/server_page_url"
        }

        options = $.extend(defaults, options);

        console.log("OPTIONS: " + options['serverURL']);

        return this.each(function (i, obj) {
            var $this = $(this);

            $this.wrap('<div class="plugin_wrapper" />');

            $this.addClass('to-do-list-container');

            $('<h2>My to do list</h2>' + '<textarea class="todo_textarea"></textarea>' + '<input type="submit" value="add to do" class="to_do_submit" />').insertBefore($this);

            var $submitButton = $('.to_do_submit', $this.parent());

            $submitButton.on('click', function () {
                console.log("To Do Submit");
                sendToDo($this);
            })
        });

        function sendToDo($el) {
            console.log("$el");
            var $this = $el;
            console.log("Send To Do");
            request_type = 'insert';
            var $todoText = $this.parent().find('.todo_textarea');
            var todoText = $todoText.val();
            console.log("TODO TEXT: " + todoText);
            $todoText.val("");

            if(todoText.length > 2){
                var request = $.ajax({
                    url: options.serverURL,
                    type: "POST",
                    data: {"text": todoText, "action": request_type},
                    dataType: "json"
                });

                request.done(function (data) {
                   console.log("REQUEST.DONE:" + data);
                   handleInsert(data, $this);

                });

                request.fail(function (jqXHR, textStatus) {
                    console.log("REQUEST.FAIL:" +textStatus);


                })

            }

        }

    }


})(jQuery);
