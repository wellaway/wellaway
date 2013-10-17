wellaway
========

###a 3rd party comment system

* main languages: JavaScript, Python
* main framework: jquery, django

####DOING

* solve bugs
* ie8-10 compatiable (any good way to do it?)
* accounts
* android front

####BUG-TRACKING

* https://github.com/ bugs... the script couldn't work via https. maybe we need a https scripts
* iframe will load this plugin, it may be an unwanted action
* timezone is not correct.. now it's utc. we should display it as viewers' time. Or it should be showed like youtube?
* some plugin(js) doesn't work when loading wellaway. Solution(?): http://api.jquery.com/jQuery.noConflict/

####BUG-FIXED

* http://www.douban.com/ on method has no response | need to specify jquery version. if it's below 1.8, then we should use bind instead. Maybe we should use multiply iframe to avoid jquery collision.
* http://www.iciba.com/ zindex not working | set zindex to 2147483646 (MAX-1) because some framework may be error on MAX.

####DONE:

1. simple B/S demo
2. use iframe to avoid css collision
3. firefox/chrome basic testing
4. chrome extension

####TODO-FRONT:
1. ie(haven't got a good idea)
2. firefox(try greasemonkey)/chrome plugins
3. android app development
4. ie basic testing
5. 3 directions to display the plugin
6. IOS front

####TODO-END
1. mongodb storage
2. hadoop cluster

####TODO-MULTI
1. accounts
2. reply to reply
3. notification
4. timeline
5. change page via ajax
