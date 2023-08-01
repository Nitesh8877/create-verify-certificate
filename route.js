const Controller=require('./controller');

module.exports=function(app){
    app.post('/api/certificate', Controller.createCertificate);
    app.get('/api/certificate/:certificateId', Controller.verifyCertificateById)
}