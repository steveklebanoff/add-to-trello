## Chrome Extension: Add items from Craigslist to Trello

Based on the wonderful [walteranderson/add-to-trello](https://github.com/walteranderson/add-to-trello) extension, but with the improvements for Craigslist:

- Includes Craigslist price in title
- Automatically adds image from Craigslist post

And a few general improvements:
- Adds to top of board instead of bottom
- Adds a "Saving..." state
- Link to view card after added

You can also use the extension to add non-craigslist pages as well.

### See It In Action

![image](https://s14.postimg.io/ivu8lniv5/out6.gif)

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
