require.config({ baseUrl : '/'});
require(['first', 'second'], function(first, second){
    alert(first + second);
});
