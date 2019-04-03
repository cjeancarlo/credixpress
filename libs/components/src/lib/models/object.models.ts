import { ValidatorFn } from '@angular/forms';
import { OptionsItems } from '@credix/back-end';
import { Component } from '@angular/compiler/src/core';

/**tipo de onbjeto que se va a usar para la edicion del campo */
export type EditType = 'NONE' | 'INPUT' | 'SLIDE' | 'SELECT' | 'ACTIONSCOLUMN';


export interface  Details {
    component: any
    label: string;
}

export interface FieldType {
    /**nombre que identifica al campo */
    name: string, 
    /**type atributo html solo probado para number, text, email  */
    type?: string, 
    /**si es verdadero el campo lo agrega como parte del query de busqueda   */
    search?: boolean, 
    /**tipo de objeto que se va a usar para la edicion del campo 'NONE' | 'INPUT' | 'SLIDE' | 'SELECT' | 'ACTIONSCOLUMN';*/
    editType: EditType, 
    /**etiqueta  del campo  */
    label?: string,
    /** Array de  validator is a function that processes a FormControl or collection of controls and 
     * returns an error map or null. A null map means that validation has passed. */
    validators?: ValidatorFn[]
    selectConfig?:{
    /**nombre del campo que va a usar la funciton de filtrado o busqueda */
        filterField: string,
    /** array de elementos de SELECT */
        optionSource: OptionsItems[],
        /**si el SELECT tiene dependencia se coloca el nombre del campo padre
        * ejemplo pais => estado => ciudad, si, soy pais mi parentKey es null
        * y mi childKey es estado
       */
        parentKey: string, 
        /**si algun select depende de el se coloca el nombre del campo 
         * ejemplo pais, estado, ciudad si, soy estado mi parentKey es Pais
         * y mi childKey es Ciudad
        */
        childKey: string
    }
}

export interface ModelObject {
    /**clave primaria, nombre del campo que contendra valores unicos  */
    primaryKey: string,
    /**informacion que va ser tomada para informar al usuario que registro esta eliminado*/
    deleteInfo: { 
      question: string
      infoField: string
    },
    fields: FieldType[],
    details?: Details[]
   }