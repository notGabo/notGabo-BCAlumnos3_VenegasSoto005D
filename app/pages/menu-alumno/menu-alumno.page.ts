import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-menu-alumno',
  templateUrl: './menu-alumno.page.html',
  styleUrls: ['./menu-alumno.page.scss'],
})
export class MenuAlumnoPage implements OnInit {

  optionZbar: any;
  scannedOutput: any;

  constructor(private alertController: AlertController,) { }

  ngOnInit() {
  }

  async ingresarCodigo() {
    const alert = await this.alertController.create({
      cssClass: 'inputCodigoAlumno',
      inputs: [{
        placeholder: 'Codigo',
        cssClass: 'colorInput'
      }],
      buttons: [{
        text: 'Cancelar',
        role: 'cancel',
        cssClass: 'botonesCodigoAlumno'

      },
      {
        text: 'Ingresar',
        role: 'confirm'
      }],
    });
    await alert.present();
  };

  escanearCodigo() {
    console.log('Aun hay que implementar esto xd');
  };
}
