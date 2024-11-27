const form = {
    lists : [],
    add : function(obj){
        this.lists.push(obj);
    },
    remove : function(index){
        this.lists.splice(index,1);
    }
}




function Inforamation(name,job) {
    this.name = name;
    this.job = job;
}