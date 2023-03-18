
var Model = () => {

        
    var self = this
    self.articlefilter = ""
    self.categories = Categories.sort((a, b) => a.sortIndex > b.sortIndex)
    self.shops = Shops.sort((a, b) => a.id > b.id)
    self.articles = Articles
    self.filtered = () =>   {
                                return self.articlefilter == '' ? self.articles : self.articles.filter(a => a.label.toLowerCase().indexOf(self.articlefilter) > 1)
                            }


}

document.addEventListener('alpine:init', () => {
    Alpine.data('allData', Model )
})



