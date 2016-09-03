Chrome extension to add items from Craigslist to Trello

### How To Develop
- `npm install -g bower`
- clone this repo and cd into it
- copy `assets/js/key.js.tmpl` to `assets/js/key.js` and update with key from https://trello.com/app-key
- `bower install`
- Go to http://chrome://extensions
- Enable "Developer Tools"
- Click "Load unpacked extension.."
- Select directory of this repo

### MVP Roadmap
- [x] Automatically populate title with price
- [x] Automatically upload attachment photo
  - [x] Make sure it works when there are no photos
- [x] Remove "Card Title" and "Description" settings
- [x] Add loading... state
- [x] Gracefully handle not being on craigslist item page
- [x] Successful save notification
- [x] Make manifest permissions more granular
- [x] Use custom API key
- [x] Update Donations and Credits on Settings
- [x] Update Icon
- [x] Update manifest

### Nice To Have
- [ ] Handle errors better
- [ ] Populate contact information
- [ ] Maybe Price should be tagged in more clear way? (beginning of title?)
- [ ] Show Image Preview
- [ ] Selectable Image Preview
