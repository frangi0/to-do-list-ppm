$(document).ready(function () {
    console.log("INIT PLUGIN");
    jQuery(".todo_plugin").todo({serverURL : "server/actions.php"});
});
