let PubSub = { handlers:{} };

PubSub.on = function(eventType,handler){
    if(!(eventType in this.handlers)){
        this.handlers[eventType] = [];
    }
    this.handlers[eventType].push(handler);
    return this;
}

PubSub.off = function(eventType,callback){
    delete this.handlers[eventType];
    callback && callback instanceof Function && callback.call(this)
}

PubSub.emit = function(eventType){
    let handlerArgs = Array.prototype.slice.call(arguments,1);
    for(let i=0;i<this.handlers[eventType].length;i++){
        this.handlers[eventType][i].apply(this,handlerArgs)
    }
}

export default PubSub;