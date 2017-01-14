import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'ui-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss'],
})
export class MapComponent {
    title: string = 'My first angular2-google-maps project';
    lat: number = 46.474635;
    lng: number = 30.728760;

    @Input()
    filters: Object;

    @Output()
    fishDescription: EventEmitter<any>;

    constructor() {
        this.fishDescription = new EventEmitter<any>();
        navigator.geolocation.getCurrentPosition(function(pos) {
            console.log(pos);
            //this.lat = pos.coords.latitude;
            //this.lng = pos.coords.longitude;
        })
    }

    public fishZones: any = [
        {
            label: 'Бурлачья балка',
            latitude: 46.342869,
            longitude: 30.644989,
            radius: 1000,
            fish: [
                {
                    name: 'Судак',
                    count: 50
                },
                {
                    name: 'Окунь',
                    count: 70
                }
            ]
        },
        {
            label: 'Днепр-Черкасы',
            latitude: 49.299046,
            longitude: 32.618408,
            radius: 37111,
            fish: [
                {
                    name: 'Язь',
                    count: 15
                },
                {
                    name: 'Лещ',
                    count: 15
                },
                {
                    name: 'Карп',
                    count: 70
                }
            ]
        },
        {
            label: 'Днепр-Запорожье',
            latitude: 47.492849,
            longitude: 35.068359,
            radius: 24111,
            fish: [
                {
                    name: 'Карась',
                    count: 30
                },
                {
                    name: 'Сазан',
                    count: 30
                },
                {
                    name: 'Судак',
                    count: 40
                }
            ]
        },
        {
            label: 'Днепр-Киев',
            latitude: 49.991629,
            longitude: 31.333008,
            radius: 27111,
            fish: [
                {
                    name: 'Карась',
                    count: 50
                },
                {
                    name: 'Окунь',
                    count: 25
                },
                {
                    name: 'Язь',
                    count: 25
                }
            ]
        },
        {
            label: 'Днепр-Припять',
            latitude: 50.977237,
            longitude: 30.498047,
            radius: 33111,
            fish: [
                {
                    name: 'Сом',
                    count: 30
                },
                {
                    name: 'Карп',
                    count: 70
                }
            ]
        },
        {
            label: 'Днепр-Никополь',
            latitude: 47.500271,
            longitude: 34.178467,
            radius: 19111,
            fish: [
                {
                    name: 'Карп',
                    count: 40
                },
                {
                    name: 'Окунь',
                    count: 60
                }
            ]
        },
        {
            label: 'Черное море',
            latitude: 43.304794,
            longitude: 32.497070,
            radius: 319111,
            fish: [
                {
                    name: 'Камбала',
                    count: 15
                },
                {
                    name: 'Бычки',
                    count: 15
                },
                {
                    name: 'Катран',
                    count: 15
                },
                {
                    name: 'Морской окунь',
                    count: 15
                },
                {
                    name: 'Сельдь',
                    count: 25
                }
            ]
        },
        {
            label: 'Азовское море',
            latitude: 46.175551,
            longitude: 35.848145,
            radius: 115111,
            fish: [
                {
                    name: 'Белуга',
                    count: 40,
                    info: {
                        weight: 100,
                        date_range: ['20/01', '30/06'],
                        desc: 'норм рыбка, хорошо под пивасик заходит'
                    }
                },
                {
                    name: 'Камбала',
                    count: 30,
                    info: {
                        weight: 400,
                        date_range: ['20/01', '30/06'],
                        desc: 'норм рыбка, хорошо под пивасик заходит'
                    }
                },
                {
                    name: 'Тарань',
                    count: 30,
                    info: {
                        weight: 200,
                        date_range: ['20/01', '30/06'],
                        desc: 'норм рыбка, хорошо под пивасик заходит'
                    }
                }
            ]
        }
    ];

    public seaDeeps: any = [
        {
            label: 'Черное море',
            latitude: 43.304694,
            longitude: 34.497070,
            radius: 300000,
            deep: 2200
        },
        {
            label: 'Азовское море',
            latitude: 46.175551,
            longitude: 36.848145,
            radius: 155000,
            deep: 20
        },
        {
            label: 'Каспийское море',
            latitude: 41.991140,
            longitude: 50.625000,
            radius: 450000,
            deep: 1024
        },
        {
            label: 'Красное море',
            latitude: 20.527361,
            longitude: 38.496094,
            radius: 550000,
            deep: 2211
        },
        {
            label: 'Мраморное море',
            latitude: 40.628546,
            longitude: 28.300781,
            radius: 150000,
            deep: 1300
        },
        {
            label: 'Средиземное море',
            latitude: 37.490115,
            longitude: 16.699219,
            radius: 1050000,
            deep: 5121
        },
    ];

    public seaTemp: any = [
        {
            label: 'Черное море',
            latitude: 43.304694,
            longitude: 34.497070,
            radius: 300000,
            temp: [5, 25]
        },
    ];

    getContext(){
        return this
    }

    fishMarkerClick(item: any, index: number, e: any) {
        console.log('click', this, item, index);
        console.log(item.fish[index]);
        this.fishDescription.emit(item.fish[index]);
    }
}