const limitAndOffset = (limit,offset) => {
    const defaultLimit = '20'
    if(!limit && !offset){
        return defaultLimit;
    }
    const l = parseInt(limit,10);
    const o = parseInt(offset,10);
    if(l < 0 || o < 0){
        return defaultLimit;
    }
    if(!o){
        return `${l}`;
    }
    if(!l){
        return `${o}, ${defaultLimit}`;
    }
    return `${o}, ${l}`;
};
const orderBy = (order) => {
    if(!order){
        return '';
    }
    switch(order){
        case 'name':
            return order;
        case 'title':
            return order;
        case 'rank':
            return order;
        default:
            return '';
    }
};
const handleException = (code,res) => {
    if(code === 'ER_PARSE_ERROR'){
        return res.status(500).send({status:500,message:'error parsing sql'});
    }else if(code === 'ER_NO_SUCH_TABLE'){
        return res.status(500).send({status:500,message:'table does not exist'});
    }else if(code === 'ER_BAD_FIELD_ERROR'){
        return res.status(500).send({status:500,message:'unkown column'});
    }else{
        return res.status(500).send({status:500,message:'unknown error'});
    }
};
module.exports = {
    limitAndOffset,
    orderBy,
    handleException
};