import { contactDbType as ContactDbType } from '../../dbTypes/__generatedFromBackend__/types/contactDbType'

export class ContactDbClass implements ContactDbType {
id?: number;
firstName?: string;
lastName?: string;
associatedCompany?: string;
street?: string;
city?: string;
postCode?: string;
country?: string;
telephone?: string;
email?: string;
isCompany?: boolean;
createdById?: number;
belongsToType?: string;
belongsToId?: number;
 nodeId?: string;

  constructor(id?: number,firstName?: string,lastName?: string,associatedCompany?: string,street?: string,city?: string,postCode?: string,country?: string,telephone?: string,email?: string,isCompany?: boolean,createdById?: number,belongsToType?: string,belongsToId?: number, nodeId?: string,) {
    this.id = id
    this.firstName = firstName
    this.lastName = lastName
    this.associatedCompany = associatedCompany
    this.street = street
    this.city = city
    this.postCode = postCode
    this.country = country
    this.telephone = telephone
    this.email = email
    this.isCompany = isCompany
    this.createdById = createdById
    this.belongsToType = belongsToType
    this.belongsToId = belongsToId
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}