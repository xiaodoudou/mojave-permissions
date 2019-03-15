const currentOs = process.platform

let bin
if (currentOs === "darwin") {
  bin = require('./build/Release/mojave-permissions')
} else {
  bin = {
    askForMediaAccess: (mediaType, callback)=> {
      return callback(true)
    },
    getMediaAccessStatus: (mediaType)=> {
      return true
    }
  }
}

module.exports = {
  /**
   * @param {String} mediaType
   * @return {String}
   */
  getMediaAccessStatus(mediaType) {
    return bin.getMediaAccessStatus(mediaType)
  },

  /**
   * @param {String} mediaType
   * @param {Function} callback
   */
  askForMediaAccess(mediaType, callback) {
    return bin.askForMediaAccess(mediaType, callback)
  }
}
