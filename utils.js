function formatMessage(message) {
  return `[Service-1] ${message}`;
}

function log(message) {
  console.log(formatMessage(message));
}

module.exports = {
  formatMessage,
  log
};

