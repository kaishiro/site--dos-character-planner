(function () {

  'use strict'

  var n;

  $(document).ready(function () {

    // Disable progression levels

    var disableLevels = function() {
      $('.progression .progression__item').addClass('is--disabled');
      $('.progression .progression__item').removeClass('is--active');
    }
    
    var enableLevel = function( level ) {
      disableLevels();

      for (var i = 1; i < level + 1; i++) { 
        $('.progression .progression__item[data-level=' + i + ']').removeClass('is--disabled');
      }
      
      $('.progression .progression__item[data-level=' + level + ']').addClass('is--active');
    }

    enableLevel(1);

    // Disable attributes lists
    //
    // Disable abilities
    //
    // Disable talents
    //
    // Disable skills
    //
    // Disable traits


    $('.progression .progression__button--increment').on('click', function() {
      var level = $('.progression .progression__item.is--active').data('level');
      enableLevel( level + 1 );
    });

    $('.progression .progression__button--decrement').on('click', function() {
      var level = $('.progression .progression__item.is--active').data('level');
      enableLevel( level - 1 );
    });



    $('.attribute .attribute__increment').on('click', function() {
      // Increment current value by 1
      var currentValue = parseInt($(this).siblings('.attribute__value').val(), 10);
      var currentLevel = $(this).closest('.attributes__list').data('level');
      var currentAttribute = $(this).closest('.attribute').data('attribute');
      $(this).siblings('.attribute__value').val(currentValue + 1)

      // Cascade new increment down the level chain
      for (var i = currentLevel; i < 21; i++) { 
        $('.attributes .attributes__list[data-level=' + ( i + 1 ) + '] .attribute--' + currentAttribute + ' .attribute__value').val(parseInt($('.attributes .attributes__list[data-level=' + ( i ) + '] .attribute--' + currentAttribute + ' .attribute__value').val(), 10));
      }
    });

    $('.attribute .attribute__decrement').on('click', function() {
      // Decrement current value by 1
      var currentValue = parseInt($(this).siblings('.attribute__value').val(), 10);
      var currentLevel = $(this).closest('.attributes__list').data('level');
      var currentAttribute = $(this).closest('.attribute').data('attribute');
      $(this).siblings('.attribute__value').val(currentValue - 1)

      // Cascade new increment down the level chain
      for (var i = currentLevel; i < 21; i++) { 
        $('.attributes .attributes__list[data-level=' + ( i + 1 ) + '] .attribute--' + currentAttribute + ' .attribute__value').val(parseInt($('.attributes .attributes__list[data-level=' + ( i ) + '] .attribute--' + currentAttribute + ' .attribute__value').val(), 10));
      }
    });

    // Set initial attribute values
    $('.attributes .attributes__list[data-level=1] .attribute__value').val(5);

    // Cascade initial attribute values
    var attributes = ['strength', 'dexterity', 'intelligence', 'speed', 'perception' ]

    for (var i = 0; i < attributes.length; i++) {
      for (var j = 2; j < 21; j++) { 
        $('.attributes .attributes__list[data-level=' + j + '] .attribute--' + attributes[i] + ' .attribute__value').val(parseInt($('.attributes .attributes__list[data-level=' + (j - 1) + '] .attribute--' + attributes[i] + ' .attribute__value').val(), 10));
      }
    }



  }),

  n = {

    Hover: {
      listeners: function() {
        // $('.hover').hover(n.Hover.hover_component);
      },

      hover_component: function(e) {
      }
    },

    Toggle: {

      listeners: function() {
        // $('.toggle').on('click', n.Toggle.toggle_component);
      },

      toggle_component: function(e) {
      }
    }
  }

}());
