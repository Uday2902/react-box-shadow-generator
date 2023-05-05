# Chrome Extension: Price Tracker

This is a Chrome extension that tracks the price of products on various e-commerce websites. The extension is built using Python, Selenium, and Beautiful Soup for web scraping.

## Features

- The extension supports multiple e-commerce websites.
- The user interface is simple and easy to use.
- User can give desired price for any product and when actual price of product reaches to desired price then user will get informed via email

## Installation

1. Clone the repository to your local machine.
2. Install the required Python dependencies using `pip install -r requirements.txt`.

- Open Chrome and navigate to `chrome://extensions/`.
- Enable developer mode by clicking the toggle button on the top right corner.
- Click on "Load unpacked" and select the cloned repository.
- The extension should now be installed and ready to use.

## Usage
1. Run `app.py` file
2. Open the e-commerce website of your choice.
3. Navigate to the product page of the product you want to track.
4. Click on the extension icon on the top right corner of your Chrome browser.
5. Click on "Add to watchlist" to start tracking the price of the product.
6. You will receive a notification when the price of the product changes.
