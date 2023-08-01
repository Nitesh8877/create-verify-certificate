const Certificate = require('./model');

// Create a new certificate
exports.createCertificate = async (req, res) => {
  try {
    const certificateData = req.body; // The data sent by the user
        if(certificateData.name==undefined){
            return res.status(400).send({
                message:"Name is not provided!"
            })
        }else if(certificateData.course==undefined){
            return res.status(400).send({
                message:"Course is not provided! "
            })
        }else if(certificateData.sign==undefined){
            return res.status(400).send({
                message:"Sign not provided"
            })
        }

    // Save the certificate data to the database
    const newCertificate = new Certificate(certificateData);
    const savedCertificate = await newCertificate.save();

    res.status(201).send(savedCertificate);
  } catch (error) {
    console.error('Error creating certificate:', error);
    res.status(500).json({ error: 'Error creating certificate',error });
  }
};


// Verify a certificate using its ID
exports.verifyCertificateById = async (req, res) => {
  try {
    const { certificateId } = req.params;

    // Search for the certificate in the database by its ID
    const certificate = await Certificate.findById(certificateId);

    if (!certificate) {
      return res.status(404).send({ message: 'Certificate not found' });
    }

    // Return the verification result
    res.status(200).send({ 
        message: 'Certificate verified successfully',
         certificate
     });
  } catch (error) {
    console.error('Error verifying certificate:', error);
    res.status(500).json({ error: 'Error verifying certificate' });
  }
};
