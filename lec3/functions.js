 var modul = (function(){
     return{
undefined: function(val){
    return (val === undefined);
},
null: function(val){
    return (val === null);

},
nan: function(val){
    return Number.isNaN(val);
},
emptyObject: function(object){
    return Object.keys(object).length === 0; 
    },
changeProperty: function(obj){
obj.map(function(num){
    return num * 3;
});
return obj;
 

},
randomNumber: function(first,second){
return Math.floor(Math.random * (second - first) + first);
},
compareobject: function(obj1,obj2){
    if(obj1===obj2){
        return true;
    }
    if(Object.keys(obj1).length !== Object.keys(obj2).length)
    return false;
    else{
        if(this.emptyObject(obj1) && this.emptyObject(obj2) )
        return true;
    }
    var prop;
    for(var key in obj1){
        if(typeof(obj1[key]) == "Object")
        this.compareobject(obj1[key], obj2[key])
        else
        prop = (obj1[key]===obj2[key]);
        if(!prop)
        return false
    }
    return prop;

} ,
removeprop : function(obj){
    for(var key in obj){
        if(undefined(obj[key] === false))
        delete odj[key];
    }
    return obj;

} 


     }})();


    var a;
    console.log(modul.undefined(a));
    console.log(modul.null(3));
    console.log(modul.nan(6));
