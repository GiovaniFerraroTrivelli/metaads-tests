class PaginationHelper {
	collection;
	itemsPerPage;

	constructor(collection, itemsPerPage) {
		// The constructor takes in an array of items and an integer indicating how many
		// items fit within a single page
		this.collection = collection;
		this.itemsPerPage = itemsPerPage;
	}

	itemCount() {
		return this.collection.length;
	}

	pageCount() {
		if (!this.itemsPerPage) {
			return 0;
		}

		return Math.ceil(this.collection.length / this.itemsPerPage);
	}

	pageItemCount(pageIndex) {
		// returns the number of items on the current page. page_index is zero based.
		// this method should return -1 for pageIndex values that are out of range
		if (!this.itemsPerPage) {
			return 0;
		}

		if(pageIndex < 0 || pageIndex >= this.pageCount()) {
			return -1;
		}

		return Math.min(this.itemsPerPage, this.collection.length - (pageIndex * this.itemsPerPage));
	}

	pageIndex(itemIndex) {
		// determines what page an item is on. Zero based indexes
		// this method should return -1 for itemIndex values that are out of range
		if(itemIndex < 0 || itemIndex >= this.collection.length) {
			return -1;
		}

		return Math.floor(itemIndex / this.itemsPerPage);
	}
}

module.exports = PaginationHelper;
