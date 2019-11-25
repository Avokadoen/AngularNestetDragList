import {EntityType} from "./entity-type.enum";
import {ElementRef} from "@angular/core";

export interface StorageEntity {
  barcode: string;
  children: StorageEntity[];
  entityType: EntityType
  elementRefCache: ElementRef<Element> | null
}
