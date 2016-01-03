
/**
 * Service to handle interacting with the chrome object
 */
export default {
  getCurrentTab(callback) {
    let queryInfo = { active: true, currentWindow: true }
    chrome.tabs.query(queryInfo, (tabs) => {
      callback(tabs[0])
    });
  }
}
