$(function() {
    var arr = ['apple', 'banana', 'cedar', 'whatever']
    console.log('exp start')
    $(arr).each(function(index, item) {
        console.log("index: ", index, ", item: ", item)
    })
});
