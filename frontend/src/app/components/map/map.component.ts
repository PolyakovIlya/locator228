import { Component, Input, Output } from '@angular/core';

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

    constructor() {
        navigator.geolocation.getCurrentPosition(function(pos) {
            console.log(pos);
            //this.lat = pos.coords.latitude;
            //this.lng = pos.coords.longitude;
        })
    }

    public fishZones: any = [
        {
            label: 'test na pid`ora',
            latitude: 46.342869,
            longitude: 30.644989,
            radius: 1000,
            fish: [
                {
                    name: 'Бычок',
                    count: 50
                },
                {
                    name: 'Beluga',
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
                    name: 'Seledka',
                    count: 30
                },
                {
                    name: 'Beluga',
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
                    name: 'Seledka',
                    count: 30
                },
                {
                    name: 'Beluga',
                    count: 70
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
                    name: 'Seledka',
                    count: 30
                },
                {
                    name: 'Beluga',
                    count: 70
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
                    name: 'Seledka',
                    count: 30
                },
                {
                    name: 'Beluga',
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
                    name: 'Seledka',
                    count: 30
                },
                {
                    name: 'Beluga',
                    count: 70
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
            deep: 220
        },
        {
            label: 'Азовское море',
            latitude: 46.175551,
            longitude: 36.848145,
            radius: 155000,
            deep: 120
        }
    ];

    circleClick(e: any) {
        console.log(e);
        console.log('click');
    }
}