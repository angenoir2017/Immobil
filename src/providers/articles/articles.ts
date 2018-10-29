import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map";

/*
  Generated class for the ArticlesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ArticlesProvider {

  items:any = [];
  key:string ='items';
  urlAlouer: string;
  urlAvendre: string;
  data: Observable<any>;


  constructor(public http: HttpClient,
              public storage:Storage
                      ){
    console.log('Hello ArticlesProvider Provider');

    this.urlAlouer = 'http://192.168.43.8:3000/api/alouers';
    this.urlAvendre = 'http://192.168.43.8:3000/api/avendres';
  }

  //Partie de manipulation de donnee
  //Ici nous obtenons les objets a afficher via l'api
  getAlouer(){
   return this.data = this.http.get(this.urlAlouer).map(resultat =>resultat);

  }
  getAvendre(){
    return this.data = this.http.get(this.urlAvendre).map(resultat =>resultat);

  }
/*
* this.data.subscribe(resultat =>{
      this.items = resultat;
      this.saveData();
    });
    */
  //Sauvegarde de donnee dans la base de donnee.
  //sous le nom de item
  saveData(){
    this.storage.set(this.key, JSON.stringify(this.items));
  }
  //Lecture des donnees dans la base de donnee
  //en fonction du mot cle
  /*loadData(){
    this.storage.get(this.key).then((val) =>{
        if(val!=null && val !=undefined){
         var retour =JSON.parse(val);
          return retour;
        }else{
          try {
            this.getData();
          } catch (e){
            console.log("la connexion est inactive");
            console.log(e);
          }
        }
      }
    );
  }*/

}
