const { OnionInsuranceStream } = require('./onion-insurance.stream')

module.exports = {
  Stream: {
    start: () => {
      const streams = [OnionInsuranceStream]

      streams.forEach(stream => stream.watch())
    }
  }
}
