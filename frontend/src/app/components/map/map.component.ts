import { Component } from '@angular/core';

@Component({
    selector: 'ui-map',
    templateUrl: 'map.component.html'
    // styleUrls: ['map.component.scss'],
})
export class MapComponent {
    public title: string = 'My first angular2-google-maps project';
    public lat: number = 51.678418;
    public lng: number = 7.809007;

    public arr: any = [
        {
            label: 'test na pid`ora',
            latitude: 51.678419,
            longitude: 7.809004
        },
        {
            label: 'test na pid`ora1',
            latitude: 51.678413,
            longitude: 7.809004
        },
        {
            label: 'test na pid`ora2',
            latitude: 51.678411,
            longitude: 7.809004
        }
    ]
}