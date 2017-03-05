Interpolação     -> {{ variavel }}

Property binding -> []
	<button (click)="person = male" [disabled]="person.sex=='m'">Male</button>

Event binding ( (event) )
	<button (click)="onSave()">Save</button>


Two-way-data binding -> [()]
	<input [(ngModel)]="currentHero.name">
	<my-sizer [(size)]="fontSizePx"></my-sizer>


Template reference variables ( #var )
	<input #phone placeholder="phone number">

