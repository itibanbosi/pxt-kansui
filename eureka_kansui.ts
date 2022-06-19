/* Ver3.7 Eureka_IO &　iːo*/


enum onoff {
    ON,
    OFF,
}





//% color="#ff4500" weight=94 block="かん水機"

namespace newio_blocks {

    //% color="#1E90FF" weight=100 block="待ち時間（秒）|%second|" group="0 基本"
    //% second.min=0 second.max=10
    export function driveForwards(second: number): void {
        basic.pause(second * 1000);
    }



    //% color="#4741f1" weight=80 blockId=kantan1 block="パルス方式センサー値" group="1 センサー簡単ブロック"
    export function kantan1(): number {
    let kansui_V;
    pins.digitalWritePin(DigitalPin.P0, 1);
    basic.pause(10);
    kansui_V=pins.analogReadPin(AnalogPin.P1);
    pins.digitalWritePin(DigitalPin.P0, 0);
        basic.pause(500);
    return kansui_V
    }




    //% color="#4741f1"  weight=78 blockId=kansui_DISP1 block="パルス方式センサーの電圧値を表示" group="1 センサー簡単ブロック"
    export function kansui_DISP1() {
        let kansui_V;
        pins.digitalWritePin(DigitalPin.P0, 1);
        basic.pause(10);
        kansui_V = pins.analogReadPin(AnalogPin.P1);
        pins.digitalWritePin(DigitalPin.P0, 0);
        basic.pause(500);
        return kansui_V
        basic.showNumber(kansui_V);
    }

    //% color="#696969" weight=56 blockId=pump_relay block="水ポンプ |%mode|" group="2 水ポンプ"
    export function pump_relay(mode: onoff) {
        switch (mode) {
            case onoff.ON: {
                return pins.digitalWritePin(DigitalPin.P2, 1);
            }
            case onoff.OFF: {

                return pins.digitalWritePin(DigitalPin.P2, 0);
            }
        }
    }
    //% color="#696969" weight=54 blockId=pump_relay_2 block="水ポンプの流量|%syuturyoku|" group="2 水ポンプ"
    //% syuturyoku.min=0 syuturyoku.max=1023
    export function IO_relay_2(syuturyoku: number) {
        return pins.analogWritePin(AnalogPin.P2, syuturyoku);
    }


    //% color="#ffa800" weight=40 blockId=kansui_onoff block="(simple)センサーへの電圧 |%mode|" group="3 センサー　シンプル"
    export function kansui_onoff(mode: onoff) {
        switch (mode) {
            case onoff.ON:
                pins.digitalWritePin(DigitalPin.P0, 1);
                break;

            case onoff.OFF:
                pins.digitalWritePin(DigitalPin.P0, 0);
                break;
        }
    }

    //% color="#ffa800" weight=38 blockId=kansui_sokutei block="(simple)センサー電圧値" group="3 センサー　シンプル"
    export function kansui_sokutei(): number {
        return pins.analogReadPin(AnalogPin.P1);
    }

    //% color="#ffa800"  weight=36 blockId=kansui_DISP2 block="(simple)センサーの電圧値を表示" group="3 センサー　シンプル"
    export function kansui_DISP2() {
        let kansui_V;
        kansui_V = pins.analogReadPin(AnalogPin.P1);
        basic.showNumber(kansui_V);
    }







}


