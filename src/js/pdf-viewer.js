angular.module('pdf')
  .directive('pdfViewer', [
    '$window',
    '$log',
    'pdfDelegate',
  function($window, $log, pdfDelegate) {
    return {
      restrict: 'E',
      template: '<pdf-viewer-toolbar ng-if="showToolbar" delegate-handle="{{id}}" page-count="pageCount"></pdf-viewer-toolbar><div id="canvasContainer"></div>',
      scope: true,
      controller: 'PdfCtrl',
      link: function(scope, element, attrs) {
        scope.id = attrs.delegateHandle;
        scope.showAllPages = scope.$eval(attrs.showAllPages) || false;
        scope.showToolbar = (scope.$eval(attrs.showToolbar) && !scope.showAllPages) || false;
      }
    };
}]);
