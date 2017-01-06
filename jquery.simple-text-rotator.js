/* ===========================================================
 * jquery-simple-html()-rotator.js v1
 * ===========================================================
 * Copyright 2013 Pete Rojwongsuriya. Modified and Extended by Derek Ortiz
 * http://www.thepetedesign.com
 *
 * A very simple and light weight jQuery plugin that 
 * allows you to rotate multiple html() without changing 
 * the layout
 * https://github.com/derekortiz/simple-html()-rotator
 *
 * ========================================================== */
jQuery(document).ready(function($){
  //you can now use $ as your jQuery object.
  var body = $( 'body' );

!function($){

  var _Util = {
    random: function(max){
      return Math.floor(Math.random() * (max + 1)); // rand * (max-min + 1) + min (min is 0)
    },

    getNextIndex: function(shuffleBool, currIndex, length) {
      if(shuffleBool) {
        var newIndex = _Util.random(length-1);
        while(newIndex === currIndex) {
          newIndex = _Util.random(length-1);
        }
        return newIndex;
      } else {
        return (currIndex + 1) % length;
      }
    },

    createStyleTag: function(styleId) {
      if($("#" + styleId).length === 0 ) {
        $("head").append("<style id='"+styleId+"' type='text/css'></style>");
      }
    },

    addStyles: function(speed, styleId, thisSelector) {
      var classStr = thisSelector + " .rotating";
      $("#"+styleId).append(
        thisSelector + " .rotating {"
        +"-webkit-transition:" + speed/1000+"s;"
        +"-moz-transition:" + speed/1000+"s;"
        +"-ms-transition:" + speed/1000+"s;"
        +"-o-transition:" + speed/1000+"s;"
        +"transition:" + speed/1000+"s;"
        +"}"
      );
    }
  };
  
  var defaults = {
    animation: "fade",
    separator: ",",
    delay: 1500,
    shuffle: false,
    startIndex: 0,
    speed: 500,
    styleId: "simple-text-rotator-styles"
  };
  
  $.fx.step.textShadowBlur = function(fx) {
    $(fx.elem).prop('textShadowBlur', fx.now).css({textShadow: '0 0 ' + Math.floor(fx.now) + 'px black'});
  };
  
  $.fn.textrotator = function(options) {
    var settings = $.extend({}, defaults, options);

    _Util.createStyleTag(settings.styleId);
    _Util.addStyles(settings.speed, settings.styleId, $(this).selector);
    
    return this.each(function(){
      var el = $(this),
          array = [],
          intervalSpeed = settings.delay + settings.speed,
          length,
          ind;
      $.each(el.html().split(settings.separator), function(key, value) { 
        array.push(value); 
      });
      length = array.length;
      ind = settings.startIndex % length;
      el.html(array[ind]);
      
      var rotate = function() {
        // animation option
        switch (settings.animation) {

          case 'dissolve':
            setTimeout(function() {
              el.animate({
                textShadowBlur:20,
                opacity: 0
              }, settings.speed / 2, function() {

                ind = _Util.getNextIndex(settings.shuffle, ind, length);

                el.html(array[ind]).animate({
                  textShadowBlur:0,
                  opacity: 1
                }, settings.speed / 2 );
              });
            }, settings.delay);
          break;
          
          case 'flip':
            setTimeout(function() {
              if(el.find(".back").length > 0) {
                el.html(el.find(".back").html())
              }
            
              var initial = el.html();
              ind = _Util.getNextIndex(settings.shuffle, ind, length);
              
              el.html("");
              $("<span class='front'>" + initial + "</span>").appendTo(el);
              $("<span class='back'>" + array[ind] + "</span>").appendTo(el);
              el.wrapInner("<span class='rotating' />").find(".rotating").hide().addClass("flip").show().css({
                "-webkit-transform": " rotateY(-180deg)",
                "-moz-transform": " rotateY(-180deg)",
                "-o-transform": " rotateY(-180deg)",
                "transform": " rotateY(-180deg)"
              })
            }, settings.delay);
          break;
          
          case 'flipUp':
            setTimeout(function() {
              if(el.find(".back").length > 0) {
                el.html(el.find(".back").html())
              }
            
              var initial = el.html();
              ind = _Util.getNextIndex(settings.shuffle, ind, length);
              
              el.html("");
              $("<span class='front'>" + initial + "</span>").appendTo(el);
              $("<span class='back'>" + array[ind] + "</span>").appendTo(el);
              el.wrapInner("<span class='rotating' />").find(".rotating").hide().addClass("flip up").show().css({
                "-webkit-transform": " rotateX(-180deg)",
                "-moz-transform": " rotateX(-180deg)",
                "-o-transform": " rotateX(-180deg)",
                "transform": " rotateX(-180deg)"
              })
            }, settings.delay);
          break;
          
          case 'flipCube':
            setTimeout(function() {
              if(el.find(".back").length > 0) {
                el.html(el.find(".back").html())
              }
            
              var initial = el.html();
              ind = _Util.getNextIndex(settings.shuffle, ind, length);
              
              el.html("");
              $("<span class='front'>" + initial + "</span>").appendTo(el);
              $("<span class='back'>" + array[ind] + "</span>").appendTo(el);
              el.wrapInner("<span class='rotating' />").find(".rotating").hide().addClass("flip cube").show().css({
                "-webkit-transform": " rotateY(180deg)",
                "-moz-transform": " rotateY(180deg)",
                "-o-transform": " rotateY(180deg)",
                "transform": " rotateY(180deg)"
              })
            }, settings.delay);
          break;
          
          case 'flipCubeUp':
            setTimeout(function() {
              if(el.find(".back").length > 0) {
                el.html(el.find(".back").html())
              }
            
              var initial = el.html();
              ind = _Util.getNextIndex(settings.shuffle, ind, length);
              
              el.html("");
              $("<span class='front'>" + initial + "</span>").appendTo(el);
              $("<span class='back'>" + array[ind] + "</span>").appendTo(el);
              el.wrapInner("<span class='rotating' />").find(".rotating").hide().addClass("flip cube up").show().css({
                "-webkit-transform": " rotateX(180deg)",
                "-moz-transform": " rotateX(180deg)",
                "-o-transform": " rotateX(180deg)",
                "transform": " rotateX(180deg)"
              })
            }, settings.delay);
          break;
          
          case 'spin':
            setTimeout(function() {
              if(el.find(".rotating").length > 0) {
                el.html(el.find(".rotating").html())
              }
              ind = _Util.getNextIndex(settings.shuffle, ind, length);
              
              el.wrapInner("<span class='rotating spin' />").find(".rotating").hide().html(array[ind]).show().css({
                "-webkit-transform": " rotate(0) scale(1)",
                "-moz-transform": "rotate(0) scale(1)",
                "-o-transform": "rotate(0) scale(1)",
                "transform": "rotate(0) scale(1)"
              })
            }, settings.delay);
          break;
          
          case 'fade':
            setTimeout(function() {
              el.fadeOut(settings.speed/2, function() {
                ind = _Util.getNextIndex(settings.shuffle, ind, length);
                el.html(array[ind]).fadeIn(settings.speed/2);
              });
            }, settings.delay);
          break;
        }
      };
      rotate();
      setInterval(rotate, intervalSpeed);
    });
  }
  
}(window.jQuery);
  });

