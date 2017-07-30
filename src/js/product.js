
// 引入css
require('../css/global.css')
require('../css/amazeui.min.css')

require('../css/header.css')
require('../css/footer.css')
require('../css/other_static.css')
require('../css/product.css')

require('../js/lib/amazeui.min')
require('../view/product.html') // 热加载 生产时去掉
var $modal = $('#your-modal');
$(".products-good").on("click",function(){
    $modal.find("#products-modal-img").attr("src",$(this).find(".products-good-img img").attr("src"))
     $modal.modal();
})