/* Ver3.7 Eureka_IO &　iːo*/


enum onoff {
    ON,
    OFF,
}





//% color="#ff4500" weight=94 block="iːo(ｲｰｵ)せん用"

namespace newio_blocks {




    //% color="#4741f1" weight=89 blockId=kantan1 block="かんたん　センサー値" group="1 センサー簡単ブロック"
    export function kantan1(): number {
    let kansui_V;
    pins.digitalWritePin(DigitalPin.P0, 1);
    basic.pause(10);
    kansui_V=pins.analogReadPin(AnalogPin.P1);
    pins.digitalWritePin(DigitalPin.P0, 0);
        basic.pause(500);
    return kansui_V
    }




    //% color="#a0522d"  weight=79 blockId=kansui_DISP block="かんたん　センサーの電圧値を表示" group="1 センサー簡単ブロック"
    export function kansui_DISP() {
        let kansui_V;
        pins.digitalWritePin(DigitalPin.P0, 1);
        basic.pause(10);
        kansui_V = pins.analogReadPin(AnalogPin.P1);
        pins.digitalWritePin(DigitalPin.P0, 0);
        basic.pause(500);
        return kansui_V
        basic.showNumber(kansui_V);
    }



    //% color="#ffa800" weight=86 blockId=kansui_sokutei block="センサー電圧値" group="3 センサー　シンプル"
    export function kansui_sokutei(): number {
        return pins.analogReadPin(AnalogPin.P1);
    }

    //% color="#4741f1" weight=89 blockId=kansui_onoff block="センサーへの電圧　|%mode|" group="3 センサー　シンプル"
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

    //% color="#a0522d"  weight=79 blockId=kansui_DISP2 block="かんたん　センサーの電圧値を表示" group="3 センサー　シンプル"
    export function kansui_DISP2() {
        let kansui_V;
        kansui_V = pins.analogReadPin(AnalogPin.P1);
        basic.showNumber(kansui_V);
    }

    //% color="#696969" weight=58 blockId=pump_relay block="水ポンプ |%mode|" group="2 水ポンプ"
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
    //% color="#696969" weight=56 blockId=pump_relay_2 block="水ポンプの流量|%syuturyoku|" group="2 水ポンプ"
    //% syuturyoku.min=0 syuturyoku.max=1023
    export function IO_relay_2(syuturyoku: number) {
        return pins.analogWritePin(AnalogPin.P2, syuturyoku);
    }




    //% color="#1E90FF" weight=83 block="待ち時間（秒）|%second|" group="0 基本"
    //% second.min=0 second.max=10
    export function driveForwards(second: number): void {
        basic.pause(second * 1000);
    }


}


