Interpolação     -> {{ variavel }}
class  PessoaComponent{
    public variavel: string;
}



Property binding -> []
	<button (click)="person = male" [disabled]="person.sex=='m'">Male</button>

Event binding ( (event) )
	<button (click)="onSave()">Save</button>
class FormularioCadastroComponent{
    public onSave(){
        .......
    }
}

Two-way-data binding -> [()]
	<input [(ngModel)]="currentHero.name">
	<my-sizer [(size)]="fontSizePx"></my-sizer>


Template reference variables ( #var )
	<input #phone placeholder="phone number">

