
            (function(global){
                var JUPYTERGRADEDXBLOCKI18N = {
                  init: function() {
                    

(function(globals) {

  var django = globals.django || (globals.django = {});

  
  django.pluralidx = function(count) { return (count == 1) ? 0 : 1; };
  

  /* gettext library */

  django.catalog = django.catalog || {};
  
  var newcatalog = {
    "An error has occurred while uploading your notebook.<br><br>Please contact your instructor.": "Wyst\u0105pi\u0142 b\u0142\u0105d podczas przesy\u0142ania notatnika<br><br>Skontaktuj si\u0119 ze swoim prowadz\u0105cym.", 
    "An error occurred while uploading.<br><br>Please see the javascript console and/or EdX CMS Logs for more information.": "Wyst\u0105pi\u0142 b\u0142\u0105d podczas przesy\u0142ania<br><br>. Wi\u0119cej informacji mo\u017cna znale\u017a\u0107 w javascript console lub/i logach edX CMS.", 
    "Notebook Successfully Uploaded": "Pomy\u015blnie przes\u0142ano notatnik", 
    "Notebook Successfully Uploaded and Scored. ": "Pomy\u015blnie przes\u0142ano i oceniono notatnik.", 
    "Notebook Successfully Uploaded and Scored<br><br>Please see results below": "Pomy\u015blnie przes\u0142ano i oceniono notatnik <br><br> Zobacz wyniki poni\u017cej", 
    "Please note the following error:<br><br>": "Zwr\u00f3\u0107 uwag\u0119 na nast\u0119puj\u0105cy b\u0142\u0105d: <br><br>", 
    "Requirements Successfully Uploaded": "Wymagania zosta\u0142y pomy\u015blnie zmienione", 
    "Uploading Requirements and building environment ... Please Wait": "Dodawanie wymaga\u0144 i budowanie \u015brodowiska... Prosz\u0119 czeka\u0107", 
    "Uploading and evaluating iPython Notebook ... Please Wait": "Przesy\u0142anie i ewaluacja notatnika Python... Prosz\u0119 czeka\u0107", 
    "Uploading and evaluating iPython notebook ... Please Wait": "Przesy\u0142anie i ocenianie notatnika Python ... Prosz\u0119 czeka\u0107"
  };
  for (var key in newcatalog) {
    django.catalog[key] = newcatalog[key];
  }
  

  if (!django.jsi18n_initialized) {
    django.gettext = function(msgid) {
      var value = django.catalog[msgid];
      if (typeof(value) == 'undefined') {
        return msgid;
      } else {
        return (typeof(value) == 'string') ? value : value[0];
      }
    };

    django.ngettext = function(singular, plural, count) {
      var value = django.catalog[singular];
      if (typeof(value) == 'undefined') {
        return (count == 1) ? singular : plural;
      } else {
        return value[django.pluralidx(count)];
      }
    };

    django.gettext_noop = function(msgid) { return msgid; };

    django.pgettext = function(context, msgid) {
      var value = django.gettext(context + '\x04' + msgid);
      if (value.indexOf('\x04') != -1) {
        value = msgid;
      }
      return value;
    };

    django.npgettext = function(context, singular, plural, count) {
      var value = django.ngettext(context + '\x04' + singular, context + '\x04' + plural, count);
      if (value.indexOf('\x04') != -1) {
        value = django.ngettext(singular, plural, count);
      }
      return value;
    };

    django.interpolate = function(fmt, obj, named) {
      if (named) {
        return fmt.replace(/%\(\w+\)s/g, function(match){return String(obj[match.slice(2,-2)])});
      } else {
        return fmt.replace(/%s/g, function(match){return String(obj.shift())});
      }
    };


    /* formatting library */

    django.formats = {
    "DATETIME_FORMAT": "j\\-\\a \\d\\e F Y\\, \\j\\e H:i", 
    "DATETIME_INPUT_FORMATS": [
      "%Y-%m-%d %H:%M:%S", 
      "%Y-%m-%d %H:%M", 
      "%Y-%m-%d", 
      "%Y.%m.%d %H:%M:%S", 
      "%Y.%m.%d %H:%M", 
      "%Y.%m.%d", 
      "%d/%m/%Y %H:%M:%S", 
      "%d/%m/%Y %H:%M", 
      "%d/%m/%Y", 
      "%y-%m-%d %H:%M:%S", 
      "%y-%m-%d %H:%M", 
      "%y-%m-%d", 
      "%Y-%m-%d %H:%M:%S.%f"
    ], 
    "DATE_FORMAT": "j\\-\\a \\d\\e F Y", 
    "DATE_INPUT_FORMATS": [
      "%Y-%m-%d", 
      "%y-%m-%d", 
      "%Y %m %d", 
      "%d-a de %b %Y", 
      "%d %b %Y", 
      "%d-a de %B %Y", 
      "%d %B %Y", 
      "%d %m %Y"
    ], 
    "DECIMAL_SEPARATOR": ",", 
    "FIRST_DAY_OF_WEEK": "1", 
    "MONTH_DAY_FORMAT": "j\\-\\a \\d\\e F", 
    "NUMBER_GROUPING": "3", 
    "SHORT_DATETIME_FORMAT": "Y-m-d H:i", 
    "SHORT_DATE_FORMAT": "Y-m-d", 
    "THOUSAND_SEPARATOR": "\u00a0", 
    "TIME_FORMAT": "H:i", 
    "TIME_INPUT_FORMATS": [
      "%H:%M:%S", 
      "%H:%M", 
      "%H:%M:%S.%f"
    ], 
    "YEAR_MONTH_FORMAT": "F \\d\\e Y"
  };

    django.get_format = function(format_type) {
      var value = django.formats[format_type];
      if (typeof(value) == 'undefined') {
        return format_type;
      } else {
        return value;
      }
    };

    /* add to global namespace */
    globals.pluralidx = django.pluralidx;
    globals.gettext = django.gettext;
    globals.ngettext = django.ngettext;
    globals.gettext_noop = django.gettext_noop;
    globals.pgettext = django.pgettext;
    globals.npgettext = django.npgettext;
    globals.interpolate = django.interpolate;
    globals.get_format = django.get_format;

    django.jsi18n_initialized = true;
  }

}(this));


                  }
                };
                JUPYTERGRADEDXBLOCKI18N.init();
                global.JUPYTERGRADEDXBLOCKI18N = JUPYTERGRADEDXBLOCKI18N;
            }(this));
        