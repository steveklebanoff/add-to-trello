**In development**: Chrome extension to add items from Craigslist to Trello

### Tasks
- [x] Automatically populate title with price
- [x] Automatically upload attachment photo
  - [x] Make sure it works when there are no photos
- [x] Remove "Card Title" and "Description" settings
- [ ] Add loading... state
- [ ] Handle errors better
- [ ] Populate contact information
- [ ] Gracefully handle not being on craigslist item page
- [ ] Use custom API key
- [ ] Update Donations and Credits on Settings
- [ ] Update Icon
- [x] Make manifest permissions more granular

### How To Develop
- `npm install -g bower`
- clone this repo and cd into it
- `bower install`
- Go to http://chrome://extensions
- Enable "Developer Tools"
- Click "Load unpacked extension.."
- Select directory of this repo
