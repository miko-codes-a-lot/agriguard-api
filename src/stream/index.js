const { ComplaintInsuranceStream } = require('./complaint-insurance.stream')
const { OnionInsuranceStream } = require('./onion-insurance.stream')
const { RiceInsuranceStream } = require('./rice-insurance.stream')
const { IndemnityStream } = require('./indemnity.stream')

module.exports = {
  Stream: {
    start: () => {
      const streams = [
        ComplaintInsuranceStream,
        OnionInsuranceStream,
        RiceInsuranceStream,
        IndemnityStream
      ]

      streams.forEach(stream => stream.watch())
    }
  }
}
