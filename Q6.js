var MyClass = /** @class */ (function () {
    function MyClass() {
        var _this = this;
        this.getvar = function () { return _this.classvar; };
        this.checkVowel = function (str) {
            if (str[0] == 'a' || str[0] == 'e' || str[0] == 'i' || str[0] == 'o' || str[0] == 'u' || str[0] == 'A' || str[0] == 'E' || str[0] == 'I' || str[0] == 'O' || str[0] == 'U') {
                return true;
            }
            return false;
        };
        this.countLetters = function (str) {
            if (_this.checkVowel(str)) {
                var count = 0;
                for (var i = 1; i < str.length; i++) {
                    if (str[i] != 'a' && str[i] != 'e' && str[i] != 'i' && str[i] != 'o' && str[i] != 'u' && str[i] != 'A' && str[i] != 'E' && str[i] != 'I' && str[i] != 'O' && str[i] != 'U') {
                        count++;
                    }
                }
                return count;
            }
            else {
                var count = 0;
                for (var i = 1; i < str.length; i++) {
                    if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u' || str[i] == 'A' || str[i] == 'E' || str[i] == 'I' || str[i] == 'O' || str[i] == 'U') {
                        count++;
                    }
                }
                return count;
            }
        };
        this.setvar = function (classvar) {
            _this.classvar = classvar;
        };
    }
    return MyClass;
}());
var o = new MyClass();
o.setvar("hello");
console.log("No of vowels:" + o.countLetters(o.getvar()));
o.setvar("apple");
console.log("No of consonants:" + o.countLetters(o.getvar()));
