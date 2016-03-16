/*
 * @Author: dongjiabo
 * @Date:   2016-03-16 18:25:14
 * @Last Modified by:   dongjiabo
 * @Last Modified time: 2016-03-16 20:12:45
 */

'use strict';
(function(window, document, undefined) {
    function Tab(selector, options) {
        this.init(selector, options);
        this.bindDom();
    }
    Tab.prototype = {
        init: function(selector, options) {
            if (typeof selector === 'string') {
                this.dom = document.querySelector(selector);
            } else {
                this.dom = selector;
            }
            this.event = options.event || 'click';
        },
        bindDom: function() {
            var dom = this.dom;
            var listTitle = dom.getElementsByClassName('tab-title-list');
            var contentList = dom.getElementsByClassName('tab-content-list');
            var len = listTitle.length;
            var _this = this;

            for (var i = 0; i < len; i++) {
                listTitle[i].index = i;
                listTitle[i].addEventListener(this.event, function() {
                    for (var j = 0; j < len; j++) {
                        listTitle[j].style.cssText = "background-color:#e8e8e8;color:#222;";
                        contentList[j].style.display = "none";
                    }
                    this.style.cssText = "background-color:#222;color:#fff;"
                    contentList[this.index].style.display = "block";

                }, false);

            }
        }
    };
    window.Tab = Tab;
})(window, document);


new Tab('#tab', {
    event: 'click',
});
