if (process.env.NODE_ENV === 'production') {
    module.exports=require('./AppLayoutRoutesPROD')
} else {
    module.exports=require('./AppLayoutRoutesDEV')
}