const { OnionInsuranceStream } = require('./onion-insurance.stream')
const { RiceInsuranceStream } = require('./rice-insurance.stream')

module.exports = {
  Stream: {
    start: () => {
      const streams = [
        OnionInsuranceStream,
        RiceInsuranceStream
      ]

      streams.forEach(stream => stream.watch())
    }
  }
}
