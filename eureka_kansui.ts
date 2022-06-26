/* Ver1.0 Eureka_Automatic irrigation device*/


enum onoff {
    ON,
    OFF,
}

pins.setPull(DigitalPin.P0, PinPullMode.PullNone);
pins.setPull(DigitalPin.P1, PinPullMode.PullNone);

let pulse_time = 10;

//% color="#ff4500" weight=94 block="かん水機"


namespace newio_blocks {

    export enum teikou {
        //% block="大きい"
        大きい,
        //% block="小さい",
        小さい
    }


    //% color="#1E90FF" weight=100 block="待ち時間（秒）|%second|" group="1 基本"
    //% second.min=0 second.max=10
    export function driveForwards(second: number): void {
        basic.pause(second * 1000);
    }

    //% color="#4741f1" weight=80 blockId=tien block="パルス後から測定までの時間 |%pulse| m秒" group="2 パルス方式センサー簡単ブロック"
    export function tien(pulse: number) {
        let pulse_time = pulse;
        basic.showNumber(pulse_time)
    }

    //% color="#4741f1" weight=80 blockId=kantan1 block="パルス方式センサー値" group="2 パルス方式センサー簡単ブロック"
    export function kantan1() :number {
    let kansui_V;
    let tien = pulse_time;
    pins.digitalWritePin(DigitalPin.P0, 1);
    basic.pause(pulse_time);
        kansui_V = Math.round(pins.analogReadPin(AnalogPin.P1) / 1023 * 33)/10;
    pins.digitalWritePin(DigitalPin.P0, 0);
        basic.pause(500);
    /*    basic.showNumber(tien); */
    return kansui_V
    }




    //% color="#4741f1"  weight=78 blockId=kansui_DISP1 block="パルス方式センサーの電圧値を表示" group="2 パルス方式センサー簡単ブロック"
    export function kansui_DISP1() {
        let kansui_V;
        let tien = pulse_time;
        led.enable(false);
        basic.pause(100);
        pins.digitalWritePin(DigitalPin.P0, 1);
        basic.pause(pulse_time);
        kansui_V = Math.round(pins.analogReadPin(AnalogPin.P1) / 1023 * 33) / 10;
        pins.digitalWritePin(DigitalPin.P0, 0);
        led.enable(true);
        basic.pause(500);
        basic.showNumber(kansui_V);
    }

    //% color="#4741f1" weight=30 block="センサー電圧が |%limit| より |%daisyou|" group="2 パルス方式センサー簡単ブロック"
    export function handan1(limit: number, daisyou: teikou): boolean {
        let kansui_V;
        let tien = pulse_time;
        pins.digitalWritePin(DigitalPin.P0, 1);
        basic.pause(pulse_time);
        kansui_V = Math.round(pins.analogReadPin(AnalogPin.P1) / 1023 * 33) / 10;
        pins.digitalWritePin(DigitalPin.P0, 0);
        basic.pause(500);
        switch (daisyou) {
            case teikou.大きい:
                if (kansui_V > limit) {
                    return true;
                } else {
                    return false;
                }
                break;
            case teikou.小さい:
                if (kansui_V < limit) {
                    return true;
                } else {
                    return false;
                }
                break;
        }

    }


    //% color="#696969" weight=56 blockId=pump_relay block="水ポンプ |%mode|" group="3 水ポンプ"
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
    //% color="#696969" weight=54 blockId=pump_relay_2 block="水ポンプのアナログ制御|%syuturyoku|" group="3 水ポンプ"
    //% syuturyoku.min=0 syuturyoku.max=1023
    export function IO_relay_2(syuturyoku: number) {
        return pins.analogWritePin(AnalogPin.P2, syuturyoku);
    }


    //% color="#ffa800" weight=40 blockId=kansui_onoff block="(simple)センサーへの電圧 |%mode|" group="4 (Simple)センサー　パルス式非対応"
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

    //% color="#ffa800" weight=38 blockId=kansui_sokutei block="(simple)センサー電圧値" group="4 (Simple)センサー　パルス式非対応"
    export function kansui_sokutei(): number {
        return Math.round(pins.analogReadPin(AnalogPin.P1) / 1023 * 33) / 10;
    }

    //% color="#ffa800"  weight=36 blockId=kansui_DISP2 block="(simple)センサーの電圧値を表示" group="4 (Simple)センサー　パルス式非対応"
    export function kansui_DISP2() {
        let kansui_V;
        kansui_V = Math.round(pins.analogReadPin(AnalogPin.P1) / 1023 * 33) / 10;
        basic.showNumber(kansui_V);
    }
}


