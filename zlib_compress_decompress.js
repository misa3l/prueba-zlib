const zlib = require("zlib");

let text = '{"serial_ticket":"000055","total_ticket":13000,"items":{"0":{"loteria":"GRAN RUL","hora":"15:30","alias":"CARNERO","id_loteria":2,"id_horario":17,"numero":1,"monto":100},"1":{"loteria":"GRAN RUL","hora":"19:30","alias":"CARNERO","id_loteria":2,"id_horario":29,"numero":1,"monto":100},"2":{"loteria":"GRAN RUL","hora":"18:30","alias":"CARNERO","id_loteria":2,"id_horario":26,"numero":1,"monto":100},"3":{"loteria":"GRAN RUL","hora":"16:30","alias":"CARNERO","id_loteria":2,"id_horario":20,"numero":1,"monto":100},"4":{"loteria":"GRAN RUL","hora":"17:30","alias":"CARNERO","id_loteria":2,"id_horario":23,"numero":1,"monto":100},"5":{"loteria":"LA GRANJ","hora":"18:00","alias":"CARNERO","id_loteria":3,"id_horario":25,"numero":1,"monto":100},"6":{"loteria":"LA GRANJ","hora":"19:00","alias":"CARNERO","id_loteria":3,"id_horario":28,"numero":1,"monto":100},"7":{"loteria":"LA GRANJ","hora":"17:00","alias":"CARNERO","id_loteria":3,"id_horario":22,"numero":1,"monto":100},"8":{"loteria":"LA GRANJ","hora":"16:00","alias":"CARNERO","id_loteria":3,"id_horario":19,"numero":1,"monto":100},"9":{"loteria":"LOTO ACT","hora":"19:00","alias":"CARNERO","id_loteria":1,"id_horario":27,"numero":1,"monto":100},"10":{"loteria":"LOTO ACT","hora":"18:00","alias":"CARNERO","id_loteria":1,"id_horario":24,"numero":1,"monto":100},"11":{"loteria":"LOTO ACT","hora":"17:00","alias":"CARNERO","id_loteria":1,"id_horario":21,"numero":1,"monto":100},"12":{"loteria":"LOTO ACT","hora":"16:00","alias":"CARNERO","id_loteria":1,"id_horario":18,"numero":1,"monto":100},"13":{"loteria":"GRAN RUL","hora":"15:30","alias":"TORO","id_loteria":2,"id_horario":17,"numero":2,"monto":100},"14":{"loteria":"GRAN RUL","hora":"19:30","alias":"TORO","id_loteria":2,"id_horario":29,"numero":2,"monto":100},"15":{"loteria":"GRAN RUL","hora":"18:30","alias":"TORO","id_loteria":2,"id_horario":26,"numero":2,"monto":100},"16":{"loteria":"GRAN RUL","hora":"16:30","alias":"TORO","id_loteria":2,"id_horario":20,"numero":2,"monto":100},"17":{"loteria":"GRAN RUL","hora":"17:30","alias":"TORO","id_loteria":2,"id_horario":23,"numero":2,"monto":100},"18":{"loteria":"LA GRANJ","hora":"18:00","alias":"TORO","id_loteria":3,"id_horario":25,"numero":2,"monto":100},"19":{"loteria":"LA GRANJ","hora":"19:00","alias":"TORO","id_loteria":3,"id_horario":28,"numero":2,"monto":100},"20":{"loteria":"LA GRANJ","hora":"17:00","alias":"TORO","id_loteria":3,"id_horario":22,"numero":2,"monto":100},"21":{"loteria":"LA GRANJ","hora":"16:00","alias":"TORO","id_loteria":3,"id_horario":19,"numero":2,"monto":100},"22":{"loteria":"LOTO ACT","hora":"19:00","alias":"TORO","id_loteria":1,"id_horario":27,"numero":2,"monto":100},"23":{"loteria":"LOTO ACT","hora":"18:00","alias":"TORO","id_loteria":1,"id_horario":24,"numero":2,"monto":100},"24":{"loteria":"LOTO ACT","hora":"17:00","alias":"TORO","id_loteria":1,"id_horario":21,"numero":2,"monto":100},"25":{"loteria":"LOTO ACT","hora":"16:00","alias":"TORO","id_loteria":1,"id_horario":18,"numero":2,"monto":100},"26":{"loteria":"GRAN RUL","hora":"15:30","alias":"CIEMPIES","id_loteria":2,"id_horario":17,"numero":3,"monto":100},"27":{"loteria":"GRAN RUL","hora":"19:30","alias":"CIEMPIES","id_loteria":2,"id_horario":29,"numero":3,"monto":100},"28":{"loteria":"GRAN RUL","hora":"18:30","alias":"CIEMPIES","id_loteria":2,"id_horario":26,"numero":3,"monto":100},"29":{"loteria":"GRAN RUL","hora":"16:30","alias":"CIEMPIES","id_loteria":2,"id_horario":20,"numero":3,"monto":100},"30":{"loteria":"GRAN RUL","hora":"17:30","alias":"CIEMPIES","id_loteria":2,"id_horario":23,"numero":3,"monto":100},"31":{"loteria":"LA GRANJ","hora":"18:00","alias":"CIEMPIES","id_loteria":3,"id_horario":25,"numero":3,"monto":100},"32":{"loteria":"LA GRANJ","hora":"19:00","alias":"CIEMPIES","id_loteria":3,"id_horario":28,"numero":3,"monto":100},"33":{"loteria":"LA GRANJ","hora":"17:00","alias":"CIEMPIES","id_loteria":3,"id_horario":22,"numero":3,"monto":100},"34":{"loteria":"LA GRANJ","hora":"16:00","alias":"CIEMPIES","id_loteria":3,"id_horario":19,"numero":3,"monto":100},"35":{"loteria":"LOTO ACT","hora":"19:00","alias":"CIEMPIES","id_loteria":1,"id_horario":27,"numero":3,"monto":100},"36":{"loteria":"LOTO ACT","hora":"18:00","alias":"CIEMPIES","id_loteria":1,"id_horario":24,"numero":3,"monto":100},"37":{"loteria":"LOTO ACT","hora":"17:00","alias":"CIEMPIES","id_loteria":1,"id_horario":21,"numero":3,"monto":100},"38":{"loteria":"LOTO ACT","hora":"16:00","alias":"CIEMPIES","id_loteria":1,"id_horario":18,"numero":3,"monto":100},"39":{"loteria":"GRAN RUL","hora":"15:30","alias":"ALACRAN","id_loteria":2,"id_horario":17,"numero":4,"monto":100},"40":{"loteria":"GRAN RUL","hora":"19:30","alias":"ALACRAN","id_loteria":2,"id_horario":29,"numero":4,"monto":100},"41":{"loteria":"GRAN RUL","hora":"18:30","alias":"ALACRAN","id_loteria":2,"id_horario":26,"numero":4,"monto":100},"42":{"loteria":"GRAN RUL","hora":"16:30","alias":"ALACRAN","id_loteria":2,"id_horario":20,"numero":4,"monto":100},"43":{"loteria":"GRAN RUL","hora":"17:30","alias":"ALACRAN","id_loteria":2,"id_horario":23,"numero":4,"monto":100},"44":{"loteria":"LA GRANJ","hora":"18:00","alias":"ALACRAN","id_loteria":3,"id_horario":25,"numero":4,"monto":100},"45":{"loteria":"LA GRANJ","hora":"19:00","alias":"ALACRAN","id_loteria":3,"id_horario":28,"numero":4,"monto":100},"46":{"loteria":"LA GRANJ","hora":"17:00","alias":"ALACRAN","id_loteria":3,"id_horario":22,"numero":4,"monto":100},"47":{"loteria":"LA GRANJ","hora":"16:00","alias":"ALACRAN","id_loteria":3,"id_horario":19,"numero":4,"monto":100},"48":{"loteria":"LOTO ACT","hora":"19:00","alias":"ALACRAN","id_loteria":1,"id_horario":27,"numero":4,"monto":100},"49":{"loteria":"LOTO ACT","hora":"18:00","alias":"ALACRAN","id_loteria":1,"id_horario":24,"numero":4,"monto":100},"50":{"loteria":"LOTO ACT","hora":"17:00","alias":"ALACRAN","id_loteria":1,"id_horario":21,"numero":4,"monto":100},"51":{"loteria":"LOTO ACT","hora":"16:00","alias":"ALACRAN","id_loteria":1,"id_horario":18,"numero":4,"monto":100},"52":{"loteria":"GRAN RUL","hora":"15:30","alias":"LEON","id_loteria":2,"id_horario":17,"numero":5,"monto":100},"53":{"loteria":"GRAN RUL","hora":"19:30","alias":"LEON","id_loteria":2,"id_horario":29,"numero":5,"monto":100},"54":{"loteria":"GRAN RUL","hora":"18:30","alias":"LEON","id_loteria":2,"id_horario":26,"numero":5,"monto":100},"55":{"loteria":"GRAN RUL","hora":"16:30","alias":"LEON","id_loteria":2,"id_horario":20,"numero":5,"monto":100},"56":{"loteria":"GRAN RUL","hora":"17:30","alias":"LEON","id_loteria":2,"id_horario":23,"numero":5,"monto":100},"57":{"loteria":"LA GRANJ","hora":"18:00","alias":"LEON","id_loteria":3,"id_horario":25,"numero":5,"monto":100},"58":{"loteria":"LA GRANJ","hora":"19:00","alias":"LEON","id_loteria":3,"id_horario":28,"numero":5,"monto":100},"59":{"loteria":"LA GRANJ","hora":"17:00","alias":"LEON","id_loteria":3,"id_horario":22,"numero":5,"monto":100},"60":{"loteria":"LA GRANJ","hora":"16:00","alias":"LEON","id_loteria":3,"id_horario":19,"numero":5,"monto":100},"61":{"loteria":"LOTO ACT","hora":"19:00","alias":"LEON","id_loteria":1,"id_horario":27,"numero":5,"monto":100},"62":{"loteria":"LOTO ACT","hora":"18:00","alias":"LEON","id_loteria":1,"id_horario":24,"numero":5,"monto":100},"63":{"loteria":"LOTO ACT","hora":"17:00","alias":"LEON","id_loteria":1,"id_horario":21,"numero":5,"monto":100},"64":{"loteria":"LOTO ACT","hora":"16:00","alias":"LEON","id_loteria":1,"id_horario":18,"numero":5,"monto":100},"65":{"loteria":"GRAN RUL","hora":"15:30","alias":"RANA","id_loteria":2,"id_horario":17,"numero":6,"monto":100},"66":{"loteria":"GRAN RUL","hora":"19:30","alias":"RANA","id_loteria":2,"id_horario":29,"numero":6,"monto":100},"67":{"loteria":"GRAN RUL","hora":"18:30","alias":"RANA","id_loteria":2,"id_horario":26,"numero":6,"monto":100},"68":{"loteria":"GRAN RUL","hora":"16:30","alias":"RANA","id_loteria":2,"id_horario":20,"numero":6,"monto":100},"69":{"loteria":"GRAN RUL","hora":"17:30","alias":"RANA","id_loteria":2,"id_horario":23,"numero":6,"monto":100},"70":{"loteria":"LA GRANJ","hora":"18:00","alias":"RANA","id_loteria":3,"id_horario":25,"numero":6,"monto":100},"71":{"loteria":"LA GRANJ","hora":"19:00","alias":"RANA","id_loteria":3,"id_horario":28,"numero":6,"monto":100},"72":{"loteria":"LA GRANJ","hora":"17:00","alias":"RANA","id_loteria":3,"id_horario":22,"numero":6,"monto":100},"73":{"loteria":"LA GRANJ","hora":"16:00","alias":"RANA","id_loteria":3,"id_horario":19,"numero":6,"monto":100},"74":{"loteria":"LOTO ACT","hora":"19:00","alias":"RANA","id_loteria":1,"id_horario":27,"numero":6,"monto":100},"75":{"loteria":"LOTO ACT","hora":"18:00","alias":"RANA","id_loteria":1,"id_horario":24,"numero":6,"monto":100},"76":{"loteria":"LOTO ACT","hora":"17:00","alias":"RANA","id_loteria":1,"id_horario":21,"numero":6,"monto":100},"77":{"loteria":"LOTO ACT","hora":"16:00","alias":"RANA","id_loteria":1,"id_horario":18,"numero":6,"monto":100},"78":{"loteria":"GRAN RUL","hora":"15:30","alias":"PERICO","id_loteria":2,"id_horario":17,"numero":7,"monto":100},"79":{"loteria":"GRAN RUL","hora":"19:30","alias":"PERICO","id_loteria":2,"id_horario":29,"numero":7,"monto":100},"80":{"loteria":"GRAN RUL","hora":"18:30","alias":"PERICO","id_loteria":2,"id_horario":26,"numero":7,"monto":100},"81":{"loteria":"GRAN RUL","hora":"16:30","alias":"PERICO","id_loteria":2,"id_horario":20,"numero":7,"monto":100},"82":{"loteria":"GRAN RUL","hora":"17:30","alias":"PERICO","id_loteria":2,"id_horario":23,"numero":7,"monto":100},"83":{"loteria":"LA GRANJ","hora":"18:00","alias":"PERICO","id_loteria":3,"id_horario":25,"numero":7,"monto":100},"84":{"loteria":"LA GRANJ","hora":"19:00","alias":"PERICO","id_loteria":3,"id_horario":28,"numero":7,"monto":100},"85":{"loteria":"LA GRANJ","hora":"17:00","alias":"PERICO","id_loteria":3,"id_horario":22,"numero":7,"monto":100},"86":{"loteria":"LA GRANJ","hora":"16:00","alias":"PERICO","id_loteria":3,"id_horario":19,"numero":7,"monto":100},"87":{"loteria":"LOTO ACT","hora":"19:00","alias":"PERICO","id_loteria":1,"id_horario":27,"numero":7,"monto":100},"88":{"loteria":"LOTO ACT","hora":"18:00","alias":"PERICO","id_loteria":1,"id_horario":24,"numero":7,"monto":100},"89":{"loteria":"LOTO ACT","hora":"17:00","alias":"PERICO","id_loteria":1,"id_horario":21,"numero":7,"monto":100},"90":{"loteria":"LOTO ACT","hora":"16:00","alias":"PERICO","id_loteria":1,"id_horario":18,"numero":7,"monto":100},"91":{"loteria":"GRAN RUL","hora":"15:30","alias":"RATON","id_loteria":2,"id_horario":17,"numero":8,"monto":100},"92":{"loteria":"GRAN RUL","hora":"19:30","alias":"RATON","id_loteria":2,"id_horario":29,"numero":8,"monto":100},"93":{"loteria":"GRAN RUL","hora":"18:30","alias":"RATON","id_loteria":2,"id_horario":26,"numero":8,"monto":100},"94":{"loteria":"GRAN RUL","hora":"16:30","alias":"RATON","id_loteria":2,"id_horario":20,"numero":8,"monto":100},"95":{"loteria":"GRAN RUL","hora":"17:30","alias":"RATON","id_loteria":2,"id_horario":23,"numero":8,"monto":100},"96":{"loteria":"LA GRANJ","hora":"18:00","alias":"RATON","id_loteria":3,"id_horario":25,"numero":8,"monto":100},"97":{"loteria":"LA GRANJ","hora":"19:00","alias":"RATON","id_loteria":3,"id_horario":28,"numero":8,"monto":100},"98":{"loteria":"LA GRANJ","hora":"17:00","alias":"RATON","id_loteria":3,"id_horario":22,"numero":8,"monto":100},"99":{"loteria":"LA GRANJ","hora":"16:00","alias":"RATON","id_loteria":3,"id_horario":19,"numero":8,"monto":100},"100":{"loteria":"LOTO ACT","hora":"19:00","alias":"RATON","id_loteria":1,"id_horario":27,"numero":8,"monto":100},"101":{"loteria":"LOTO ACT","hora":"18:00","alias":"RATON","id_loteria":1,"id_horario":24,"numero":8,"monto":100},"102":{"loteria":"LOTO ACT","hora":"17:00","alias":"RATON","id_loteria":1,"id_horario":21,"numero":8,"monto":100},"103":{"loteria":"LOTO ACT","hora":"16:00","alias":"RATON","id_loteria":1,"id_horario":18,"numero":8,"monto":100},"104":{"loteria":"GRAN RUL","hora":"15:30","alias":"AGUILA","id_loteria":2,"id_horario":17,"numero":9,"monto":100},"105":{"loteria":"GRAN RUL","hora":"19:30","alias":"AGUILA","id_loteria":2,"id_horario":29,"numero":9,"monto":100},"106":{"loteria":"GRAN RUL","hora":"18:30","alias":"AGUILA","id_loteria":2,"id_horario":26,"numero":9,"monto":100},"107":{"loteria":"GRAN RUL","hora":"16:30","alias":"AGUILA","id_loteria":2,"id_horario":20,"numero":9,"monto":100},"108":{"loteria":"GRAN RUL","hora":"17:30","alias":"AGUILA","id_loteria":2,"id_horario":23,"numero":9,"monto":100},"109":{"loteria":"LA GRANJ","hora":"18:00","alias":"AGUILA","id_loteria":3,"id_horario":25,"numero":9,"monto":100},"110":{"loteria":"LA GRANJ","hora":"19:00","alias":"AGUILA","id_loteria":3,"id_horario":28,"numero":9,"monto":100},"111":{"loteria":"LA GRANJ","hora":"17:00","alias":"AGUILA","id_loteria":3,"id_horario":22,"numero":9,"monto":100},"112":{"loteria":"LA GRANJ","hora":"16:00","alias":"AGUILA","id_loteria":3,"id_horario":19,"numero":9,"monto":100},"113":{"loteria":"LOTO ACT","hora":"19:00","alias":"AGUILA","id_loteria":1,"id_horario":27,"numero":9,"monto":100},"114":{"loteria":"LOTO ACT","hora":"18:00","alias":"AGUILA","id_loteria":1,"id_horario":24,"numero":9,"monto":100},"115":{"loteria":"LOTO ACT","hora":"17:00","alias":"AGUILA","id_loteria":1,"id_horario":21,"numero":9,"monto":100},"116":{"loteria":"LOTO ACT","hora":"16:00","alias":"AGUILA","id_loteria":1,"id_horario":18,"numero":9,"monto":100},"117":{"loteria":"GRAN RUL","hora":"15:30","alias":"TIGRE","id_loteria":2,"id_horario":17,"numero":10,"monto":100},"118":{"loteria":"GRAN RUL","hora":"19:30","alias":"TIGRE","id_loteria":2,"id_horario":29,"numero":10,"monto":100},"119":{"loteria":"GRAN RUL","hora":"18:30","alias":"TIGRE","id_loteria":2,"id_horario":26,"numero":10,"monto":100},"120":{"loteria":"GRAN RUL","hora":"16:30","alias":"TIGRE","id_loteria":2,"id_horario":20,"numero":10,"monto":100},"121":{"loteria":"GRAN RUL","hora":"17:30","alias":"TIGRE","id_loteria":2,"id_horario":23,"numero":10,"monto":100},"122":{"loteria":"LA GRANJ","hora":"18:00","alias":"TIGRE","id_loteria":3,"id_horario":25,"numero":10,"monto":100},"123":{"loteria":"LA GRANJ","hora":"19:00","alias":"TIGRE","id_loteria":3,"id_horario":28,"numero":10,"monto":100},"124":{"loteria":"LA GRANJ","hora":"17:00","alias":"TIGRE","id_loteria":3,"id_horario":22,"numero":10,"monto":100},"125":{"loteria":"LA GRANJ","hora":"16:00","alias":"TIGRE","id_loteria":3,"id_horario":19,"numero":10,"monto":100},"126":{"loteria":"LOTO ACT","hora":"19:00","alias":"TIGRE","id_loteria":1,"id_horario":27,"numero":10,"monto":100},"127":{"loteria":"LOTO ACT","hora":"18:00","alias":"TIGRE","id_loteria":1,"id_horario":24,"numero":10,"monto":100},"128":{"loteria":"LOTO ACT","hora":"17:00","alias":"TIGRE","id_loteria":1,"id_horario":21,"numero":10,"monto":100},"129":{"loteria":"LOTO ACT","hora":"16:00","alias":"TIGRE","id_loteria":1,"id_horario":18,"numero":10,"monto":100}},"hashid_serial":"2da4b6cd","id_ticket":55}';

let compressed;
let hexif;
let unhexif;
let decompress;

try {
    compressed = zlib.deflateSync(text);
    hexif = Buffer.from(compressed).toString("hex");
} catch (error) {
    console.log(error);
}

try {
    unhexif = Buffer.from(hexif, "hex");
    decompress = zlib.inflateSync(unhexif).toString();
} catch (error) {
    console.log(error);
}

console.log("size of original: " + text.length);
console.log("size of compressed: " + compressed.length);
console.log("size of decompressed: " + decompress.length);
console.log("size of hexif: " + hexif.length);
console.log("size of unhexif: " + unhexif.length);
