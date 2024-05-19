// Siguria dhe Autorizimi
const crypto = require('crypto');

function securityAuthorization() {
    return {
        authorize: (user, action) => {
            if (user.roles.includes(action.requiredRole)) {
                console.log(`${user.name} authorized for action: ${action.name}`);
                return true;
            } else {
                console.log(`${user.name} not authorized for action: ${action.name}`);
                return false;
            }
        },
        encryptData: (data) => {
            const algorithm = 'aes-256-ctr';
            const key = crypto.randomBytes(32);
            const iv = crypto.randomBytes(16);
            const cipher = crypto.createCipheriv(algorithm, key, iv);
            const encrypted = Buffer.concat([cipher.update(data), cipher.final()]);
            return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') };
        },
        protectData: (data) => {
            const encrypted = this.encryptData(data);
            console.log(`Data protected: ${encrypted.encryptedData}`);
            return encrypted;
        }
    };
}

module.exports = securityAuthorization;
